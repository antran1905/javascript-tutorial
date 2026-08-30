#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          JavaScript Tutorial — Progress Checker             ║
 * ║                                                             ║
 * ║   Run: npm run check          (check all tasks)             ║
 * ║   Run: npm run check:verbose  (show detailed errors)        ║
 * ║   Run: npm run check:task 5   (check a specific task)       ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const fs = require('fs');
const path = require('path');

// ─── ANSI Color Codes ────────────────────────────────────────────────
const c = {
  reset:     '\x1b[0m',
  bold:      '\x1b[1m',
  dim:       '\x1b[2m',
  italic:    '\x1b[3m',
  underline: '\x1b[4m',
  // Foreground
  red:       '\x1b[31m',
  green:     '\x1b[32m',
  yellow:    '\x1b[33m',
  blue:      '\x1b[34m',
  magenta:   '\x1b[35m',
  cyan:      '\x1b[36m',
  white:     '\x1b[37m',
  gray:      '\x1b[90m',
  // Background
  bgRed:     '\x1b[41m',
  bgGreen:   '\x1b[42m',
  bgYellow:  '\x1b[43m',
  bgBlue:    '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan:    '\x1b[46m',
};

// ─── Icons ───────────────────────────────────────────────────────────
const icons = {
  pass:    '✅',
  fail:    '❌',
  skip:    '⏭️ ',
  pending: '⏳',
  rocket:  '🚀',
  star:    '⭐',
  trophy:  '🏆',
  book:    '📖',
  check:   '✓',
  cross:   '✗',
  arrow:   '→',
  dot:     '●',
  line:    '─',
  fire:    '🔥',
  party:   '🎉',
  medal:   '🏅',
};

// ─── Configuration ───────────────────────────────────────────────────
const TASKS_DIR = path.join(__dirname, 'tasks');
const LEVELS = {
  beginner:     { range: [1, 5],   color: c.green,   label: '🌱 Beginner' },
  elementary:   { range: [6, 10],  color: c.cyan,    label: '📘 Elementary' },
  intermediate: { range: [11, 15], color: c.yellow,  label: '⚡ Intermediate' },
  advanced:     { range: [16, 20], color: c.magenta, label: '🔥 Advanced' },
};

// ─── Helpers ─────────────────────────────────────────────────────────
function repeat(str, n) {
  return str.repeat(Math.max(0, n));
}

function padRight(str, len) {
  const visibleLength = str.replace(/\x1b\[[0-9;]*m/g, '').length;
  return str + ' '.repeat(Math.max(0, len - visibleLength));
}

function padLeft(str, len) {
  const visibleLength = str.replace(/\x1b\[[0-9;]*m/g, '').length;
  return ' '.repeat(Math.max(0, len - visibleLength)) + str;
}

function centerText(str, width) {
  const visibleLength = str.replace(/\x1b\[[0-9;]*m/g, '').length;
  const leftPad = Math.floor((width - visibleLength) / 2);
  const rightPad = width - visibleLength - leftPad;
  return ' '.repeat(Math.max(0, leftPad)) + str + ' '.repeat(Math.max(0, rightPad));
}

function getTaskLevel(taskNum) {
  for (const [key, val] of Object.entries(LEVELS)) {
    if (taskNum >= val.range[0] && taskNum <= val.range[1]) return val;
  }
  return { color: c.white, label: 'Unknown' };
}

function getProgressBar(passed, total, width = 30) {
  const ratio = total === 0 ? 0 : passed / total;
  const filled = Math.round(ratio * width);
  const empty = width - filled;
  const percent = Math.round(ratio * 100);

  let barColor = c.red;
  if (percent >= 80) barColor = c.green;
  else if (percent >= 50) barColor = c.yellow;
  else if (percent >= 25) barColor = c.cyan;

  const bar = `${barColor}${repeat('█', filled)}${c.gray}${repeat('░', empty)}${c.reset}`;
  return `${bar} ${barColor}${percent}%${c.reset}`;
}

// ─── Task Discovery ──────────────────────────────────────────────────
function discoverTasks() {
  if (!fs.existsSync(TASKS_DIR)) {
    console.error(`${c.red}Error: tasks/ directory not found!${c.reset}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(TASKS_DIR, { withFileTypes: true });
  const tasks = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const match = entry.name.match(/^(\d+)-(.+)$/);
    if (!match) continue;

    const num = parseInt(match[1], 10);
    const slug = match[2];
    const dir = path.join(TASKS_DIR, entry.name);
    const testFile = path.join(dir, 'test.js');
    const solutionFile = path.join(dir, 'solution.js');
    const readmeFile = path.join(dir, 'README.md');

    // Read task title from README
    let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    if (fs.existsSync(readmeFile)) {
      const content = fs.readFileSync(readmeFile, 'utf-8');
      const titleMatch = content.match(/^#\s+(.+)/m);
      if (titleMatch) {
        title = titleMatch[1].replace(/^Task\s+\d+:\s*/i, '');
      }
    }

    tasks.push({
      num,
      slug,
      title,
      dir: entry.name,
      testFile,
      solutionFile,
      hasTest: fs.existsSync(testFile),
      hasSolution: fs.existsSync(solutionFile),
    });
  }

  return tasks.sort((a, b) => a.num - b.num);
}

// ─── Test Runner ─────────────────────────────────────────────────────
async function runTaskTests(task) {
  if (!task.hasTest) {
    return {
      task,
      status: 'skip',
      message: 'No test file found',
      tests: [],
      passed: 0,
      failed: 0,
      total: 0,
    };
  }

  if (!task.hasSolution) {
    return {
      task,
      status: 'pending',
      message: 'No solution file found — create solution.js to get started!',
      tests: [],
      passed: 0,
      failed: 0,
      total: 0,
    };
  }

  try {
    // Clear require cache so re-runs pick up changes
    const testPath = require.resolve(task.testFile);
    const solutionPath = require.resolve(task.solutionFile);
    delete require.cache[testPath];
    delete require.cache[solutionPath];

    const testModule = require(task.testFile);

    if (typeof testModule.runTests !== 'function') {
      return {
        task,
        status: 'skip',
        message: 'Test file does not export runTests()',
        tests: [],
        passed: 0,
        failed: 0,
        total: 0,
      };
    }

    // Support both sync and async runTests()
    const resultsOrPromise = testModule.runTests();
    const results = resultsOrPromise instanceof Promise
      ? await resultsOrPromise
      : resultsOrPromise;

    const passed = results.filter(r => r.passed).length;
    const failed = results.length - passed;

    return {
      task,
      status: failed === 0 ? 'pass' : 'fail',
      message: failed === 0 ? 'All tests passed!' : `${failed} test(s) failed`,
      tests: results,
      passed,
      failed,
      total: results.length,
    };
  } catch (error) {
    return {
      task,
      status: 'fail',
      message: error.message,
      tests: [],
      passed: 0,
      failed: 1,
      total: 1,
      error,
    };
  }
}

// ─── Display ─────────────────────────────────────────────────────────
function printHeader() {
  const width = 64;
  const line = repeat(icons.line, width);

  console.log();
  console.log(`${c.cyan}${c.bold}  ╔${repeat('═', width)}╗${c.reset}`);
  console.log(`${c.cyan}${c.bold}  ║${centerText(`${icons.rocket} JavaScript Tutorial — Progress Checker ${icons.rocket}`, width)}║${c.reset}`);
  console.log(`${c.cyan}${c.bold}  ║${centerText('From Beginner to Expert', width)}║${c.reset}`);
  console.log(`${c.cyan}${c.bold}  ╚${repeat('═', width)}╝${c.reset}`);
  console.log();
}

function printTaskResult(result, verbose) {
  const { task, status, message, tests, passed, total } = result;
  const level = getTaskLevel(task.num);
  const numStr = String(task.num).padStart(2, '0');

  let icon, statusLabel, statusColor;
  switch (status) {
    case 'pass':
      icon = icons.pass;
      statusLabel = ' PASS ';
      statusColor = `${c.bold}${c.green}`;
      break;
    case 'fail':
      icon = icons.fail;
      statusLabel = ' FAIL ';
      statusColor = `${c.bold}${c.red}`;
      break;
    case 'skip':
      icon = icons.skip;
      statusLabel = ' SKIP ';
      statusColor = `${c.bold}${c.gray}`;
      break;
    case 'pending':
      icon = icons.pending;
      statusLabel = ' TODO ';
      statusColor = `${c.bold}${c.yellow}`;
      break;
  }

  const taskLabel = `${c.dim}Task ${numStr}${c.reset}`;
  const title = `${c.bold}${task.title}${c.reset}`;
  const badge = `${statusColor}${statusLabel}${c.reset}`;

  if (total > 0) {
    const miniBar = getProgressBar(passed, total, 15);
    console.log(`  ${icon}  ${badge}  ${taskLabel}  ${title}  ${miniBar}  ${c.dim}(${passed}/${total})${c.reset}`);
  } else {
    console.log(`  ${icon}  ${badge}  ${taskLabel}  ${title}  ${c.dim}${message}${c.reset}`);
  }

  // Show individual test results in verbose mode
  if (verbose && tests.length > 0) {
    for (const test of tests) {
      if (test.passed) {
        console.log(`${c.dim}         ${c.green}${icons.check} ${test.name}${c.reset}`);
      } else {
        console.log(`${c.dim}         ${c.red}${icons.cross} ${test.name}${c.reset}`);
        if (test.error) {
          console.log(`${c.dim}           ${c.red}${icons.arrow} ${test.error}${c.reset}`);
        }
      }
    }
  }

  // Show error in verbose mode for tasks that errored
  if (verbose && result.error) {
    console.log(`${c.dim}         ${c.red}${icons.arrow} ${result.error.message}${c.reset}`);
  }
}

function printLevelSummary(levelKey, levelInfo, results) {
  const levelResults = results.filter(r => {
    const num = r.task.num;
    return num >= levelInfo.range[0] && num <= levelInfo.range[1];
  });

  const passed = levelResults.filter(r => r.status === 'pass').length;
  const total = levelResults.length;
  const bar = getProgressBar(passed, total, 20);

  console.log(`  ${levelInfo.label.padEnd(20)} ${bar}  ${c.dim}${passed}/${total} tasks${c.reset}`);
}

function printSummary(results) {
  const total = results.length;
  const passed = results.filter(r => r.status === 'pass').length;
  const failed = results.filter(r => r.status === 'fail').length;
  const pending = results.filter(r => r.status === 'pending' || r.status === 'skip').length;

  const width = 64;

  console.log();
  console.log(`${c.cyan}  ${repeat('─', width)}${c.reset}`);
  console.log(`${c.bold}  ${icons.book} Progress by Level:${c.reset}`);
  console.log();

  for (const [key, info] of Object.entries(LEVELS)) {
    printLevelSummary(key, info, results);
  }

  console.log();
  console.log(`${c.cyan}  ${repeat('─', width)}${c.reset}`);
  console.log(`${c.bold}  ${icons.trophy} Overall Progress:${c.reset}`);
  console.log();

  const overallBar = getProgressBar(passed, total, 30);
  console.log(`  ${overallBar}  ${c.bold}${passed}${c.reset}${c.dim}/${total} tasks completed${c.reset}`);
  console.log();

  // Stats row
  console.log(`  ${c.green}${icons.pass} Passed: ${passed}${c.reset}    ${c.red}${icons.fail} Failed: ${failed}${c.reset}    ${c.yellow}${icons.pending} Pending: ${pending}${c.reset}`);

  // Motivational message
  console.log();
  const ratio = total === 0 ? 0 : passed / total;
  if (ratio === 1) {
    console.log(`  ${icons.party}${icons.trophy}${icons.party} ${c.bold}${c.green}CONGRATULATIONS! You've mastered all tasks!${c.reset} ${icons.party}${icons.trophy}${icons.party}`);
    console.log(`  ${c.dim}You are now a JavaScript expert! ${icons.star}${c.reset}`);
  } else if (ratio >= 0.8) {
    console.log(`  ${icons.fire} ${c.bold}${c.green}Almost there! You're doing amazing!${c.reset} ${icons.fire}`);
    console.log(`  ${c.dim}Just ${total - passed} more task(s) to go!${c.reset}`);
  } else if (ratio >= 0.5) {
    console.log(`  ${icons.star} ${c.bold}${c.yellow}Great progress! You're halfway through!${c.reset} ${icons.star}`);
    console.log(`  ${c.dim}Keep up the momentum!${c.reset}`);
  } else if (ratio >= 0.25) {
    console.log(`  ${icons.rocket} ${c.bold}${c.cyan}Good start! Keep going!${c.reset} ${icons.rocket}`);
    console.log(`  ${c.dim}Every task you solve makes you stronger!${c.reset}`);
  } else if (ratio > 0) {
    console.log(`  ${icons.medal} ${c.bold}${c.cyan}You've taken the first steps!${c.reset} ${icons.medal}`);
    console.log(`  ${c.dim}The journey of a thousand miles begins with a single step.${c.reset}`);
  } else {
    console.log(`  ${icons.rocket} ${c.bold}Ready to start your JavaScript journey?${c.reset} ${icons.rocket}`);
    console.log(`  ${c.dim}Open ${c.cyan}tasks/01-variables/README.md${c.dim} to begin!${c.reset}`);
  }

  console.log();

  // Suggest next task
  const nextTask = results.find(r => r.status !== 'pass');
  if (nextTask && ratio < 1) {
    console.log(`  ${icons.arrow} ${c.bold}Next task:${c.reset} ${c.cyan}tasks/${nextTask.task.dir}/README.md${c.reset}`);
    console.log();
  }
}

// ─── Main ────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose') || args.includes('-v');
  const taskFlagIndex = args.indexOf('--task');
  const specificTask = taskFlagIndex !== -1 ? parseInt(args[taskFlagIndex + 1], 10) : null;

  // Also support: npm run check:task 5  →  node check-progress.js --task 5
  // Or just: node check-progress.js 5
  const directNum = !specificTask && args.length > 0 ? parseInt(args[args.length - 1], 10) : null;
  const targetTask = specificTask || (directNum && !isNaN(directNum) ? directNum : null);

  printHeader();

  let tasks = discoverTasks();

  if (tasks.length === 0) {
    console.log(`  ${c.yellow}No tasks found in the tasks/ directory.${c.reset}`);
    console.log(`  ${c.dim}Make sure the tasks/ directory contains task folders like 01-variables/${c.reset}`);
    console.log();
    process.exit(1);
  }

  if (targetTask) {
    tasks = tasks.filter(t => t.num === targetTask);
    if (tasks.length === 0) {
      console.log(`  ${c.red}Task ${targetTask} not found!${c.reset}`);
      console.log(`  ${c.dim}Available tasks: ${discoverTasks().map(t => t.num).join(', ')}${c.reset}`);
      console.log();
      process.exit(1);
    }
    console.log(`  ${c.dim}Checking Task ${targetTask} only...${c.reset}`);
    console.log();
  }

  // Run all tests (sequentially to support async tests)
  const results = [];
  let currentLevel = null;

  for (const task of tasks) {
    const level = getTaskLevel(task.num);
    if (level.label !== currentLevel) {
      currentLevel = level.label;
      console.log(`  ${level.color}${c.bold}${level.label}${c.reset}`);
      console.log(`  ${c.dim}${repeat('─', 55)}${c.reset}`);
    }

    const result = await runTaskTests(task);
    results.push(result);
    printTaskResult(result, verbose);
  }

  printSummary(results);

  // Exit with error code if any tasks failed (useful for CI)
  const hasFailures = results.some(r => r.status === 'fail');
  process.exit(hasFailures ? 1 : 0);
}

main();

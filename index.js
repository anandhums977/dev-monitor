#!/usr/bin/env node
const chokidar = require('chokidar');
const { spawn } = require('child_process');
const path = require('path');

let appProcess;

const startApp = () => {
  appProcess = spawn('ts-node', [process.argv[2]], { stdio: 'inherit' });
};

startApp();
console.log(`\x1b[32m[dev-monitor]📦 version 1.0.4\x1b[0m`);
console.log(`\x1b[32m[dev-monitor] Starting...\u001b[32m\u{1F504}\u001b[0m\x1b[0m`);
console.log(`\x1b[38;5;208m[dev-monitor] App started!\x1b[0m`);

const basePath = path.join(process.cwd(), 'src');
const watchPaths = basePath === 'src' ? [`${basePath}/**/*.{js,ts,json}`] : [`${basePath}/**/*.{js,ts,json}`, `${process.cwd()}/**/*.{js,ts,json}`];
const ignoredPaths = ['node_modules'];

chokidar.watch(watchPaths, { ignored: ignoredPaths.map(path => `**/${path}/**`) })
  .on('change', (filePath) => {
    console.log(`\x1b[32m[dev-monitor] Watching for changes...🔎....\x1b[0m`);
    console.log(`\x1b[33m[dev-monitor] File [${filePath}] changed, restarting process...🚀\x1b[0m`);
    console.log(`\x1b[38;5;208m[dev-monitor] App started!\x1b[0m`);

    appProcess.kill();
    startApp();
  });

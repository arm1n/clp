#!/usr/bin/env node

/*
 * BUNDLE
 *
 * Creates transpiled library output in `./lib` folder with babel.
 */

const fs = require("fs");
const rimraf = require("rimraf");
const util = require("@clp/util");
const { execSync } = require("child_process");

const [, , /* node */ /* script */ ...args] = process.argv;

const SRC_PATH = "src";
const OUT_PATH = "lib";
const FLAGS = [...["--copy-files", "--verbose"], ...args].join(" ");

rimraf.sync(OUT_PATH);
fs.mkdirSync(OUT_PATH);
util.setIgnored(OUT_PATH);

execSync(`NODE_ENV=production babel ${SRC_PATH} ${FLAGS} --out-dir ${OUT_PATH}`, { stdio: "inherit" });

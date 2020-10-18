#!/usr/bin/env node

/*
 * BUILD
 *
 * Make a production build of all apps in `./build`.
 */
const fs = require("fs");
const path = require("path");
const util = require("@clp/util");
const { execSync } = require("child_process");

const PATH_BUILD_SOURCE = path.join("apps", "main", "build");
const PATH_BUILD_TARGET = "build";
const PATH_CONFIG = path.join(PATH_BUILD_TARGET, "apps");
const PATH_UNITS = path.join(PATH_BUILD_TARGET, "units");
const PATH_APPS = "apps";
const VALID_ASSETS = [".svg", ".html"];

// transpile all apps and shared library before build
fs.readdirSync(PATH_APPS).forEach(function(app) {
	if (!util.isDirectory(path.join(PATH_APPS, app))) {
		return;
	}

	execSync(`yarn workspace @clp/${app} transpile`, { stdio: "inherit" });
});

execSync(`yarn workspace @clp/shared transpile`, { stdio: "inherit" })

// cleanup potential build output directory
util.removeFile(PATH_BUILD_TARGET);

// create the build of the main application
execSync(`yarn workspace @clp/main build`, {
	stdio: "inherit",
});

// move build folder to root directory and cleanup
fs.mkdirSync(PATH_BUILD_TARGET);
util.setIgnored(PATH_BUILD_TARGET);
util.moveFile(PATH_BUILD_SOURCE, PATH_BUILD_TARGET);

// copy all `config` folders from app workspaces to
// final build output to be available on async calls
// but exclude all invalid files (like .DS_Store etc)
fs.mkdirSync(PATH_CONFIG);
fs.readdirSync(PATH_APPS).forEach((file) => {
	const dir = path.join(PATH_APPS, file);
	if (!util.isDirectory(dir)) {
		return;
	}

	const PATH_CONFIG_TARGET_BASE = path.join(PATH_CONFIG, file);
	fs.mkdirSync(PATH_CONFIG_TARGET_BASE);

	const PATH_CONFIG_SOURCE = path.join(dir, "config");
	const PATH_CONFIG_TARGET = path.join(PATH_CONFIG_TARGET_BASE, "config");

	util.copyFile(PATH_CONFIG_SOURCE, PATH_CONFIG_TARGET);
	util.walkRecursive(
		PATH_CONFIG_TARGET,
		(file) => {
			const extension = path.extname(file);
			if (VALID_ASSETS.includes(extension)) {
				return;
			}
			
			util.removeFile(file);
		},
		util.MODE_FILE
	);
});

// copy "units" folder to the build output
util.copyFile("units", PATH_UNITS);

// finally, run svgo and html minifier for config and unit folders
// execSync(`yarn run html-minifier ${PATH_CONFIG}`, {
// 	stdio: "inherit",
// });
// execSync(`yarn run html-minifier ${PATH_UNITS}`, {
// 	stdio: "inherit",
// });
// execSync(`yarn run svgo ${PATH_UNITS}`, {
// 	stdio: "inherit",
// });
// execSync(`yarn run svgo ${PATH_CONFIG}`, {
// 	stdio: "inherit",
// });

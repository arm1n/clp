#!/usr/bin/env node

/*
 * START
 *
 * 1) Runs root webserver on http://localhost:3500.
 * 2) Runs app's webserver on http://localhost:3501.
 * 3) Starts transpilation process for shared library.
 */
const fs = require("fs");
const path = require("path");
const util = require("@clp/util");
const concurrently = require("concurrently");
const { execSync } = require("child_process");
const [, , /* node */ /* script */ app, port = 3501] = process.argv;

const PORT_SRV = 3500;
const PORT_APP = port;
const PATH_APPS = "apps";

try {
	if (typeof app === "undefined") {
		throw new Error(
			"ERROR: You must pass an app name as first argument like: yarn run create-app <app_name>"
		);
	}

	// transpile all apps and shared library before running servers
	if (app === "@clp/main") {
		fs.readdirSync(PATH_APPS).forEach(function(app) {
			if (!util.isDirectory(path.join(PATH_APPS, app))) {
				return;
			}

			execSync(`yarn workspace @clp/${app} transpile`, {
				stdio: "inherit",
			});
		});
	}

	// transpile shared library at least once
	execSync(`yarn workspace @clp/shared transpile`, {
		stdio: "inherit",
	});

	// then start root and app servers
	concurrently([
		`serve -l ${PORT_SRV} .`,
		`PORT=${PORT_APP} yarn workspace ${app} start`,
		`yarn workspace @clp/shared transpile --watch`,
	]);
} catch (error) {
	console.log(error.message);
}

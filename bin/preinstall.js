#!/usr/bin/env node

/*
 * PRE INSTALLATION
 *
 * Ignores node_modules for Dropbox synchronization process.
 *
 * @see https://help.dropbox.com/en-en/files-folders/restore-delete/ignored-files
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const util = require("../libs/util");
const { execSync } = require("child_process");

const PATH_NODE_MODULES = "node_modules";

try {
	util.walkRecursive(
		"apps",
		(directory, baseDirectory) => {
			switch (path.basename(directory)) {
				case PATH_NODE_MODULES:
					util.setIgnored(directory);
				default:
			}
		},
		util.MODE_FOLDER
	);
} catch (error) {
	console.log(error.message);
}

if (!fs.existsSync(PATH_NODE_MODULES)) {
	fs.mkdirSync(PATH_NODE_MODULES);
}

util.setIgnored(PATH_NODE_MODULES);

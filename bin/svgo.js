#!/usr/bin/env node

/*
 * SVGO
 *
 * Optimizes svg images in given workspace.
 */
const fs = require("fs");
const path = require("path");
const util = require("@clp/util");
const { execSync } = require("child_process");
const [, , /* node */ /* script */ directory = ""] = process.argv;

const CONFIG_SVGO = path.join(__dirname, ".svgo.yml");
const BINARY_SVGO = path.join("node_modules", "svgo", "bin", "svgo");

try {
	execSync(
		`${BINARY_SVGO} --folder ${directory} --config=${CONFIG_SVGO} --multipass --recursive`,
		{
			stdio: "inherit",
		}
	);
	// util.walkRecursive(directory, (file) => {
	// 	switch (path.extname(file)) {
	// 		case ".svg":
	// 			console.log(`Optimizing ${file}...`);
	// 			execSync(`${BINARY_SVGO} ${file} --config=${CONFIG_SVGO} --multipass`, {
	// 				stdio: "inherit",
	// 			});
	// 			break;

	// 		default:
	// 	}
	// }, util.MODE_FILE);
} catch(e) {
	console.log(e.message);
}

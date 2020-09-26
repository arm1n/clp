#!/usr/bin/env node

/*
 * SVG 2 CONFIG
 *
 * Extracts DOM ids from SVG and creates config.js.
 */
const fs = require("fs");
const path = require("path");
const util = require("@clp/util");
const { execSync } = require("child_process");
const [, , /* node */ /* script */ svg] = process.argv;

if (!fs.existsSync(svg)) {
	throw new Error(`"svg" does not exist: ${svg}!`);
}

const PATTERN = /id="(?=clp-)([^"]+)(?<!-hl)"/g;

const content = fs.readFileSync(svg, "utf8");
const results = content.match(PATTERN) || [];
const ignores = {
	"clp-system": true,
	"clp-hintergrund": true,
};
const config = [];

let match;
while ((match = PATTERN.exec(content))) {
	const [, id] = match;
	if (ignores[id]) {
		continue;
	}

	config.push({
		id,
		text: id,
		unit: "./path/to/html/file.html",
		desc: "./path/to/html/file.html",
		info: {},
		access: {},
	});
}

console.log(config);

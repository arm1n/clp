#!/usr/bin/env node

/*
 * HTML MINIFY
 *
 * Minifies HTML files for given path recurively.
 */
const fs = require("fs");
const path = require("path");
const util = require("@clp/util");
const { execSync } = require("child_process");
const [, , /* node */ /* script */ directory = ""] = process.argv;

const CONFIG_HTML_MINIFIER = path.join(__dirname, ".html-minifier.conf");
const BINARY_HTML_MINIFIER = path.join("node_modules", ".bin", "html-minifier");

execSync(
	`${BINARY_HTML_MINIFIER} --config-file ${CONFIG_HTML_MINIFIER} --input-dir ${directory} --output-dir ${directory} --file-ext html`,
	{
		stdio: "inherit",
	}
);

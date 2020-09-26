#!/usr/bin/env node

/*
 * POST INSTALLATION
 *
 * Copies web component polyfills to `static/vendor` folder.
 */
const path = require("path");
const util = require("@clp/util");

const PATH_WC_SOURCE = path.join(
	"node_modules",
	"@webcomponents",
	"webcomponentsjs"
);
const PATH_WC_TARGET = path.join(".", "assets", "vendor", "webcomponents");
const PATH_WC_BUNDLE = path.join(PATH_WC_SOURCE, "bundles");

try {
	util.walkRecursive(PATH_WC_BUNDLE, (file, baseDirectory) => {
		switch (path.extname(file)) {
			case ".js":
				const target = path.join(
					PATH_WC_TARGET,
					baseDirectory,
					path.basename(file)
				);
				util.copyFile(file, target);
				break;
			default:
		}
	}, util.MODE_FILE);
} catch (error) {
	console.log(error.message);
}
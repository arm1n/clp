#!/usr/bin/env node

/*
 * CREATE APP
 *
 * 1) Creates a new CRA app in `./apps` with custom template.
 * 2) Adds `@clp/prettier-config` as a dev dependency.
 * 3) Adds `@clp/shared` as a dependency.
 */
const fs = require("fs");
const path = require("path");
const util = require("@clp/util");
const { execSync } = require("child_process");
const [, , /* node */ /* script */ app] = process.argv;

const PKG_DEPS = ["@clp/shared@^1.0.0"];
const PKG_DEVS = ["@clp/prettier-config@^1.0.0", "@clp/util@^1.0.0"];
const PKG_NAME = `@clp/${app}`;
const PKG_VERSION = '1.0.0';

const ROOT_APP = `@clp/main`;
const ROOT_DEP = `${PKG_NAME}@^${PKG_VERSION}`;

const PATH_APP = path.join("apps", app);
const TEMPLATE = path.join("libs", "cra-template-clp");

try {
	if (typeof app === "undefined") {
		throw new Error(
			"ERROR: You must pass an app name as first argument like: yarn run create-app <app_name>"
		);
	}

	if (fs.existsSync(PATH_APP)) {
		throw new Error(
			`ERROR: An app already exists in ${PATH_APP} - aborting!`
		);
	}

	// note: install at root, otherwise it would not use `yarn` as package manager
	// because it tries to detect `yarn.lock` file from the project's root directory
	execSync(`create-react-app ${app} --template file:${TEMPLATE}`, {
		stdio: "inherit",
	});

	// now move the app to final destination before applying workspace commands
	util.moveFile(app, PATH_APP);

	// update `package.json` and rename `name` to be scoped as `@clp/<app>`
	util.writeContent(path.join(PATH_APP, "package.json"), (content) => {
		const json = JSON.parse(content);
		json.version = PKG_VERSION;
		json.name = PKG_NAME;

		return JSON.stringify(json, null, 2);
	});

	// remove `yarn.lock` file as it's not needed for a workspace application
	util.removeFile(path.join(PATH_APP, "yarn.lock"))

	// install both dependencies and devDependencies in the newly created app
	execSync(`yarn workspace ${PKG_NAME} add ${PKG_DEPS.join(" ")}`, {
		stdio: "inherit",
	});

	// there's a bug with `--dev`: https://github.com/yarnpkg/yarn/issues/6837
	execSync(`yarn workspace ${PKG_NAME} add ${PKG_DEVS.join(" ")} --dev`, {
		stdio: "inherit",
	});

	// finally add it as a dependency to `@clp/main` - the root app
	execSync(`yarn workspace ${ROOT_APP} add ${ROOT_DEP}`, {
		stdio: "inherit",
	});
} catch (error) {
	console.log(error.message);
}

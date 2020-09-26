/*
 * UTIL
 *
 * Various utility methods for node tasks.
 */
const os = require("os");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const MODE_ALL = 1;
const MODE_FILE = 2;
const MODE_FOLDER = 3;

exports.MODE_ALL = MODE_ALL;
exports.MODE_FILE = MODE_FILE;
exports.MODE_FOLDER = MODE_FOLDER;

const walkRecursive = (directory, callback, mode = MODE_ALL) => {
	if (!fs.existsSync(directory)) {
		throw new Error(`"directory" is no directory: ${directory}!`);
	}

	if (typeof callback !== "function") {
		throw new Error(`"callback" must be a function!`);
	}

	const stack = [[directory, ""]];

	while (stack.length !== 0) {
		let [directory, baseDirectory] = stack.pop();

		baseDirectory = path.join(baseDirectory, path.basename(directory));

		fs.readdirSync(directory, { withFileTypes: true }).forEach(
			(fileEnt) => {
				const file = path.join(directory, fileEnt.name);

				let invokeCallback = true;
				switch (mode) {
					case MODE_FILE:
						invokeCallback = fileEnt.isFile();
						break;
					case MODE_FOLDER:
						invokeCallback = fileEnt.isDirectory();
					default:
				}

				if (invokeCallback) {
					callback(file, baseDirectory);
				}

				if (fileEnt.isDirectory()) {
					stack.push([file, baseDirectory]);
				}
			}
		);
	}
};

const writeContent = (file, callback, encoding = "utf8") => {
	if (!fs.existsSync(file)) {
		throw new Error(`"file" does not exist: ${file}!`);
	}

	let content = fs.readFileSync(file, encoding);
	content = typeof callback === "function" ? callback(content) : content;

	fs.writeFileSync(file, content, encoding);
};

const isDirectory = (file) => {
	try {
		const stats = fs.lstatSync(file);
		return stats.isDirectory();
	} catch(e) {
		return false;
	}
};

const isSymlink = (file) => {
	try {
		const stats = fs.lstatSync(file);
		return stats.isSymbolicLink();
	} catch(e) {
		return false;
	}
};

const copyFile = (source, target) => {
	if (isSymlink(source)) {
		createSymlink(source, target);
		return;
	}

	if (isDirectory(source)) {
		copyDirectory(source, target);
		return;
	}

	var dir = path.dirname(target);
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}

	fs.copyFileSync(source, target);
};

const createSymlink = (source, target) => {
	if (isSymlink(target)) {
		return;
	}

	source = fs.readlinkSync(source);
	fs.symlinkSync(source, target);
};

const copyDirectory = (source, target) => {
	if (!fs.existsSync(source)) {
		return;
	}

	if (!isDirectory(source)) {
		copyFile(source, target);
		return;
	}

	if (!fs.existsSync(target)) {
		fs.mkdirSync(target, { recursive: true });
	}

	fs.readdirSync(source).forEach(function(file) {
		copyFile(path.join(source, file), path.join(target, file));
	});
};

const removeFile = (file) => {
	if (isDirectory(file)) {
		removeDirectory(file);
		return;
	}

	try {
		fs.unlinkSync(file);
	} catch(e) {
		console.log(`Could not delete file: ${file} - ${e.message}`);
	}
};

const removeDirectory = (dir) => {
	if (!fs.existsSync(dir)) {
		return;
	}

	if (!isDirectory(dir)) {
		return;
	}

	fs.readdirSync(dir).forEach((file) => {
		removeFile(path.join(dir, file));
	});

	fs.rmdirSync(dir);
};

const moveFile = (source, target) => {
	copyFile(source, target);
	removeFile(source);
};

const setIgnored = (file) => {
	switch (os.platform()) {
		case "win32":
		case "win64":
			execSync(
				`Set-Content -Path ${file} -Stream com.dropbox.ignored -Value 1`
			);
			break;
		default:
			execSync(`xattr -w com.dropbox.ignored 1 ${file}`);
	}
};

exports.walkRecursive = walkRecursive;
exports.writeContent = writeContent;
exports.isDirectory = isDirectory;
exports.copyFile = copyFile;
exports.copyDirectory = copyDirectory;
exports.removeFile = removeFile;
exports.removeDirectory = removeDirectory;
exports.moveFile = moveFile;
exports.setIgnored = setIgnored;

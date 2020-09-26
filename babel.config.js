/**
 * Top-level babel configuration for `transpile` from @clp/utils:
 * Submodules can consume it by adding ´--root-mode updward` flag.
 *
 * @see: https://babeljs.io/docs/en/7.5.0/config-files#monorepos 
 */
module.exports = {
	presets: ["react-app"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
			},
		],
		["inline-react-svg"],
		["syntax-dynamic-import"],
	],
};

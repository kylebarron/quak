import * as esbuild from "npm:esbuild@0.20.2";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.10.3";

let options = {
	plugins: [...denoPlugins()],
	entryPoints: ["./src/quak/widget.js"],
	outfile: "./bundle.js",
	bundle: true,
	format: "esm",
	logLevel: "info",
} satisfies esbuild.BuildOptions;

if (Deno.args.includes("--watch")) {
	let ctx = await esbuild.context(options);
	await ctx.watch();
} else {
	esbuild.build(options);
}

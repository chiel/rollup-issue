import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
	entry: 'src/client/index.jsx',
	dest: 'dist/public/js/app.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		nodeResolve(),
		commonjs(),
		replace({
			values: {
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			},
		}),
		babel(),
	],
};

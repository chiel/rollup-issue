import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import includePaths from 'rollup-plugin-includepaths';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
	entry: 'src/client/index.jsx',
	format: 'iife',
	dest: 'dist/public/js/app.js',
	sourceMap: true,
	globals: {
		react: 'React',
	},
	plugins: [
		includePaths({
			extensions: ['.js', '.jsx'],
			paths: ['src'],
		}),
		nodeResolve({
			browser: true,
			jsnext: true,
		}),
		commonjs(),
		babel(),
		json(),
		replace({
			values: {
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			},
		}),
	],
};

import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import includePaths from 'rollup-plugin-includepaths';

export default {
	entry: 'src/server/index.js',
	format: 'cjs',
	dest: 'dist/server/index.js',
	plugins: [
		includePaths({
			extensions: ['.js', '.jsx'],
			paths: ['src'],
		}),
		json(),
		babel(),
	],
};

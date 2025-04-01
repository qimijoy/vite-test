import path from 'path';

import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';
import vue from '@vitejs/plugin-vue';

export default {
	plugins: [
		Inspect(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint .',
				useFlatConfig: true,
			},
		}),
		vue(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
};

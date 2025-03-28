import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';

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
	],
};

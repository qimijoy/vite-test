// Import npm-library
import './scripts/import-library';

// Import static CSS
import './styles/style.css';

// Import static CSS as ES-module
import styles from './styles/style.css?inline';
console.log(styles);

// Import CSS-modules as ES-modules
import moduleA from './styles/style-module-1.module.css';
import moduleB from './styles/style-module-2.module.css';
console.log(moduleA);
console.log(moduleB);

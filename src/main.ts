// Import npm-library
import '@/scripts/import-library';

// Import static CSS
import '@/styles/style.css';

// Import static Less
import '@/styles/test-less.less';

// Import static CSS as ES-module
//import styles from '@/styles/style.css?inline';
//console.log(styles);

// Import CSS-modules as ES-modules
//import moduleA from '@/styles/style-module-1.module.css';
//import moduleB from '@/styles/style-module-2.module.css';
//console.log(moduleA);
//console.log(moduleB);

// Import JSON
//import person from '@/data/person.json';
//console.log(person);

// Import image
//import image from '@/images/javascript.svg';
//import imageRaw from '@/images/javascript.svg?raw';
//console.log(image);
//console.log(imageRaw);

// Import TS file
import { sum } from '@/scripts/function';

console.log(sum(5, 3));

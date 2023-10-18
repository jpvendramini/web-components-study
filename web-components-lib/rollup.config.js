import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs',
    globals: {
      './atoms/label.js': 'LabelComponent',
      './atoms/logo.js': 'Logo',
      './atoms/title.js': 'TitleComponent',
      './molecules/bookItem.js': 'BookItem',
      './molecules/searchInput.js': 'SearchInput',
      './molecules/sidebar.js': 'Sidebar',
    },
  },
  plugins: [
    terser(),
    copy({
        targets: [
            // Copy your image files here
            { src: './assets/icons/*.svg', dest: 'build/icons' },
        ],
    }),
  ],
};
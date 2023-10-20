import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: "src/main.js",
  output: [
    {
      file: "build/bundle.js",
      format: "cjs",
      globals: {
        "./atoms/label.js": "LabelComponent",
        "./atoms/logo.js": "Logo",
        "./atoms/title.js": "TitleComponent",
        "./molecules/bookItem.js": "BookItem",
        "./molecules/searchInput.js": "SearchInput",
        "./molecules/sidebar.js": "Sidebar",
      },
    },
    {
      file: "../vue/vue-web-components-lib/public/build/bundle.js",
      format: "cjs",
      globals: {
        "./atoms/label.js": "LabelComponent",
        "./atoms/logo.js": "Logo",
        "./atoms/title.js": "TitleComponent",
        "./molecules/bookItem.js": "BookItem",
        "./molecules/searchInput.js": "SearchInput",
        "./molecules/sidebar.js": "Sidebar",
      },
    },
    {
      file: "../angular/angular-web-components-lib/src/build/bundle.js",
      format: "cjs",
      globals: {
        "./atoms/label.js": "LabelComponent",
        "./atoms/logo.js": "Logo",
        "./atoms/title.js": "TitleComponent",
        "./molecules/bookItem.js": "BookItem",
        "./molecules/searchInput.js": "SearchInput",
        "./molecules/sidebar.js": "Sidebar",
      },
    },
    {
      file: "../next/next-web-components-lib/public/build/bundle.js",
      format: "cjs",
      globals: {
        "./atoms/label.js": "LabelComponent",
        "./atoms/logo.js": "Logo",
        "./atoms/title.js": "TitleComponent",
        "./molecules/bookItem.js": "BookItem",
        "./molecules/searchInput.js": "SearchInput",
        "./molecules/sidebar.js": "Sidebar",
      },
    },
    {
      file: "../svelte/svelte-web-components-lib/static/build/bundle.js",
      format: "cjs",
      globals: {
        "./atoms/label.js": "LabelComponent",
        "./atoms/logo.js": "Logo",
        "./atoms/title.js": "TitleComponent",
        "./molecules/bookItem.js": "BookItem",
        "./molecules/searchInput.js": "SearchInput",
        "./molecules/sidebar.js": "Sidebar",
      },
    },
  ],
  plugins: [
    terser(),
    copy({
      targets: [
        // Copy your image files here
        { src: "./assets/icons/*.svg", dest: "build/icons" },
        { src: "./assets/icons/*.svg", dest: "../vue/vue-web-components-lib/public/build/icons" },
        { src: "./assets/icons/*.svg", dest: "../angular/angular-web-components-lib/src/build/icons" },
        { src: "./assets/icons/*.svg", dest: "../next/next-web-components-lib/public/build/icons" },
        { src: "./assets/icons/*.svg", dest: "../svelte/svelte-web-components-lib/static/build/icons" },
      ],
    }),
  ],
};

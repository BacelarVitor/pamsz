export const images = import.meta.glob('./*.{jpg,jpeg,png,gif,svg}', {
  eager: true,      // load them immediately at build
  import: 'default' // get the resolved URL, not a module
}); 
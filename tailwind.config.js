//--------------------------------------------------------------------------
// Tailwind configuration
//--------------------------------------------------------------------------
//
// Use the Tailwind configuration to completely define the current sites
// design system by adding and extending to Tailwinds default utility
// classes. Various aspects of the config are split inmultiple files.
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    extend: {
      screens: {
        '3xl': '2000px',
        '4xl': '2400px'
      },
      colors: {
        black: "#000000",
        green: "#03FF82",
      },
    },
    fontFamily: {
      sans: [["Europa Grotesk", "sans-serif"]],
      mono: [["Monument Grotesk", "sans-serif"]],
    },
  },
  content: [
    './resources/views/**/*.blade.php',
    './resources/views/**/*.html',
    './resources/js/**/*.js',
    './content/**/*.md',
    './vendor/studio1902/**/*.blade.php',
    './vendor/studio1902/**/*.html',
    './vendor/studio1902/**/*.js',
  ],
}

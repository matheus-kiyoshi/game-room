/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        v2: '0 0px 15px rgba(214, 28, 133, 1)',
        v3: '0 0px 15px rgba(28, 214, 99, 1)',
      },
    },
  },
  plugins: [],
}

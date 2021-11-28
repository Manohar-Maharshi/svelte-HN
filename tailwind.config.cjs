const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
	fontFamily:{
		'sans': ['Signika', 'Arial', 'sans-serif'],
	},
  },

  plugins: [
  	require('@tailwindcss/line-clamp'),
  	require('@tailwindcss/typography'),
  	require('tailwind-scrollbar'),
  ],
};

module.exports = config;

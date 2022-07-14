let sizes = {};
for (let index = 1; index <= 100; index++) {
	sizes[index * 4 + 'px'] = index * 4 + 'px';
}
let minSize = {
	'0': '0',
	'1/4': '25%',
	'1/2': '50%',
	'3/4': '75%',
	full: '100%',
};

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx', './src/**/*.css'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'body-color': '#525B73',
				'navy-blue': {
					'50': '#f2f3f9',
					'100': '#e6e6f3',
					'200': '#c0c1e1',
					'300': '#9a9ccf',
					'400': '#4e52ab',
					'500': '#020887',
					'600': '#02077a',
					'700': '#020665',
					'800': '#010551',
					'900': '#010442',
				},
				black: {
					100: '#cdd0d6',
					200: '#9ba2ae',
					300: '#687385',
					400: '#36455d',
					500: '#041634',
					600: '#03122a',
					700: '#020d1f',
					800: '#020915',
					900: '#01040a',
				},
			},
			height: sizes,
			width: sizes,
			minWidth: minSize,
			minHeight: minSize,
			screens: { xs: '320px' },
			transitionProperty: {
				width: 'width',
			},
			fontFamily: {
				'poppins': ["'Poppins", 'sans-serif']
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),],
};
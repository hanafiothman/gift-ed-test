const regular = 400;
const medium = 500;
const semiBold = 600;

const variants = {
	h3: {
		fontSize: 34,
		fontWeight: semiBold
	},
	h4: {
		fontSize: 24,
		fontWeight: semiBold
	},
	h5: {
		fontSize: 20,
		fontWeight: semiBold
	},
	h6: {
		fontSize: 16,
		fontWeight: medium
	},
	subtitle1: {
		fontSize: 14,
		fontWeight: medium
	},
	subtitle2: {
		fontSize: 12,
		fontWeight: medium
	},
	body1: {
		fontSize: 14,
		fontWeight: regular
	},
	body2: {
		fontSize: 12,
		fontWeight: regular
	},
	caption: {
		fontSize: 12,
		fontWeight: regular
	}
};

const fontSizes = {
	...Object.entries(variants).reduce((acc, [key, value]) => {
		return {
			...acc, 
			[key]: {
				...value,
				lineHeight: 1.5
			}
		}
	}, {})
};

const typography = {
	fontFamily: ['"Montserrat"', '"Roboto"', '"Arial"', 'sans-serif'].join(', '),
	...fontSizes
};

export default typography;
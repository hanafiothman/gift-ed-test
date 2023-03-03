import { Button, CircularProgress } from '@mui/material';

const SIZES = {
  large: {
    height: 65,
    fontSize: '16px',
    borderRadius: '26px'
  },
  standard: {
    height: 45,
    fontSize: '14px',
    borderRadius: '18px'
  },
  small: {
    height: 35,
    fontSize: '14px',
    borderRadius: '14px'
  },
};

const getButtonStyles = (variant='contained', color='primary', loading=false) => {
	switch(variant) {
		case 'outlined':
			return {
				backgroundColor: 'transparent',
				border: 1,
				borderColor: (theme) => theme.palette[color]?.main || theme.palette.color || color,
				color: (theme) => theme.palette[color]?.main || theme.palette.color || color,
				'&:hover': {
					backgroundColor: color === 'primary' ? 'primary.light' : color === 'secondary' ? 'secondary.light' : 'lightGrayText'
				},
				'&.Mui-disabled': {
					backgroundColor: 'transparent',
					borderColor: 'grayLine',
					color: 'grayInactive'
				}
			};
		case 'ghost':
			return {
				backgroundColor: loading ? 'grayDefaultBackground' : 'transparent',
				color: (theme) => theme.palette[color]?.main || theme.palette.color || color,
				'&:hover': {
					backgroundColor: 'grayDefaultBackground'
				},
				'&.Mui-disabled': {
					backgroundColor: 'transparent',
					color: 'grayInactive'
				}
			};
		case 'underline':
			return {
				height: 'auto',
				py: 0,
				backgroundColor: 'transparent',
				textDecoration: 'underline',
				color: (theme) => theme.palette[color]?.main || theme.palette.color || color,
				'&:hover': {
					backgroundColor: 'transparent',
					textDecoration: 'underline'
				},
				'&.Mui-disabled': {
					backgroundColor: 'transparent',
					color: 'grayInactive'
				}
			};
		default:
			return {
				backgroundColor: (theme) => theme.palette[color]?.main || theme.palette.color || color,
				color: 'white',
				'&:hover': {
					backgroundColor: color === 'primary' ? 'primary.hover' : color === 'secondary' ? 'secondary.main' : 'lightGrayText'
				},
				'&.Mui-disabled': {
					backgroundColor: 'grayInactive',
					color: 'white'
				}
			}
	}
};

const GftButton = ({
  children,
  variant='contained',
  color='primary',
  size='standard',
  loading=false,
	sx,
	disableHoverEffect=false,
  ...rest
}) => {
  return (
		<Button
			sx={(theme) => ({
				...SIZES[size],
				...getButtonStyles(variant, color, loading),
				...loading && { pointerEvents: 'none' },
				...disableHoverEffect && {
					'&:hover': {
						backgroundColor: 'transparent'
					},
				},
        ...typeof sx === 'function' ? sx(theme) : sx
			})}
			{...rest}
		>
			{loading ? 
			<CircularProgress
				sx={{
					color: variant === 'contained' ? 'white' : color,
					width: `${SIZES[size].fontSize} !important`,
					height: `${SIZES[size].fontSize} !important`,
				}}
			/>
			:
			children
			}
		</Button>
	);
}

export default GftButton;

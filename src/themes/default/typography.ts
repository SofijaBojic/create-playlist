import Colors from '../../styles/colors';

const typography: ITypography = {
  fontFamily: "'Cera', sans-serif",
  color: {
    primary: Colors.white,
    secondary: Colors.brownGrey,
    hover: Colors.white,
    active: Colors.greenishTeal
  },
  size: {
    heading: {
      small: {
        sm: '16px',
        md: '16px',
        lg: '16px'
      },
      medium: {
        sm: '18px',
        md: '18px',
        lg: '24px'
      },
      large: {
        sm: '24px',
        md: '32px',
        lg: '32px'
      }
    },
    body: {
      sm: '16px',
      md: '18px',
      lg: '18px'
    },
    subtext: {
      sm: '15px',
      md: '16px',
      lg: '16px'
    }
  },
  components: {}
};

export default typography;

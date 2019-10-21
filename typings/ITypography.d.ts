interface ITypography {
  fontFamily: string;
  color: {
    primary: string;
    secondary: string;
    hover: string;
    active: string;
  };
  size: {
    heading: {
      small: ISize;
      medium: ISize;
      large: ISize;
    };
    body: ISize;
    subtext: ISize;
  };
  components: {};
}

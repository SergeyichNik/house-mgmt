export enum FontSize {
  SMALL = "14px",
  MEDIUM = "18px",
  LARGE = "22px",
}

export interface FontSizeProp {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

export const getFontSize = ({ md, lg }: FontSizeProp) => {
  switch (true) {
    case md:
      return FontSize.MEDIUM;
    case lg:
      return FontSize.LARGE;
    default:
      return FontSize.SMALL;
  }
};

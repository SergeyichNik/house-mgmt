import { Colors, FontSizeProp, getFontSize } from "shared/theme";
import styled from "styled-components/native";

interface TextFontWeight {
  bold?: boolean;
  semi?: boolean;
  regular?: boolean;
}

interface TextFontColor {
  light?: boolean;
  dark?: boolean;
  gray?: boolean;
  blue?: boolean;
}

interface TextStyledProps extends TextFontWeight, FontSizeProp, TextFontColor {
  lh?: number;
  ta?: "center" | "right";
}

const Styled = styled.Text`
  ${({ ta }) => (ta ? `text-align: ${ta};` : "")};
  line-height: ${({ lh }) => (lh ? `${lh}px;` : "18px;")};
  font-size: ${getFontSize};
  font-weight: ${({ bold, semi, regular }: TextFontWeight) => {
    switch (true) {
      case bold:
        return `700`;
      case semi:
        return `600`;
      case regular:
        return `400`;
      default:
        return `500`;
    }
  }};

  color: ${({ dark, gray, blue }: TextFontColor) => {
    switch (true) {
      case blue:
        return Colors.BLUE;
      case dark:
        return `#2b2b2b`;
      case gray:
        return `#8F8B8B`;
      default:
        return `#ffffff`;
    }
  }};
`;

export const Text = ({ children, ...rest }: TextStyledProps) => {
  return <Styled {...rest}>{children}</Styled>;
};

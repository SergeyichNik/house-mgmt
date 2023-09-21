import { useRouter } from "expo-router";
import { ReactElement } from "react";
import { getBoxShadow } from "shared/lib/getBoxShadow";
import { ServicePaths } from "shared/router";
import { Borders, Colors } from "shared/theme";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

interface LabelButtonMargin {
  margin?: [number, number, number, number];
}

interface LabelButtonColors {
  color: Colors;
}

export interface LabelButtonProps extends LabelButtonColors, LabelButtonMargin {
  iconImage: ReactElement;
  href: ServicePaths;
  name: string;
  count: number;
}

export const LabelButton = ({
  iconImage,
  name,
  href,
  color,
  count,
}: LabelButtonProps) => {
  const router = useRouter();
  const onNavigate = () => {
    router.push(href);
  };

  return (
    <Styled
      style={getBoxShadow()}
      onPress={onNavigate}
      underlayColor={Colors.SECONDARY}
      activeOpacity={0.9}
    >
      <Container>
        <Header color={color}>
          <IconContainer>{iconImage}</IconContainer>
        </Header>
        <Footer>
          <Text dark regular md>
            {name}
          </Text>
          {count && (
            <Text gray regular>
              {count} услуг
            </Text>
          )}
        </Footer>
      </Container>
    </Styled>
  );
};

const Styled = styled.TouchableHighlight`
  margin: 5px;
  flex-grow: 1;
  height: 150px;
  aspect-ratio: 1;
  border-radius: ${Borders.FIRST_LEVEL};
`;

const Container = styled.View`
  flex-grow: 1;
  height: 150px;
  aspect-ratio: 1;
  border-radius: ${Borders.FIRST_LEVEL};
  background-color: #fff;
`;

const Header = styled.View`
  justify-content: center;
  padding: 0 15px;
  border-radius: ${Borders.FIRST_LEVEL} ${Borders.FIRST_LEVEL} 0 0;
  background-color: ${({ color }) => color};
  height: 90px;
`;

const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(249, 249, 252, 0.45);
  border-radius: 30px;

  width: 60px;
  height: 60px;
`;

const Footer = styled.View`
  flex-grow: 1;
  justify-content: center;
  padding: 10px;
  border-radius: 0 0 ${Borders.FIRST_LEVEL} ${Borders.FIRST_LEVEL};
`;

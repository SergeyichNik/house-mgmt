import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export interface LoaderContainerProps {
  isFetching: boolean;
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const LoaderContainer = ({
  children,
  isFetching,
}: LoaderContainerProps) => {
  if (isFetching) {
    return (
      <Container>
        <ActivityIndicator size={50} />
      </Container>
    );
  } else {
    return <>{children}</>;
  }
};

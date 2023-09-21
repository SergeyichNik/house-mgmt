import { Colors } from "shared/theme";
import { Paper } from "shared/ui/Paper";
import styled from "styled-components/native";

import { filterButtons } from "../../../config/constants";
import { useRequests } from "../../../model/store";

export interface FilterButtonsProps {}

export const FilterButtons = ({}: FilterButtonsProps) => {
  const filter = useRequests((state) => state.filter);
  const setFilter = useRequests((state) => state.setFilter);

  return (
    <Container row mt={10}>
      {filterButtons.map(({ label, type }) => {
        const active = type === filter;
        return (
          <FilterButton
            key={type}
            onPress={() => setFilter(type)}
            active={active}
          >
            <ButtonLabel active={active}>{label}</ButtonLabel>
          </FilterButton>
        );
      })}
    </Container>
  );
};

const FilterButton = styled.TouchableOpacity`
  padding: 5px 6px;
  border-radius: 10px;
  width: fit-content;
  background-color: ${({ active }) => (active ? Colors.PRIMARY : Colors.WHITE)};
  border: 1px solid ${Colors.PRIMARY};
`;

const Container = styled(Paper)`
  justify-content: space-between;
`;

const ButtonLabel = styled.Text`
  font-size: 12px;
  color: ${({ active }) => (active ? Colors.WHITE : Colors.PRIMARY)};
`;

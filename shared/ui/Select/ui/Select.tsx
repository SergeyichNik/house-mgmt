import { useDisclose } from "shared/hooks/useDisclose";
import { DropdownContainer } from "shared/ui/Select/ui/DropdownContainer";
import { Option } from "shared/ui/Select/ui/Option";
import { SelectField } from "shared/ui/Select/ui/SelectField";
import styled from "styled-components/native";

interface DefaultOption {
  name: string;
  isSelected: boolean;
  id: number;
}

interface Options extends DefaultOption {}

export interface SelectProps {
  options: Options[];
  keyExtractor: (option: Options) => string;
  onDropdownOpen?: () => void;
  onSelect: (id: number) => void;
  onCancel: () => void;
  placeholder?: string;
  dropDownTitle?: string;
}

export const Select = ({
  options = [],
  onDropdownOpen,
  keyExtractor,
  onCancel,
  onSelect,
  placeholder,
  dropDownTitle,
  ...rest
}: SelectProps) => {
  const { isOpen, onOpen, onClose } = useDisclose(onDropdownOpen);

  const onSelectHandle = (option: Options) => {
    onSelect(option.id);
  };

  return (
    <Container {...rest}>
      <SelectField onOpen={onOpen} placeholder={placeholder} />
      <DropdownContainer
        onCancel={onCancel}
        isOpen={isOpen}
        onClose={onClose}
        dropDownTitle={dropDownTitle}
      >
        {options.map((option) => {
          return (
            <Option
              onSelect={onSelectHandle}
              option={option}
              isChecked={option.isSelected}
              key={keyExtractor(option)}
            />
          );
        })}
      </DropdownContainer>
    </Container>
  );
};

const Container = styled.View``;

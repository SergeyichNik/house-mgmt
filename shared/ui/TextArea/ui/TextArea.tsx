import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { getFieldColor } from "shared/theme";

export interface TextAreaProps extends TextInputProps {}

export const TextArea = (props: TextAreaProps) => {
  return (
    <TextInput
      style={style.textarea}
      editable
      multiline
      numberOfLines={10}
      {...props}
    />
  );
};

const style = StyleSheet.create({
  textarea: {
    width: "100%",
    textAlignVertical: "top",
    borderRadius: 16,
    padding: 10,
    backgroundColor: getFieldColor(),
  },
});

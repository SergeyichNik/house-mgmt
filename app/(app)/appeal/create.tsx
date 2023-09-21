import { useRouter } from "expo-router";
import { ConfirmButton } from "shared/ui/ConfirmButton";
import { Input } from "shared/ui/Input";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";
import { TextArea } from "shared/ui/TextArea";
import styled from "styled-components/native";

import { useAppeal } from "../../../entity/appeal";

const CreateAppeal = () => {
  const router = useRouter();
  const { content, title } = useAppeal((state) => state.newAppeal);
  const changeNewAppeal = useAppeal((state) => state.changeNewAppeal);
  const createNewAppeal = useAppeal((state) => state.createNewAppeal);
  const clearStore = useAppeal((state) => state.clearStore);

  const isValidAppeal = !!content && !!title;

  const onChangeTitle = (value: string) => {
    changeNewAppeal("title", value);
  };

  const onChangeContent = (value: string) => {
    changeNewAppeal("content", value);
  };

  const onCreateNewAppeal = () => {
    createNewAppeal();
    router.push("/appeal");
    clearStore("newAppeal", { title: "", content: "" });
  };

  const onCancel = () => {
    router.push("/appeal");
    clearStore("newAppeal", { title: "", content: "" });
  };

  return (
    <Container>
      <Paper mb={10}>
        <Text dark>Тема обращения</Text>
        <InputsContainer>
          <Input
            value={title}
            onChangeText={onChangeTitle}
            placeholder="Тема здесь..."
          />
        </InputsContainer>
      </Paper>
      <Paper mb={10}>
        <Text dark>Текст обращения</Text>
        <InputsContainer>
          <TextArea
            value={content}
            onChangeText={onChangeContent}
            placeholder="Текст здесь..."
          />
        </InputsContainer>
      </Paper>
      <Paper row jc="space-between">
        <ConfirmButton onPress={onCancel} outlined warn small>
          Отмена
        </ConfirmButton>
        <ConfirmButton
          withDelay
          medium
          onPress={onCreateNewAppeal}
          disabled={!isValidAppeal}
        >
          Отправить
        </ConfirmButton>
      </Paper>
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
`;

const InputsContainer = styled.View`
  margin-top: 10px;
`;

export default CreateAppeal;

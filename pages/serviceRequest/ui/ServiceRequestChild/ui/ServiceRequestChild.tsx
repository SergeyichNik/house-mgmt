import { JSX } from "react";
import { ServiceRequest, ServiceRequestStatus } from "shared/api";
import { ConfirmButton } from "shared/ui/ConfirmButton";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";

import { useRequests } from "../../../../../entity/requests";

interface ChildProp {
  data: ServiceRequest;
}

export interface ServiceRequestChildProps extends ChildProp {}

interface ChildProp {
  data: ServiceRequest;
}
const components: Record<
  ServiceRequestStatus,
  (prop: ChildProp) => JSX.Element
> = {
  [ServiceRequestStatus.IN_PROCESS]: (prop) => <InProcess {...prop} />,
  [ServiceRequestStatus.APPROVED]: (prop) => <Approved {...prop} />,
  [ServiceRequestStatus.DONE]: (prop) => <Done {...prop} />,
  [ServiceRequestStatus.REJECTED]: (prop) => <Rejected {...prop} />,
};

export const ServiceRequestChild = ({ data }: ServiceRequestChildProps) => {
  if (!data?.status) return null;
  return components[data?.status]({ data });
};

const RejectButton = ({ id }: { id: string }) => {
  const setRequestStatus = useRequests((state) => state.setRequestStatus);

  const onReject = () => {
    setRequestStatus(id, ServiceRequestStatus.REJECTED);
  };

  return (
    <Paper mt={10} ai="center">
      <Text gray>Если заявка не актуальна, вы можете отменить её</Text>
      <ConfirmButton withDelay mt={10} onPress={onReject} warn>
        Отменить заявку
      </ConfirmButton>
    </Paper>
  );
};

const Rejected = ({}: ChildProp) => {
  return (
    <>
      <Paper row mt={10}>
        <Text gray>Причина отмены: </Text>
        <Text dark>Отмена по желанию заказчика</Text>
      </Paper>
      {/*<Paper mt={10}>*/}
      {/*  <Text gray>Причина отмены: </Text>*/}
      {/*  <Text dark>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis*/}
      {/*    dolore id laboriosam. Consequatur deleniti dolorum ducimus enim eos,*/}
      {/*    et excepturi incidunt maxime repudiandae, sapiente sint tempore.*/}
      {/*    Architecto eaque est quidem!*/}
      {/*  </Text>*/}
      {/*</Paper>*/}
    </>
  );
};

const InProcess = ({ data }: ChildProp) => {
  return (
    <>
      <Paper mt={10}>
        <Text lh={20} dark regular>
          Заявка находится в обработке, вскоре по ней будет принято решение
        </Text>
        <Text lh={20} dark regular>
          Подробности можно узнать по телефону: +79001002030
        </Text>
      </Paper>

      <RejectButton id={data.id.toString()} />
    </>
  );
};

const Done = ({}: ChildProp) => {
  const onComment = () => {};

  return (
    <>
      <Paper mt={10}>
        <Text lh={20} regular dark>
          Дата визита мастера: 2023-09-04
        </Text>
        <Text lh={20} regular dark>
          Время визита мастера: 11:00 МСК
        </Text>
      </Paper>
      {/*<Paper ai="center" mt={10}>*/}
      {/*  <Text gray>Пожалуйста оставьте отзыв об оказанной услуге</Text>*/}
      {/*  <ConfirmButton mt={10} onPress={onComment}>*/}
      {/*    Написать отзыв*/}
      {/*  </ConfirmButton>*/}
      {/*</Paper>*/}
    </>
  );
};

const Approved = ({ data }: ChildProp) => {
  return (
    <>
      <Paper mt={10}>
        <Text lh={20} dark regular>
          Дата визита мастера: 2023-09-04
        </Text>
        <Text lh={20} dark regular>
          Время визита мастера: 11:00 МСК
        </Text>
        <Text lh={20} dark regular>
          Подробности можно узнать по телефону: +79001002030
        </Text>
      </Paper>
      <RejectButton id={data.id.toString()} />
    </>
  );
};

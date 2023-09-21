import { useEffect } from "react";
import { Services } from "shared/constants";
import { Select } from "shared/ui/Select";

import { useService } from "../../../model/store";

export interface ServicesSelectProps {
  service: Services;
}

export const ServicesSelect = ({ service }: ServicesSelectProps) => {
  const fetchService = useService((state) => state.fetchService);
  const setSelected = useService((state) => state.setToggleSelected);
  const setCancelSelected = useService((state) => state.setCancelSelected);
  const data = useService((state) => state.data);

  useEffect(() => {
    fetchService(service);
  }, []);

  return (
    <Select
      placeholder="Добавить услугу"
      dropDownTitle="Выберите услугу"
      onSelect={setSelected}
      onCancel={setCancelSelected}
      options={data}
      keyExtractor={(el) => el.id.toString()}
    />
  );
};

import { api, Appeal } from "shared/api";
import { getDate } from "shared/lib/getDate";
import { getID } from "shared/lib/getID";
import { DefaultSchema } from "shared/types";
import { create } from "zustand";

export interface AppealSchema extends DefaultSchema<Appeal[]> {
  selectedAppeal: Appeal;
  newAppeal: Pick<Appeal, "title" | "content">;
  selectAppeal: (id: number) => void;
  createNewAppeal: () => void;
  changeNewAppeal: (
    field: keyof AppealSchema["newAppeal"],
    value: string,
  ) => void;
  fetchAppeals: () => void;
  clearStore: (field: keyof AppealSchema, value: any) => void;
}

export const useAppeal = create<AppealSchema>((set) => {
  return {
    data: [],
    isFetching: false,
    selectedAppeal: {},
    newAppeal: {
      title: "",
      content: "",
    },
    selectAppeal: (id) => {
      set(({ data }) => {
        return {
          selectedAppeal: data.find((el) => el.id === id),
        };
      });
    },
    createNewAppeal: () => {
      set(({ data, newAppeal }) => {
        const appealModel: Appeal = {
          id: getID(),
          created_date: getDate(),
          content: newAppeal.content,
          title: newAppeal.title,
          address: "ул. Свободная дом 1, к4, кв. 10",
          companyName: 'ООО "Уютный Дом"',
          fullName: "Иванов Иван Иванович",
        };

        return {
          data: [appealModel, ...data],
        };
      });
    },
    changeNewAppeal: (field, value) => {
      set(({ newAppeal }) => {
        return {
          newAppeal: {
            ...newAppeal,
            [field]: value,
          },
        };
      });
    },
    clearStore: (field, value) => set({ [field]: value }),
    fetchAppeals: async () => {
      try {
        set({ isFetching: true });
        const res = await api.getAppeals();
        set({ data: res.data });
      } catch {
        set({ error: "Server error" });
      } finally {
        set({ isFetching: false });
      }
    },
  };
});

import { api, Service } from "shared/api";
import { Services } from "shared/constants";
import { DefaultSchema } from "shared/types";
import { create } from "zustand";

interface DomainService extends Service {
  isSelected: boolean;
}

interface ServiceSchema extends DefaultSchema<DomainService[]> {
  id: number;
  name: string;
  amount: string;
  servicesCount: Record<Services, number>;
  fetchServicesCount: () => void;
  clearStore: (field: keyof ServiceSchema, value: any) => void;
  fetchService: (service: Services) => void;
  setCancelSelected: () => void;
  setToggleSelected: (id: number) => void;
}

export const useService = create<ServiceSchema>((set) => {
  return {
    data: [],
    isFetching: false,
    servicesCount: {},
    fetchServicesCount: async () => {
      try {
        set({ isFetching: true });
        const res = await api.getServicesCount();
        set({ servicesCount: res });
      } catch {
        set({ error: "Server error" });
      } finally {
        set({ isFetching: false });
      }
    },
    setCancelSelected: () => {
      set((state) => {
        return {
          data: state.data.map((el) => ({ ...el, isSelected: false })),
        };
      });
    },
    clearStore: (field, value) => set({ [field]: value }),
    setToggleSelected: (id: number) => {
      set((state) => {
        return {
          data: state.data.map((el) =>
            el.id === id ? { ...el, isSelected: !el.isSelected } : el,
          ),
        };
      });
    },
    fetchService: async (service) => {
      try {
        set({ isFetching: true });
        const res = await api.getService(service);
        set({ data: res.data?.map((el) => ({ ...el, isSelected: false })) });
      } catch {
        set({ error: "Server error" });
      } finally {
        set({ isFetching: false });
      }
    },
  };
});

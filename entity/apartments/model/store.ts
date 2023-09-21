import { api } from "shared/api";
import { DefaultSchema } from "shared/types";
import { create } from "zustand";

interface ApartmentsSchema extends DefaultSchema<string[]> {
  currentApartments: string;
  fetchApartments: () => object;
}

export const useApartments = create<ApartmentsSchema>((set) => {
  return {
    data: [],
    isFetching: false,
    fetchApartments: async () => {
      try {
        set({ isFetching: true });
        const res = await api.getUserApartments();

        set({ data: res.data, currentApartments: res.data?.[0] });
      } catch {
        set({ error: "Server error" });
      } finally {
        set({ isFetching: false });
      }
    },
  };
});

import { api, Service, ServiceRequest, ServiceRequestStatus } from "shared/api";
import { Services } from "shared/constants";
import { getDate } from "shared/lib/getDate";
import { getID } from "shared/lib/getID";
import { getTime } from "shared/lib/getTime";
import { DefaultSchema } from "shared/types";
import { create } from "zustand";

export interface RequestSchema extends DefaultSchema<ServiceRequest[]> {
  fetchRequests: () => void;
  clearStore: (field: keyof RequestSchema, value: any) => void;
  selectedRequest: ServiceRequest;
  filter: ServiceRequestStatus | "all";
  setFilter: (filter: ServiceRequestStatus | "all") => void;
  setSelectedRequest: (id: string) => void;
  createRequest: (ordersList: Service[], serviceType: Services) => void;
  setRequestStatus: (id: string, status: ServiceRequestStatus) => void;
}

export const useRequests = create<RequestSchema>((set) => {
  return {
    data: [],
    selectedRequest: {},
    filter: "all",
    isFetching: false,
    clearStore: (field, value) => set({ [field]: value }),
    setRequestStatus: (id, status) => {
      set(({ data, selectedRequest }) => {
        return {
          data: data.map((el) =>
            el.id.toString() === id ? { ...el, status } : el,
          ),
          selectedRequest: { ...selectedRequest, status },
        };
      });
    },
    setFilter: (filter: ServiceRequestStatus | "all") => {
      set({ filter });
    },
    createRequest: (orderList, serviceType) => {
      const requestModel: ServiceRequest = {
        id: getID(),
        created_at_time: getTime(),
        created_at_date: getDate(),
        status: ServiceRequestStatus.IN_PROCESS,
        serviceType,
        orderList,
      };
      set(({ data }) => {
        return {
          data: [requestModel, ...data],
        };
      });
    },
    setSelectedRequest: (id) => {
      set(({ data }) => {
        return {
          selectedRequest: data.find((el) => id === el.id.toString()),
        };
      });
    },
    fetchRequests: async () => {
      try {
        set({ isFetching: true });
        const res = await api.getServiceRequestsList();
        set(({ data }) => {
          return {
            data: [...new Set([...data, ...res.data])],
          };
        });
      } catch {
        set({ error: "Server error" });
      } finally {
        set({ isFetching: false });
      }
    },
  };
});

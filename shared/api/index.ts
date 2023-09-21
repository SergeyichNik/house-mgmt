import { instance, ResData } from "shared/api/server/core";
import { Services } from "shared/constants";

export interface Service {
  id: number;
  name: string;
  amount: number;
}

export interface Appeal {
  id: number;
  created_date: string;
  address: string;
  fullName: string;
  companyName: string;
  title: string;
  content: string;
}

export enum ServiceRequestStatus {
  IN_PROCESS = "in_process",
  APPROVED = "approved",
  DONE = "done",
  REJECTED = "rejected",
}

export interface ServiceRequest {
  id: number;
  created_at_date: string;
  created_at_time: string;
  status: ServiceRequestStatus;
  serviceType: Services;
  orderList: Service[];
}

export const api = {
  getService: (service: Services): Promise<ResData<Service[]>> => {
    return instance.get<Service[]>(`/services/${service}`);
  },
  getServices: (): Promise<ResData<Service[]>> => {
    return instance.get<Service[]>("/services/types");
  },
  getServiceRequestsList: (): Promise<ResData<ServiceRequest[]>> => {
    return instance.get<ServiceRequest[]>("/services/requests/list");
  },
  getServiceRequest: (id: string): Promise<ResData<ServiceRequest>> => {
    return instance.get<ServiceRequest>(`/services/requests/list/${id}`);
  },
  getSubjects: (): Promise<ResData<string[]>> => {
    return instance.get<string[]>(`/subjects`);
  },
  getUserApartments: (): Promise<ResData<string[]>> => {
    return instance.get<string[]>(`/userApartments`);
  },
  getAppeals: (): Promise<ResData<Appeal[]>> => {
    return instance.get<Appeal[]>(`/appeals`);
  },
};

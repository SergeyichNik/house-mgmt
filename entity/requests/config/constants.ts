import { ServiceRequestStatus } from "shared/api";
import { StatusName } from "shared/ui/StatusLabel/config/constants";

interface FilterButton {
  type: ServiceRequestStatus | "all";
  label: string;
}

export const filterButtons: FilterButton[] = [
  {
    type: "all",
    label: "Все",
  },
  {
    type: ServiceRequestStatus.IN_PROCESS,
    label: StatusName[ServiceRequestStatus.IN_PROCESS],
  },
  {
    type: ServiceRequestStatus.APPROVED,
    label: StatusName[ServiceRequestStatus.APPROVED],
  },
  {
    type: ServiceRequestStatus.DONE,
    label: StatusName[ServiceRequestStatus.DONE],
  },
  {
    type: ServiceRequestStatus.REJECTED,
    label: StatusName[ServiceRequestStatus.REJECTED],
  },
];

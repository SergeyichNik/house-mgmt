import { ServiceRequestStatus } from "shared/api";
import { Colors } from "shared/theme";

export const StatusName: Record<ServiceRequestStatus, string> = {
  [ServiceRequestStatus.IN_PROCESS]: "Обработка",
  [ServiceRequestStatus.APPROVED]: "Принято",
  [ServiceRequestStatus.DONE]: "Выполнено",
  [ServiceRequestStatus.REJECTED]: "Отменено",
};

export const statusColors: Record<
  ServiceRequestStatus,
  { full: Colors; fade: Colors }
> = {
  [ServiceRequestStatus.IN_PROCESS]: {
    fade: Colors.GRAY_FADE_10,
    full: Colors.GRAY,
  },
  [ServiceRequestStatus.APPROVED]: {
    fade: Colors.BLUE_FADE_10,
    full: Colors.BLUE,
  },
  [ServiceRequestStatus.DONE]: {
    fade: Colors.GREEN_FADE_10,
    full: Colors.GREEN,
  },
  [ServiceRequestStatus.REJECTED]: {
    fade: Colors.RED_FADE_10,
    full: Colors.RED,
  },
};

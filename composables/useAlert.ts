import { nanoid } from "nanoid";
interface AlertOptions {
  type?: "success" | "error" | "info" | "warning";
  title?: string;
  dismissiable?: boolean;
  timeout?: number;
}
interface Alert extends AlertOptions {
  message: string;
  id: string;
}

// vanilla value
// const alerts = ref<Alert[]>()

export const useAlert = () => {
  const alerts = useState<Alert[]>("appAlerts", () => []);
  function alert(message: string, options: AlertOptions) {
    const id = nanoid();
    const defaults: Partial<Alert> = {
      type: "info",
      dismissiable: true,
      timeout: 5000,
    };
    alerts.value.push({ id, ...defaults, message, ...options });

    let timeout =
      options.timeout === undefined ? defaults.timeout : options.timeout;
    if (timeout) {
      setTimeout(() => dismiss(id), timeout);
    }
  }

  function dismiss(idOrAlert: string | Alert) {
    const id = typeof idOrAlert === "string" ? idOrAlert : idOrAlert.id;
    alerts.value = alerts.value.filter((alert) => alert.id !== id);
  }

  function createAlertType(type: AlertOptions["type"]) {
    return (message: string, options: AlertOptions = {}) => {
      alert(message, { ...options, type });
    };
  }

  return {
    success: createAlertType("success"),
    info: createAlertType("info"),
    warning: createAlertType("warning"),
    error: createAlertType("error"),
    alerts,
    dismiss,
  };
};

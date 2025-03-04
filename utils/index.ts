export class AlertableError extends Error {
  public uxMessage: string;

  constructor(err: unknown, options: { uxMessage: string }) {
    super(err?.toString() || "Unknown error");
    this.name = "";
    this.uxMessage = options.uxMessage;
    this.cause = err;
  }
}

/**
 * Custom error class which can store status code and message.
 * Inspired by: https://www.smashingmagazine.com/2020/08/error-handling-nodejs-error-classes/
 */
class AppError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default AppError;

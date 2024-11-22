class Logger {
  debugger(args: unknown, ...rest: unknown[]) {
    console.log(args, ...rest);
  }
}

export const loggerService = new Logger();

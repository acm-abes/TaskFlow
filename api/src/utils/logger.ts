import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf(({ timestamp, level, message }) => {
          // format time for 20:48:03 format
          const time = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }).format(new Date(timestamp as string));

          return `[${level}] ${time}: ${message}`;
        }),
      ),
    }),
  ],
});

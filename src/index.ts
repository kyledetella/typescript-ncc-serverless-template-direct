if (process.env.NODE_ENV === "production") {
  // tslint:disable:no-var-requires
  const awsXRay = require("aws-xray-sdk");
  awsXRay.captureAWS(require("aws-sdk"));
  // tslint:enable:no-var-requires
}

import { Context } from "aws-lambda";

// Typically, you will design this interface per the needs of your application
interface IInvocationResult {
  message: string;
}

export const main = async (
  // the `event` Object will vary depending on your application
  event: any,
  context: Partial<Context>
): Promise<IInvocationResult> => {
  // tslint:disable:no-console
  console.log("Event");
  console.log(event);
  console.log("Context");
  console.log(context);
  // tslint:enable:no-console

  return { message: "ok" };
};

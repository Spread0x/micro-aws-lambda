import {
  APIGatewayProxyEvent,
  Context,
  Handler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { HttpError } from './httpResponse';
import { createTraceInfo } from './utils';

export interface PlainObject {
  [key: string]: string | number | PlainObject | boolean;
}

export interface HttpResponse extends Omit<APIGatewayProxyResult, 'body'> {
  body: PlainObject & {
    debug?: ReturnType<typeof createTraceInfo>;
  };
}

export type Middleware = ({
  event,
  context,
  passDownObj,
}: {
  event: APIGatewayProxyEvent;
  context: Context;
  passDownObj: PlainObject;
  response?: any;
}) =>
  | string
  | number
  | boolean
  | PlainObject
  | APIGatewayProxyResult
  | Promise<PlainObject | APIGatewayProxyResult>
  | HttpError
  | HttpResponse
  | void;

export type LambdaHandler = Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
>;

import { httpResponse, lambdaWrapper, success } from '../src';
const LambdaTester = require('lambda-tester');

it('should return an json response when returning a plain object', async () => {
  const mockResponse = { message: true };

  const testHandler = lambdaWrapper({
    handler: () => mockResponse,
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: JSON.stringify(mockResponse),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  });
});

it('should return an json response when using success()', async () => {
  const mockResponse = { message: true };

  const testHandler = lambdaWrapper({
    handler: () => success({ statusCode: 203, body: mockResponse }),
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: JSON.stringify(mockResponse),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 203,
  });
});

it('should return an json response when using httpResponse()', async () => {
  const mockResponse = { message: true };

  const testHandler = lambdaWrapper({
    handler: () => httpResponse({ statusCode: 201, body: mockResponse }),
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: JSON.stringify(mockResponse),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 201,
  });
});

it('should return an json response when using httpResponse()', async () => {
  const mockResponse = { message: true };

  const testHandler = lambdaWrapper({
    handler: () => httpResponse({ statusCode: 201, body: mockResponse }),
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: JSON.stringify(mockResponse),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 201,
  });
});

it('should return a string when returning a string', async () => {
  const mockResponse = 'test-response';

  const testHandler = lambdaWrapper({
    handler: () => mockResponse,
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: mockResponse,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  });
});

it('should return a number when returning a number', async () => {
  const mockResponse = 8888;

  const testHandler = lambdaWrapper({
    handler: () => mockResponse,
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: mockResponse,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  });
});

it('should return a boolean when returning a boolean', async () => {
  const mockResponse = true;

  const testHandler = lambdaWrapper({
    handler: () => mockResponse,
  });

  const response = await LambdaTester(testHandler).expectResult();

  expect(response).toEqual({
    body: mockResponse,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  });
});
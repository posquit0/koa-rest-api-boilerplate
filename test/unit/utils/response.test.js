'use strict';

const Response = require('../../../app/utils/response');


describe('utils/response', () => {
  const ctx = {};
  const params = {
    data: {
      foo: 'bar'
    },
    message: 'Test Message'
  };
  it('should define `Response` class', () => {
    expect(Response).toBeDefined();
  });

  describe('Response.STATUS_CODES', () => {
    it('should have all supported HTTP Response Statuses', () => {
      const STATUS_CODES = Response.STATUS_CODES;

      expect(STATUS_CODES.CONTINUE).toEqual(100);

      expect(STATUS_CODES.OK).toEqual(200);
      expect(STATUS_CODES.CREATED).toEqual(201);
      expect(STATUS_CODES.ACCEPTED).toEqual(202);
      expect(STATUS_CODES.NO_CONTENT).toEqual(204);

      expect(STATUS_CODES.BAD_REQUEST).toEqual(400);
      expect(STATUS_CODES.UNAUTHORIZED).toEqual(401);
      expect(STATUS_CODES.FORBIDDEN).toEqual(403);
      expect(STATUS_CODES.NOT_FOUND).toEqual(404);
      expect(STATUS_CODES.NOT_ACCEPTABLE).toEqual(406);
      expect(STATUS_CODES.REQUEST_TIMEOUT).toEqual(408);
      expect(STATUS_CODES.CONFLICT).toEqual(409);
      expect(STATUS_CODES.REQUEST_ENTITY_TOO_LARGE).toEqual(413);
      expect(STATUS_CODES.UNSUPPORTED_MEDIA_TYPE).toEqual(415);
      expect(STATUS_CODES.UNPROCESSABLE_ENTITY).toEqual(422);
      expect(STATUS_CODES.TOO_MANY_REQUESTS).toEqual(429);

      expect(STATUS_CODES.INTERNAL_SERVER_ERROR).toEqual(500);
      expect(STATUS_CODES.NOT_IMPLEMENTED).toEqual(501);
      expect(STATUS_CODES.BAD_GATEWAY).toEqual(502);
      expect(STATUS_CODES.SERVICE_UNAVAILABLE).toEqual(503);
      expect(STATUS_CODES.GATEWAY_TIMEOUT).toEqual(504);
    });
  });

  describe('Response.success(ctx, params)', () => {
    it('should return the response with `status`, `data`, `message` properties', () => {
      const ctx = {
        status: 200
      };
      const response = Response.success(ctx);

      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'data', 'message']));
    });

    it('should return `200` status code when have wrong status code', () => {
      const ctx = {
        status: 500
      };
      Response.success(ctx);
      expect(ctx.status).toEqual(Response.STATUS_CODES.OK);
    });
  });

  describe('Response.fail(ctx, params)', () => {
    it('should return the response with `status`, `code`, `data`, `message` properties', () => {
      const ctx = {
        status: 400
      };
      const response = Response.fail(ctx);

      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
    });

    it('should return `400` status code when have wrong status code', () => {
      const ctx = {
        status: 500
      };
      Response.fail(ctx);
      expect(ctx.status).toEqual(Response.STATUS_CODES.BAD_REQUEST);
    });
  });

  describe('Response.error(ctx, params)', () => {
    it('should return the response with `status`, `code`, `data`, `message` properties', () => {
      const ctx = {
        status: 500
      };
      const response = Response.error(ctx);

      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
    });

    it('should return `500` status code when have wrong status code', () => {
      const ctx = {
        status: 200
      };
      Response.error(ctx);
      expect(ctx.status).toEqual(Response.STATUS_CODES.INTERNAL_SERVER_ERROR);
    });
  });

  describe('Response.ok(ctx, params)', () => {
    it('should return the `success` response ', () => {
      const response = Response.ok(ctx, params);
      const { status, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.OK);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'data', 'message']));
      expect(status).toBe('success');
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.created(ctx, params)', () => {
    it('should return the `success` response ', () => {
      const response = Response.created(ctx, params);
      const { status, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.CREATED);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'data', 'message']));
      expect(status).toBe('success');
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.accepted(ctx, params)', () => {
    it('should return the `success` response ', () => {
      const response = Response.accepted(ctx, params);
      const { status, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.ACCEPTED);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'data', 'message']));
      expect(status).toBe('success');
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.noContent(ctx, params)', () => {
    it('should return the `success` response ', () => {
      const response = Response.noContent(ctx, params);
      const { status, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.NO_CONTENT);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'data', 'message']));
      expect(status).toBe('success');
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.badRequest(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.badRequest(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.BAD_REQUEST);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.unauthorized(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.unauthorized(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.UNAUTHORIZED);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.forbidden(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.forbidden(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.FORBIDDEN);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.notFound(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.notFound(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.NOT_FOUND);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.notAcceptable(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.notAcceptable(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.NOT_ACCEPTABLE);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.requestTimeout(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.requestTimeout(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.REQUEST_TIMEOUT);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.conflict(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.conflict(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.CONFLICT);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.requestEntityTooLarge(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.requestEntityTooLarge(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.REQUEST_ENTITY_TOO_LARGE);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.unsupportedMediaType(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.unsupportedMediaType(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.UNSUPPORTED_MEDIA_TYPE);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.unprocessableEntity(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.unprocessableEntity(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.UNPROCESSABLE_ENTITY);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.tooManyRequests(ctx, params)', () => {
    it('should return the `fail` response ', () => {
      const response = Response.tooManyRequests(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.TOO_MANY_REQUESTS);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('fail');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.internalServerError(ctx, params)', () => {
    it('should return the `error` response ', () => {
      const response = Response.internalServerError(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.INTERNAL_SERVER_ERROR);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('error');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.notImplemented(ctx, params)', () => {
    it('should return the `error` response ', () => {
      const response = Response.notImplemented(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.NOT_IMPLEMENTED);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('error');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.badGateway(ctx, params)', () => {
    it('should return the `error` response ', () => {
      const response = Response.badGateway(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.BAD_GATEWAY);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('error');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.serviceUnavailable(ctx, params)', () => {
    it('should return the `error` response ', () => {
      const response = Response.serviceUnavailable(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.SERVICE_UNAVAILABLE);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('error');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });

  describe('Response.gatewayTimeout(ctx, params)', () => {
    it('should return the `error` response ', () => {
      const response = Response.gatewayTimeout(ctx, params);
      const { status, code, data, message } = response;

      expect(ctx.status).toBe(Response.STATUS_CODES.GATEWAY_TIMEOUT);
      expect(Object.keys(response)).toEqual(expect.arrayContaining(['status', 'code', 'data', 'message']));
      expect(status).toBe('error');
      expect(code).toBeNull();
      expect(data).toBe(params.data);
      expect(message).toBe(params.message);
    });
  });
});

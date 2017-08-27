'use strict';

/**
 * HTTP Status codes
 */
const statusCodes = {
  CONTINUE: 100,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIME_OUT: 504
};

function responseHandler() {
  return async (ctx, next) => {
    ctx.res.statusCodes = statusCodes;
    ctx.statusCodes = ctx.res.statusCodes;

    ctx.res.success = (data = null, message = null) => {
      ctx.status = ctx.status < 400 ? ctx.status : statusCodes.OK;
      ctx.body = { status: 'success', data, message };
    };

    ctx.res.fail = (data = null, message = null) => {
      ctx.status = ctx.status >= 400 && ctx.status < 500
        ? ctx.status
        : statusCodes.BAD_REQUEST;
      ctx.body = { status: 'fail', data, message };
    };

    ctx.res.error = (code = null, message = null) => {
      ctx.status = ctx.status < 500
        ? statusCodes.INTERNAL_SERVER_ERROR
        : ctx.status;
      ctx.body = { status: 'error', code, message };
    };

    ctx.res.ok = (data, message) => {
      ctx.status = statusCodes.OK;
      ctx.res.success(data, message);
    };

    ctx.res.created = (data, message) => {
      ctx.status = statusCodes.CREATED;
      ctx.res.success(data, message);
    };

    ctx.res.accepted = (data, message) => {
      ctx.status = statusCodes.ACCEPTED;
      ctx.res.success(data, message);
    };

    ctx.res.noContent = (data, message) => {
      ctx.status = statusCodes.NO_CONTENT;
      ctx.res.success(data, message);
    };

    ctx.res.badRequest = (data, message) => {
      ctx.status = statusCodes.BAD_REQUEST;
      ctx.res.fail(data, message);
    };

    ctx.res.forbidden = (data, message) => {
      ctx.status = statusCodes.FORBIDDEN;
      ctx.res.fail(data, message);
    };

    ctx.res.notFound = (data, message) => {
      ctx.status = statusCodes.NOT_FOUND;
      ctx.res.fail(data, message);
    };

    ctx.res.internalServerError = (code, message) => {
      ctx.status = statusCodes.INTERNAL_SERVER_ERROR;
      ctx.res.error(code, message);
    };

    ctx.res.notImplemented = (code, message) => {
      ctx.status = statusCodes.NOT_IMPLEMENTED;
      ctx.res.error(code, message);
    };
    await next();
  };
}

module.exports = responseHandler;

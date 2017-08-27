'use strict';

const supertest = require('supertest');
const app = require('../../app');

describe('Home', () => {
  const request = supertest(app.listen());

  describe('GET /', () => {
    it('should always success with the API server information', async () => {
      const res = await request
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200);

      const { status, data, message } = res.body;
      const expected = ['name', 'version', 'description', 'author'];
      expect(status).toBe('success');
      expect(message).toBe('Hello, API!');
      expect(Object.keys(data)).toEqual(expect.arrayContaining(expected));
    });
  });
});

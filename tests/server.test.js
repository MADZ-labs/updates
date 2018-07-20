const request = require('supertest');

const app = require('../server/server.js');

describe('get /updates', () => {
  it('should return a status code of 200', async () => {
    const response = await request(app).get('/updates');
    expect(response.statusCode).toBe(200);
  });
});

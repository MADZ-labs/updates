const request = require('supertest');

const app = require('../server/server.js');

describe('get /updates', () => {
  it('should return a status code of 200 for a valid request', async () => {
    const response = await request(app).get('/updates');
    expect(response.statusCode).toBe(200);
  });

  it('should return "get updates" for a valid request', async () => {
    const response = await request(app).get('/updates');
    expect(response.text).toBe('get updates');
  });

  it('should return a status code of 404 for a bad request', async () => {
    const response = await request(app).get('/update');
    expect(response.statusCode).toBe(404);
  });
});

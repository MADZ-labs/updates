const request = require('supertest');

const app = require('../server/server.js');

describe('get /projects/:id', () => {
  it('should return a status code of 200 for a valid request', async () => {
    const response = await request(app).get('/projects/25');
    expect(response.statusCode).toBe(200);
  });

  it('should return a status code of 404 for a bad request', async () => {
    const response = await request(app).get('/project');
    expect(response.statusCode).toBe(404);
  });
});

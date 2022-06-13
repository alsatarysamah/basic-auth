'use strict';
const { app } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(app);
const { db } = require('../src/auth/models/index');


beforeAll(async () => {
    await db.sync();
});

describe('Web server', () => {
    it('bad route', async () => {
        const response = await mockRequest.get('/bad');
        expect(response.status).toBe(404);
    });})
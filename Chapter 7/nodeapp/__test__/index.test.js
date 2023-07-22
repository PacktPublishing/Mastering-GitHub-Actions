/* eslint-disable jest/no-done-callback */
const request = require("supertest");
const app = require("../index");
let server;

// Wrap your server setup in a beforeAll
beforeAll((done) => {
  server = app.listen(3000, () => {
    global.agent = request.agent(server);
    done();
  });
});

// Use afterAll to close the server
afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("responds with random number", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    const responseBody = parseInt(response.text);
    expect(typeof responseBody).toBe("number");
  });
});

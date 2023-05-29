const request = require("supertest");
const { app, server } = require("../dist/index");

afterAll(() => {
  server.close();
});

describe("Simple Test", () => {
  it("should return Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});

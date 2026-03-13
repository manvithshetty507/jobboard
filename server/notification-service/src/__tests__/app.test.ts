// src/__tests__/app.test.ts

import request from "supertest";
import { app } from "../app";

describe("Health route", () => {
  it("should return OK", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.text).toBe("OK");
  });
});
import { rest } from "msw";
import { mockGames } from "./games";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "mockTokencito" }));
  }),

  rest.get(`${process.env.REACT_APP_API_URL}games`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockGames));
  }),

  rest.get("/user", null),
];

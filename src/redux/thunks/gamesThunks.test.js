import "../../../src/mocks/server";
import { mockGame, mockGames } from "../../mocks/games";
import {
  loadAllGamesActionCreator,
  loadGameActionCreator,
} from "../features/gameSlice";
import { getGameThunk, loadGamesThunk } from "./gamesThunks";

describe("Given the loadGamesThunk function", () => {
  describe("When invoked", () => {
    test("Then it should dispatch the loadAllGamesActionCreator with a list of games", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadAllGamesActionCreator(mockGames);

      const thunk = loadGamesThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the getGameThunk function", () => {
  describe("When invoked with an ID 1", () => {
    test("Then it should dispatch the loadGameActionCreator with a game", async () => {
      const gameID = "1";
      const dispatch = jest.fn();
      const expectedAction = loadGameActionCreator(mockGame);

      const thunk = getGameThunk(gameID);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

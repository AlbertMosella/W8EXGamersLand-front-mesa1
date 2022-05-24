import "../../../src/mocks/server";
import { mockGames } from "../../mocks/games";
import { loadAllGamesActionCreator } from "../features/gameSlice";
import { loadGamesThunk } from "./gamesThunks";

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

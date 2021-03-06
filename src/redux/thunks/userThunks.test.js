import "../../../src/mocks/server";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({ id: "1234", username: "mockUser" }));

describe("Given the userThunks function", () => {
  describe("When invoked with a correct username and a password", () => {
    test("Then it should dispatch the loginActionCreator with the username and the id", async () => {
      const dispatch = jest.fn();
      const inputData = { username: "mockUser", password: "4321" };

      const userData = { id: "1234", username: "mockUser" };

      const expectedAction = loginActionCreator(userData);

      const thunk = loginThunk(inputData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

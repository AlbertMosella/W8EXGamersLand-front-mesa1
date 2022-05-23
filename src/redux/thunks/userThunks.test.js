import { loginActionCreator } from "../features/userSlice";
import { loginThunk } from "./userThunks";

const mockUserData = {
  username: "admin",
  password: "admin",
};

describe("Given the userThunks", () => {
  describe("When loginThunk it's invoked", () => {
    test("Then it should call dispatch loginActionCreator", async () => {
      const dispatch = jest.fn();
      const expectAction = loginActionCreator(mockUserData);

      const thunk = loginThunk();
      await thunk(dispatch);

      expect(dispatch).toBeCalledWith(expectAction);
    });
  });
});

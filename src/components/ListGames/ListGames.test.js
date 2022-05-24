import { render, screen } from "@testing-library/react";
import ListGames from "./ListGames";
import { mockGames } from "../../mocks/games";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockGames,
}));

describe("Given a ListGame component", () => {
  describe("When it's instanciated and it receives and array with 2 games by useSe", () => {
    test("Then it show 2 list items", () => {
      const expectListLength = 2;

      render(
        <Provider store={store}>
          <ListGames />
        </Provider>
      );
      const listOfGames = screen.getAllByRole("listitem");

      expect(listOfGames).toHaveLength(expectListLength);
    });
  });
});

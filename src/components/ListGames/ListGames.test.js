import { render, screen } from "@testing-library/react";
import ListGames from "./ListGames";
import { mockGames } from "../../mocks/games";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a ListGame component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a title with the text 'List of all games'", () => {
      const expectedText = "List of all games";
      render(
        <Provider store={store}>
          <ListGames />
        </Provider>
      );
      const result = screen.getByRole("heading");
      expect(result.textContent).toBe(expectedText);
    });
  });
});

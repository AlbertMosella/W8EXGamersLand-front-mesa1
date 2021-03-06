import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/store/store";

describe("Given a App component", () => {
  describe("When the word 'GamersLand' is written to the header element", () => {
    test("Then the value of the header element should be 'GamersLand'", () => {
      const expectedResult = "GamersLand";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});

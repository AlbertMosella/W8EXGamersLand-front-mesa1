import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'User Login'", () => {
      const expectedResult = "User Login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's rendered", () => {
    test("Then it alwais show the same structure", () => {
      const loginPage = reactTestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      expect(loginPage).toMatchSnapshot();
    });
  });
});

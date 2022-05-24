import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegistersPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'User Register'", () => {
      const expectedResult = "User Register";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's rendered", () => {
    test("Then it alwais show the same structure", () => {
      const registerPage = reactTestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      expect(registerPage).toMatchSnapshot();
    });
  });
});

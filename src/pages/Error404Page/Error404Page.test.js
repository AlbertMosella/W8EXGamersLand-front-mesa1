import { render, screen } from "@testing-library/react";
import Error404Page from "./Error404Page";

describe("Given a Error404Page component", () => {
  describe("When its rendered", () => {
    test("Then it should render the text 'ERROR 404, PAGE NOT FOUND'", () => {
      const expectedText = "ERROR 404, PAGE NOT FOUND";

      render(<Error404Page />);
      const element = screen.getByText(expectedText);

      expect(element).toBeInTheDocument();
    });
  });
});

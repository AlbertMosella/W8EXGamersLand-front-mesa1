import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Given a App component", () => {
  describe("When the word 'GamersLand' is written to the header element", () => {
    test("Then the value of the header element should be 'GamersLand'", () => {
      const text = "GamersLand";

      render(<App />);

      const heading = screen.getByRole("heading", text);

      expect(heading).toBeInTheDocument();
    });
  });
});

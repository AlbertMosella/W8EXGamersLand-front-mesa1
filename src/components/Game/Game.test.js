import { render, screen } from "@testing-library/react";
import { mockGame } from "../../mocks/games";
import Game from "./Game";

describe("Given the Game component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading h2 element", () => {
      const expectedTextHeading = "Fifa 22";

      render(<Game game={mockGame} />);
      const gameName = screen.getByRole("heading", { level: 2 });

      expect(gameName).toHaveTextContent(expectedTextHeading);
    });
  });
});

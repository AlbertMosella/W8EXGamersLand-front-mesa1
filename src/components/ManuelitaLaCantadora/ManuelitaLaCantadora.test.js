import { render, screen } from "@testing-library/react";
import ManuelitaLaCantadora from "./ManuelitaLaCantadora";

const mockUseNavigate = jest.fn();
let mockLogged;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  useSelector: () => ({ logged: mockLogged }),
}));

describe("Given a 'ManuelitaLaCantadora' component", () => {
  describe("When 'logged' it's false", () => {
    test("Then it should call navigate and it should return null", () => {
      mockLogged = false;

      render(<ManuelitaLaCantadora />);

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When 'logged' it's true and it has a heading children", () => {
    test("Then it should render the heading children", () => {
      mockLogged = true;

      render(
        <ManuelitaLaCantadora>
          <h1>Hola</h1>
        </ManuelitaLaCantadora>
      );
      const receivedHeading = screen.getByRole("heading", {
        level: 1,
        name: /hola/i,
      });

      expect(receivedHeading).toBeInTheDocument();
    });
  });
});

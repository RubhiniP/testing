import { render, screen } from "@testing-library/react"
import Greet2 from "./Greet2"

describe('Greet 2 Group', () => {
    test("testing", () => {
        render(<Greet2 />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    });
    
    test("testing with name prop", () => {
        render(<Greet2 name="Rubhini"/>);
        const textElement = screen.getByText("Hello Rubhini");
        expect(textElement).toBeInTheDocument();
    });
});
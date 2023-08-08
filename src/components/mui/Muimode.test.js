import { render, screen } from "../../test-utils";
import Muimode from "./Muimode"

describe('Muimode test', () => {
    test('renders correctly', () => {
        render(<Muimode />);
        const headingElement = screen.getByRole('heading', {
            level: 2
        });
        expect(headingElement).toHaveTextContent('dark mode');
    });
})
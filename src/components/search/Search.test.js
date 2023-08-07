import { render, screen } from "@testing-library/react"
import Search from "./Search"

describe("Search Test", () => {
    test("Search test 1", () => {
        render(<Search />);
        screen.debug();
    });
});
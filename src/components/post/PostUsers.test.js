import { render, screen } from "@testing-library/react";
import PostUsers from "./PostUsers";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.mock('axios');

describe("PostUsers test", () => {
    test("should resolve the promise", async () => {
        userEvent.setup();
        const result = axios.post.mockResolvedValue({
            data: [
                {
                    id: 1,
                    username: "Ruby",
                    name: "Rubhini",
                    email: "abc@gmail.com"
                }
            ]
        });

        render(<PostUsers />);

        const postElement = screen.getByRole('button', {
            name: "Post data"
        });
        expect(postElement).toBeInTheDocument();
        await act(() => userEvent.click(postElement));
        expect(result).toHaveBeenCalledTimes(1);
        
    });

    test("should throw an error", async () => {
        userEvent.setup();
        const error = axios.post.mockRejectedValue(new Error());
        render(<PostUsers />);
        const postElement = screen.getByRole('button',{
            name: "Post data"
        });
        await act(() => userEvent.click(postElement));
        expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
        expect(error).toHaveBeenCalledTimes(1);
    })
})
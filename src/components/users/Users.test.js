import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./Users";

jest.mock('axios');

describe('Users test', () => {
    test('renders correctly', async () => {

        axios.get.mockResolvedValue({
            data: [
              {
                userId: 1,
                id: 1,
                title: 'My First Album'
              },
              {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
              }
            ]
          });

        render(<Users />);
        const headingElement = screen.getByRole('heading', {
            level: 2,
            name: "Users List"
        });
        expect(headingElement).toBeInTheDocument();

        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(2);
    });

    test('should throw an error', async () => {
        axios.get.mockRejectedValue(new Error());

        render(<Users />);
        const errorElement = await screen.findByText(/Error fetching data/i);
        expect(errorElement).toBeInTheDocument();

    })
})
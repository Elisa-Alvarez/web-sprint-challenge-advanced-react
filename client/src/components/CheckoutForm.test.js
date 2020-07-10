import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument();

});


test("Runs through form and tests the input elements", () => {
    const { getByLabelText, getByTestId} = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i)
    const lastName = getByLabelText(/last name/i)
    const address = getByLabelText (/address/i)
    const city = getByLabelText(/city/i)
    const state= getByLabelText(/state/i)
    const zip = getByLabelText(/zip/i)
    
    const submit = getByTestId(/button/i)

    fireEvent.change(firstName, {
        target: {name: 'firstName', value: 'elisa'}
    })

    fireEvent.change(lastName, {
        target: {name: 'lastName', value: 'alvarez'}
    })

    fireEvent.change(address, {
        target: {name: 'address', value: '99 candy lane'}
    })


    fireEvent.change(city, {
        target: {name: 'city', value: 'Yuba City'}
    })

    fireEvent.change(state, {
        target: {name: 'state', value: 'CA'}
    })

    fireEvent.change(zip, {
        target: {name: 'zip', value: '95993'}
    })

    fireEvent.click(submit);

    const sucessMessage = screen.getByText(/ be shipped to:/i)
    const input = screen.getByText(/elisa alvarez/i)
    const testToFail = screen.getByTitle(/Plants/i)

    expect(sucessMessage).toBeInTheDocument()
    expect(testToFail).toBeInTheDocument()
    expect(input).toBeInTheDocument()



});
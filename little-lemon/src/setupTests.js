// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Main from './component/Main.js';

describe('Main component', () => {
  it('should update available times when date is changed', () => {
    const { getByLabelText, getByText } = render(<Main />);
    const dateInput = getByLabelText('Date:');
    const timeSelect = getByLabelText('Time:');

    // Select a date
    fireEvent.change(dateInput, { target: { value: '2023-03-01' } });

    // Check that available times have been updated
    expect(timeSelect).toContainHTML('<option  value="12:00">12:00</option>');
    expect(timeSelect).toContainHTML('<option value="14:00">14:00</option>');
    expect(timeSelect).toContainHTML('<option value="18:00">18:00</option>');
    expect(timeSelect).toContainHTML('<option value="20:00">20:00</option>');
  });
});


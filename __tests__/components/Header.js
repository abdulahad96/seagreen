import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import Header from '../../src/components/Header';

describe('Component Header', () => {
    const leftBtnPress = jest.fn()
    const rightBtnPress = jest.fn()
    test('renders correctly', () => {
        const output = render(<Header
            headerText={''}
        />);
        expect(output).toMatchSnapshot();
    });
    test('renders correctly with leftIcon and rightIcon and Header Text', () => {
        const output = render(<Header
            headerText={''}
            leftIcon={''}
            rightIcon={''}
        />);
        expect(output).toMatchSnapshot();
    });
    test('renders correctly with notification', () => {
        const output = render(<Header
            headerText={''}
            leftIcon={''}
            rightIcon={''}
            notification={1}
        />);
        expect(output).toMatchSnapshot();
    });

    test('renders correctly with notification', () => {
        const output = render(<Header
            headerText={''}
            leftIcon={''}
            rightIcon={''}
            notification={1}
        />);
        expect(output).toMatchSnapshot();
    });
    test('renders when left icon is pressed', () => {
        const { getByTestId } = render(

            <Header
                headerText={''}
                leftIcon={''}
                rightIcon={''}
                notification={1}
                leftBtnPress={leftBtnPress}

            />
        );
        fireEvent(getByTestId('header-left-btn'), 'press');
        expect(leftBtnPress).toHaveBeenCalled();
    });
    test('renders when right icon is pressed', () => {
        const { getByTestId } = render(

            <Header
                headerText={''}
                leftIcon={''}
                rightIcon={''}
                notification={1}
                rightBtnPress={rightBtnPress}

            />
        );
        fireEvent(getByTestId('header-right-btn'), 'press');
        expect(rightBtnPress).toHaveBeenCalled();
    });
});


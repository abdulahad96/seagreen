import React from 'react';
import SignIn from '../../src/containers/SignIn';
import { render, fireEvent } from 'react-native-testing-library';




describe('Component SignIn Screen', () => {
    const navigation = { replace: jest.fn(), navigate: jest.fn(), goBack: jest.fn(), dispatch: jest.fn() };
   
    test('renders correctly', () => {
        const output = render(<SignIn navigation={navigation}/>);
        expect(output).toMatchSnapshot();
    });
    });

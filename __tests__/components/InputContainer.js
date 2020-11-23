import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import InputContainer from '../../src/components/Input';


describe('Component Input Container', () => {

    const onChange = jest.fn();
    test('renders correctly', () => {
        const output = render(<InputContainer
            inputContainerStyle={{}}
            inputFieldStyle={{}}
            autoCapitalize
            isActive
            placeholderTextColor=""
            placeHolder={''}
            onChange={onChange}
        />);
        expect(output).toMatchSnapshot();
    });
    test('renders with auto capitalize', () => {
        const output = render(<InputContainer
            inputContainerStyle={{}}
            inputFieldStyle={{}}
            autoCapitalize
            isActive
            placeholderTextColor=""
            placeHolder={''}
            onChange={onChange}
        />);
        expect(output).toMatchSnapshot();
    });
    test('renders with Secure text', () => {
        const output = render(<InputContainer
            inputContainerStyle={{}}
            inputFieldStyle={{}}
            autoCapitalize
            isActive
            placeholderTextColor=""
            placeHolder={''}
            secureTextEntry
            onChange={onChange}
        />);
        expect(output).toMatchSnapshot();
    });
  });

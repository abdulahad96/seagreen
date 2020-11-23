import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import ModalContainer from '../../src/components/ModalView';


describe('Component modal Container', () => {
const closeModal = jest.fn()
    const onChange = jest.fn();
    test('renders correctly', () => {
        const output = render(<ModalContainer
            showModal={true}
            title=''
            btnTxt=''
            closeModal={closeModal()}
            btnColor=''
        />);
        expect(output).toMatchSnapshot();
    });
   });

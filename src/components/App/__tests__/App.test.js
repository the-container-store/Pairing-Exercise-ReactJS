import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitForElement, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'

import { states } from '../App.state'
import App from '../';

afterEach(cleanup)

const [state0, state1, state2] = states

it('renders the correct images', () => {
  const { getByTestId, getAllByAltText } = render(<App />)
  const buttonsContainer = getByTestId('selectorButtons')
  const [button0, button1, button2] = buttonsContainer.children

  const images0 = getAllByAltText('Space')
  expect(images0.length).toBe(state0.imageUrls.length)

  fireEvent.click(button1)

  const images1 = getAllByAltText('Space')
  expect(images1.length).toBe(state1.imageUrls.length)

  fireEvent.click(button2)

  const images2 = getAllByAltText('Space')
  expect(images2.length).toBe(state2.imageUrls.length)
});

/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import App from '../App'

describe('<App />', () => {
  it('renders without errors', () => {
    render(<App />)
  })
})

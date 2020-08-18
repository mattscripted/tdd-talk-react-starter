import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders "This is an empty project"', () => {
    const { getByText } = render(<App />)
    const emptyProjectElement = getByText(/This is an empty project/i)
    expect(emptyProjectElement).toBeInTheDocument()
  })
})

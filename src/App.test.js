import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App', () => {
  const getSearchTextInput = () => screen.getByRole('textbox', { name: /Search/i })
  const getSearchButton = () => screen.getByRole('button', { name: /Submit/i })
  const querySearchResults = () => screen.queryByTestId('search-results')

  it('renders a textbox', () => {
    render(<App />)
    expect(getSearchTextInput()).toBeInTheDocument()
  })

  it('renders a search button', () => {
    render(<App />)
    expect(getSearchButton()).toBeInTheDocument()
  })

  it('disables the search button, if the search textbox is empty', async () => {
    render(<App />)

    const searchTextInput = getSearchTextInput()
    const searchButton = getSearchButton()

    userEvent.clear(searchTextInput)

    await waitFor(() => {
      expect(searchButton).toBeDisabled()
    })
  })

  it('enables the search button, if the search textbox contains text', async () => {
    render(<App />)

    const searchTextInput = getSearchTextInput()
    const searchButton = getSearchButton()

    userEvent.type(searchTextInput, 'something')

    await waitFor(() => {
      expect(searchButton).toBeEnabled()
    })
  })

  it('displays search results after searching', async () => {
    render(<App />)

    const searchTextInput = getSearchTextInput()
    const searchButton = getSearchButton()

    userEvent.type(searchTextInput, 'something')
    userEvent.click(searchButton)

    await waitFor(() => {
      expect(querySearchResults()).toBeInTheDocument()
    })
  })

  // We should write this test after we fetch search results,
  // as otherwise this element will not exist and we'll
  // automatically pass this test
  it('does not render search results before searching', () => {
    render(<App />)

    // We need to user query when things might not exist
    expect(querySearchResults()).not.toBeInTheDocument()
  })
})

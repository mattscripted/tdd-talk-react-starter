import React, { useState } from 'react'

function App () {
  const [searchQuery, setSearchQuery] = useState('')
  const [hasResults, setHasResults] = useState(false)

  const handleChangeSearchQuery = event => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = () => {
    setHasResults(true)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        // We need aria-label for getByRole()
        aria-label='Search'
        value={searchQuery}
        onChange={handleChangeSearchQuery}
      />
      <button
        type='submit'
        disabled={searchQuery === ''}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {hasResults && (
        <div data-testid='search-results'>
          search results
        </div>
      )}
    </div>
  )
}

export default App

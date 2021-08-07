import { useState } from 'react'
import {useRouter} from 'next/router'

import MagnifyingGlass from "./svg/MagnifyingGlass"

// const preventDefault = f => e => {
//   e.preventDefault()
//   f(e)
// }

const Searchbar = ({action = '/search'}) => {
    const router = useRouter()
    const [query, setQuery] = useState('')
 
    const handleParam = e => setQuery(e.target.value)
 
    const handleSubmit = (e) => {
      e.preventDefault()
      router.push({
        pathname: action,
        query: {q: query},
      })
    }
 
    return (
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type='text'
          name='q'
          value={query}
          onChange={handleParam}
          placeholder='Search...'
          aria-label='Search'
        />
        <button className="btn" type="submit"><MagnifyingGlass /></button>
      </form>
    )
 }

export default Searchbar
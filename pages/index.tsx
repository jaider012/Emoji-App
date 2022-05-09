import type { NextPage } from 'next'
import { useState } from 'react'
import CategoryEmoji from '../components/CategoryEmoji'
import Layout from '../components/Layout'
import List from '../components/List'
import emojidata from '../data/emojis'


const Home: NextPage = () => {
  const [filtersearch, setsearch] = useState(emojidata)

  const handlefilterBysearch = (search: string) => {
    if (search.length > 0) {
      setsearch(emojidata.filter(emoji => {
        return emoji.name.toLowerCase().includes(search.toLowerCase().trim())
      })
      )
    } else {
      setsearch(emojidata.slice(0, 100))
    }
  }

  const handleFilterByCategory = (category: string) => {
      setsearch(emojidata.filter(emoji => {
        return emoji.group.toLowerCase().includes(category.toLowerCase())
      })
      )
  }

  return (
    <Layout >
      <h1 className='text-2xl sm:text-4xl font-bold dark:text-gray-200 text-gray-900 text-center tracking-wide'> Welcome to emoji App 💡👾</h1>

      <div className='flex justify-center'>
        <input className='w-full max-w-xl border border-gray-300 p-2 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 ' type="text" id='name'
          placeholder='Search an Emoji' onChange={e => { handlefilterBysearch(e.target.value) }} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6'>    <CategoryEmoji
        handleFilter={handleFilterByCategory}
        emoji="😀"
        group={'Smileys & Emotion'}
      />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="👨🏻"
          group={'People & Body'}
        />

        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="🍔"
          group={'Food & Drink'}
        />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="🚩"
          group="Flags"
        />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="⚽️"
          group="Activities"
        />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="🏨"
          group={'Travel & Places'}
        />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="💡"
          group="Objects"
        />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="🐶"
          group={'Animals & Nature'}
        />
        <CategoryEmoji
          handleFilter={handleFilterByCategory}
          emoji="⚛️"
          group="Symbols"
        />
      </div>

      <List emojis={filtersearch.slice(0, 100)} />
    </Layout>
  )
}

export default Home

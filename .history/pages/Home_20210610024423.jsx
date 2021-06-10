import React from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Title from '../components/Title'

return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredColorList.map(color => (<ColorLink key={color.id} id={color.id} name={color.name} path="colors" />))
      }
    </Page>
  )
}

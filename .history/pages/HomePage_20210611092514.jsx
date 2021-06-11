import React from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Title from '../components/Title'
import Logo from '../components/Logo'

import { filterNsns, retrieveNsns } from '../utils/nsn'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [nsnList, setNsnList] = useState([])
  const [filteredNsnList, setFilteredList] = useState([])
  useEffect(() => {
    async function pullData() {
      const colors = await retrieveColors()

      setColorList(colors)
      setFilteredColorList(colors)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterColors(colorList, searchTerm)

    setFilteredColorList(filtered)
  }, [searchTerm])

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

export default () => (
  <Page>
    <Title />
    <Logo />
    <Search />
  </Page>
)
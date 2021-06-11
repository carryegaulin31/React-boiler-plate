import React from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Title from '../components/Title'
import Logo from '../components/Logo'

import { filters, retrieveColors } from '../utils/colors'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [colorList, setColorList] = useState([])
  const [filteredColorList, setFilteredColorList] = useState([])
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

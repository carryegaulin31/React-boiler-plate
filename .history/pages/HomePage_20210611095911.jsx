import React, { use} from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Title from '../components/Title'
import Logo from '../components/Logo'

import { filterNsns, retrieveNsns } from '../utils/nsn'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [nsnList, setNsnList] = useState([])
  const [filteredNsnList, setFilteredNsnList] = useState([])
  useEffect(() => {
    async function pullData() {
      const nsns = await retrieveNsns()

      setNsnList(nsns)
      setFilteredNsnList(nsns)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNsns(nsnList, searchTerm)

    setFilteredNsnList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Logo />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredNsnList.map(nsn => (<NsnLink key={nsn.NIIN} id={nsn.NIIN} name={nsn.name} path="nsns" />))
      }
    </Page>
  )
}
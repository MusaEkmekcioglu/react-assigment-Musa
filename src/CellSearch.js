import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { SongContext } from './SongContext'
const CellSearch = ({ data }) => {
  const [toggle, setToggle] = useState(true)
  const { addSong, deleteSong, songs } = useContext(SongContext)

  const selectedSong = () => {
    controlChecked()

    toggle && addSong(toggle, data.name, data.artist)
    !toggle && deleteSong(toggle, data.name, data.artist)
  }

  const controlChecked = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.artist}</td>
        <td>
          {' '}
          <Button
            onClick={selectedSong}
            style={{ textDecoration: 'none', color: 'black' }}
            variant="link"
          >
            {toggle ? 'add' : 'remove'}
          </Button>
        </td>
      </tr>
    </>
  )
}

export default CellSearch

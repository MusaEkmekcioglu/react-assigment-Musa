import React, { useContext, useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import Cell from './Cell'
import { SongContext } from './SongContext'

const MyList = () => {
  const { songs } = useContext(SongContext)
  const [show, setShow] = useState([])

  useEffect(() => {
    const newList = songs.filter((song) => song.checked === true)
    setShow(newList)
  }, [songs])

  return (
    <div>
      <h1>My Play List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Remove from playlist</th>
          </tr>
        </thead>
        <tbody>
          {show.map((data, i) => (
            <Cell key={i} data={data} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default MyList

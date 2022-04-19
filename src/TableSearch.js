import React, { useEffect, useState } from 'react'
import { Table, Form, FormControl } from 'react-bootstrap'

import CellSearch from './CellSearch'

const TableSearch = () => {
  const [song, setSong] = useState([])

  const [showData, setShowData] = useState([])

  const getSong = async (showData) => {
    try {
      await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${showData}&api_key=0b323aba795f3ac625e85352f08e65b1&format=json`
      )
        .then((data) => data.json())
        .then((data) => setSong(data.results.trackmatches.track))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSong(showData)
  }, [showData])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowData(e.target.value)
  }

  return (
    <div>
      <Form className="d-flex my-5">
        <FormControl
          onChange={handleSubmit}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />{' '}
      </Form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Add/Remove from playlist</th>
          </tr>
        </thead>
        <tbody>
          {song.map((a, i) => (
            <CellSearch key={i} data={a} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TableSearch

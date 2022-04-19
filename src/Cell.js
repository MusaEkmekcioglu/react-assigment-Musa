import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { SongContext } from './SongContext'

const Cell = ({ data }) => {
  const { deleteSong } = useContext(SongContext)

  const deleteSongHandle = () => {
    deleteSong(data.checked, data.name, data.title)
    data.checked = false
  }
  return (
    <>
      {data.checked ? (
        <tr>
          <td>{data.name}</td>
          <td>{data.title}</td>
          <td>
            {' '}
            <Button
              onClick={deleteSongHandle}
              style={{ textDecoration: 'none', color: 'black' }}
              variant="link"
            >
              Remove
            </Button>
          </td>
        </tr>
      ) : null}
    </>
  )
}

export default Cell

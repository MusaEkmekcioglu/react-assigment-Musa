import { createContext, useState } from 'react'

export const SongContext = createContext()

const initialState = [
  {
    checked: false,
    songName: '',
    songTitle: '',
  },
]

export const SongProvider = (props) => {
  const [songs, setSongs] = useState(initialState)

  const addSong = (checked, name, title) => {
    const newList = [...songs, { checked, name, title }]
    setSongs(newList)
  }

  const deleteSong = (checked, name, title) => {
    const newList = songs.filter((song) => song.name !== name)
    setSongs(newList)
  }

  return (
    <SongContext.Provider value={{ songs, addSong, deleteSong }}>
      {props.children}
    </SongContext.Provider>
  )
}

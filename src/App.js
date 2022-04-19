import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import MyList from './MyList'
import TableSearch from './TableSearch'

import { SongProvider } from './SongContext'

function App() {
  return (
    <SongProvider>
      <div className="App ">
        <Container>
          <Row>
            <Col>
              <TableSearch />
            </Col>
            <Col>
              {' '}
              <MyList />
            </Col>
          </Row>
        </Container>
      </div>
    </SongProvider>
  )
}

export default App

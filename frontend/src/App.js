import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RobotsList } from './components/RobotsList';
import { Filter } from './components/Filter';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="mb-5 mt-5 text-center">Robot Market</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2}>
            {/* Filter */}
            <Filter />
          </Col>
          <Col xs={12} sm={12} md={12} lg={7}>
             {/* Robots grid design*/}
            <RobotsList />
          </Col>
          <Col xs={12} sm={12} md={12} lg={3}>
            {/* Cart design */}
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

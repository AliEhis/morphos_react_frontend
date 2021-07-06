import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RobotsList } from './components/RobotsList';
import { Filter } from './components/Filter';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <h1>Robot Market</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2}>
            {/* Filter */}
            <Filter />
          </Col>
          <Col xs={12} sm={12} md={12} lg={7}>
            <RobotsList />
          </Col>
          <Col xs={12} sm={12} md={12} lg={3}>
            {/* Cart design */}
            <h5>Cart</h5>
          </Col>
        </Row>
      </Container>
      {/*Add your code here*/}
    </div>
  );
}

export default App;

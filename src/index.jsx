import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ReactDOM.render( 
  <>
      <div id="navpane"></div>

      <Row>

        <Col sm={8} md={8}>
          <div id="carousel-container"></div>
          <div id="reviews"></div>
        </Col>

        <Col sm={4} md={4}>
          <div id="listing"></div>
        </Col>

      </Row>

    </>
  , document.getElementById('regrEtsy'));
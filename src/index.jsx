import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ReactDOM.render( 
  <Container>
      <div id="navpane"></div>

      <div className="proxyCarouselHeader" />
     
      <Row>

        <Col sm={8} md={8}>
        <Container>
          <div id="carousel-container"></div>
        </Container>

          <p />
          <hr className="proxyCarouselFooter"/>
          <p />

          <div id="reviews"></div>
        </Col>

        <Col sm={4} md={4}>
          <div id="listing"></div>
        </Col>

      </Row>

    </Container>
  , document.getElementById('regrEtsy'));
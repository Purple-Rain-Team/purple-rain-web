import React, { Component, useRef } from 'react';
import { Card, Col, Row } from 'antd';
import ReactSwipe from 'react-swipe';

const TestPage = () => {

  const reactSwipeEl = useRef({})

  return (
    <Card>
      <Row gutter={8}>
        <Col span={16}>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ 
              continuous: false 
            }}
            ref={el => (reactSwipeEl.current = el)}
          >
            <div>PANE 1</div>
            <div>PANE 2</div>
            <div>PANE 3</div>
          </ReactSwipe>
          {/* <button onClick={() => reactSwipeEl.current.next()}>Next</button>
          <button onClick={() => reactSwipeEl.current.prev()}>Previous</button> */}
        </Col>
        <Col span={8}>

        </Col>
      </Row>
    </Card>
  )

}
export default TestPage
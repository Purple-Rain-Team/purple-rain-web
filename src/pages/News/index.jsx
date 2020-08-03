import React from 'react';
import { Card, Col, Row } from 'antd';
import Swipe from './components/Swipe';
import styles from './style.less';

/**
 * @author 🌈 Jay Chan
 * @description 资讯父组件
 */
const News = () => {

  return (
    <Card 
      className={styles.mainCard}
      bordered={false}
    >
      <Row gutter={24}>
        <Col span={16}>
          <Swipe />
        </Col>
        <Col span={8}>
          <div style={{ minHeight: 228, backgroundColor: 'red', marginBottom: 24}}>

          </div>
          <div style={{ minHeight: 228, backgroundColor: 'red'}}>

        </div>
        </Col>
      </Row>
    </Card>
  )
}
export default News
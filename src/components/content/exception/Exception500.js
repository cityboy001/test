import React from 'react'
import {Button,Row,Col } from 'antd';
import {Link} from 'react-router-dom'
class A extends React.Component {
    render(){
        return <div style={{paddingTop:30}}>
            <Row >
                <Col style={{textAlign:'center'}} xs={24} sm={12}>
                    <img width='80%' src="https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg" alt="???"/>
                </Col>
                <Col xs={24} sm={12}>
                    <h1 style={{fontSize:'5rem'}}>500</h1>
                    <p style={{fontSize:'2rem'}}>抱歉，服务器出错了</p>
                    <Button type='primary'><Link to="/">返回首页</Link></Button>
                </Col>
            </Row>
        </div>
    }
}
export default A
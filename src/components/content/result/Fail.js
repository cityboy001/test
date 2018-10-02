import React from 'react'
import { Steps, Button,Row,Col,Popover,Divider,Icon } from 'antd';
const Step = Steps.Step;
class A extends React.Component {
    render(){
        const customDot = (dot, { status, index }) => (
            <Popover content={<span>step {index} status: {status}</span>}>
                {dot}
            </Popover>
        );
        return <div>
            <div style={{paddingTop:50}}>
                <div>
                    <div style={{textAlign:'center'}}>
                        <Icon style={{fontSize:80,color:'#f5222d'}} type="close-circle" theme="filled"  />
                        <h2>提交失败</h2>
                        <Row>
                            <Col xs={{offset:3,span:18}}>
                                <p>请核对并修改以下信息后，再重新提交</p>
                                <Divider />
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h4>您提交的内容有如下错误：</h4>
                        <p>
                            <Icon style={{color:'#f5222d'}} type="close-circle" /> &nbsp;&nbsp;您的账户已被冻结 &nbsp;&nbsp;&nbsp;<a href="#">立即冻结<Icon type='right' /></a>
                        </p>
                        <p>
                            <Icon style={{color:'#f5222d'}} type="close-circle" /> &nbsp;&nbsp;您的账户还不具备申请资格 &nbsp;&nbsp;&nbsp;<a href="#">立即升级<Icon type='right' /></a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    }
}
export default A
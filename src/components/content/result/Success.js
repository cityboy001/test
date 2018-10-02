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
                        <Icon style={{fontSize:80}} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                        <h2>操作成功</h2>
                        <Row>
                            <Col xs={{offset:3,span:18}}>
                                <p>提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。</p>
                                <Divider />

                            </Col>
                        </Row>

                    </div>
                    <Steps current={1} progressDot={customDot}>
                        <Step title="创建项目" description={<div>
                            <div>TOM</div>
                            <time>2016-12-12 12:32</time>
                        </div>} />
                        <Step title="部门初审" description={<div>
                            <div>王力宏</div>
                            <time>2016-12-12 12:32</time>
                        </div>} />
                        <Step title="财务复核" description={<div>
                            <div>马云</div>
                        </div>} />
                        <Step title="完成" description={<div>
                            <div>over</div>
                        </div>} />
                    </Steps>
                    <Divider />
                    <div style={{textAlign:'center'}}>
                        <Button type='primary'>返回列表</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button>查看项目</Button>&nbsp;&nbsp;&nbsp;
                        <Button>打印</Button>
                    </div>

                </div>

            </div>
        </div>
    }
}
export default A
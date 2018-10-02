import React from 'react'
import { Steps, Button,Row,Col,Form,Input,Select,Alert,Divider,Icon } from 'antd';
import './stepcss.css'


const Step = Steps.Step;
const FormItem = Form.Item;
const Option = Select.Option;

let getData = {};
class A extends React.Component {
    state = {
        current: 0,
        isloading:''
    };
    setStep=(current)=> {
        this.setState({ current });
    };
    sureToTransfer=()=>{
        this.setState({
            isloading: 'loading'
        });
        setTimeout(()=>{
            this.setState({
                isloading: ''
            });
            this.setStep(2);
        },1000)
    };
    firstSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                getData = values;
                this.setStep(1);
            }
        });
    };
    render(){
        const { current } = this.state;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: 'ali',
        })(
            <Select style={{ width:100 }}>
                <Option value="ali">支付宝</Option>
                <Option value="bank">银行账号</Option>
            </Select>
        );
        return <div>
            <Row>
                <Col xs={24} sm={{span:20,offset:2}} >
                    <Steps current={current} style={{marginBottom:40}}>
                        <Step key='1' title='填写转账信息' />
                        <Step key='2' title='确认转账信息' />
                        <Step key='3' title='完成' />
                    </Steps>
                    <Row>
                        <Col xs={24} sm={{span:18,offset:3}} >
                            {
                                current===0 && <div>
                                    <Form onSubmit={this.firstSubmit}>

                                        <FormItem
                                            label="付款账号"
                                            {...formItemLayout}
                                        >
                                            {
                                                getFieldDecorator('payAccount',{
                                                    initialValue:'xxx@alipay.com'
                                                })(
                                                    <Select>
                                                        <Option value='xxx@alipay.com'>xxx@alipay.com</Option>
                                                    </Select>
                                                )
                                            }
                                        </FormItem>
                                        <FormItem
                                            label="收款账号"
                                            {...formItemLayout}
                                        >
                                            {getFieldDecorator('receiveAccount', {
                                                initialValue:'13xxxxxxxxx',
                                                rules: [{ required: true, message: 'Please input the receive account' }],
                                            })(
                                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="收款人姓名"
                                            {...formItemLayout}
                                        >
                                            {getFieldDecorator('receiveName', {
                                                initialValue:'王某人',
                                                rules: [{ required: true, message: "Please input the receive People's name" }],
                                            })(
                                                <Input style={{ width: '100%' }} />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            label="金额"
                                            {...formItemLayout}
                                        >
                                            {getFieldDecorator('num', {initialValue:300,
                                                rules: [{ required: true,  message: "Please input num value" }],
                                            })(
                                                <Input prefix={<span>￥</span>} style={{ width: '100%' }} />
                                            )}
                                        </FormItem>
                                        <FormItem {...tailFormItemLayout}>
                                            <Button  type="primary" htmlType="submit" >下一步</Button>
                                        </FormItem>

                                    </Form>
                                </div>
                            }
                            {
                                current===1 && <div>
                                    <Alert style={{marginBottom:24}} message="转账一旦完成无法撤销" type="warning" showIcon />
                                    <div className="ant-row ant-label-bold ">
                                        <FormItem {...formItemLayout} label='付款账户'>{getData.payAccount}</FormItem>
                                        <FormItem {...formItemLayout} label='收款账户'>{getData.receiveAccount}</FormItem>
                                        <FormItem {...formItemLayout} label='收款人姓名'>{getData.receiveName}</FormItem>
                                        <FormItem {...formItemLayout} label='金额'>{getData.num}(人民被)</FormItem>
                                        <Divider />
                                        <FormItem {...tailFormItemLayout}>
                                            <Button icon={this.state.isloading} onClick={this.sureToTransfer} type='primary' >提交</Button>
                                            &nbsp;&nbsp;&nbsp;
                                            <Button  onClick={()=>{this.setStep(0)}}  >上一步</Button>
                                        </FormItem>
                                    </div>
                                </div>
                            }
                            {
                                current===2 && <div>
                                    <div style={{textAlign:'center'}}>
                                        <Icon style={{fontSize:80}} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                                        <h2>操作成功</h2>
                                    </div>
                                    <div className="ant-row ant-label-bold ">
                                        <FormItem {...formItemLayout} label='付款账户'>{getData.payAccount}</FormItem>
                                        <FormItem {...formItemLayout} label='收款账户'>{getData.receiveAccount}</FormItem>
                                        <FormItem {...formItemLayout} label='收款人姓名'>{getData.receiveName}</FormItem>
                                        <FormItem {...formItemLayout} label='金额'>{getData.num}(人民被)</FormItem>
                                        <Divider></Divider>
                                        <FormItem {...tailFormItemLayout}>
                                            <Button  onClick={()=>{ this.setStep(0); }} type='primary' >再转一笔</Button>
                                            &nbsp;&nbsp;&nbsp;
                                            <Button   >查看账单</Button>
                                        </FormItem>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    }
}
const wrapperedA = Form.create()(A);
export default wrapperedA
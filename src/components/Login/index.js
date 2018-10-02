import React from 'react'
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';
import './login_css.css'
const FormItem = Form.Item;
class Login extends React.Component {
    componentDidAmount() {
        localStorage.removeItem('logined');
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { history } = this.props;
                localStorage.setItem('logined','true');
                localStorage.setItem('userName',values.userName);
                localStorage.setItem('password',values.password);
                history.push('/dashboard/Analysis');
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center" className={'container'} align="middle">
                <Col xs={{span:18}} sm={{span:10}} md={{span:8}} lg={{span:6}}>
                    <div className={'login-container'}>
                        <Form layout="horizontal" onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <br/>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <br/>
                                <a href="">Or register now</a>
                            </FormItem>
                        </Form>
                    </div>
                </Col>
            </Row>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm
import React from 'react'
import {
    message,
    Button,
    Row,
    Col,
    Form,
    Input,
    Select,
    DatePicker,
    Table,
    Divider,
    Modal,
    InputNumber,
    Alert
} from 'antd';
import './tableList.css'

const FormItem = Form.Item;
const Option = Select.Option;
// const RangePicker = DatePicker.RangePicker;

let tableData = [
    {
        name: 'Json',
        id: '1',
        department: '销售部'
    },
    {
        name: 'Pson',
        id: '2',
        department: '软件部'
    },
    {
        name: 'Ason',
        id: '3',
        department: '外贸部'
    },
    {
        name: 'Kson',
        id: '4',
        department: '什么什么部'
    },

];

class A extends React.Component {
    state = {
        columns: [
            {
                title: '成员姓名',
                key: 'name',
                dataIndex: 'name',
                filters:[
                    {
                        text: '是否含有 0 ',
                        value: '0',
                    },
                    {
                        text: '是否含有 J ',
                        value: 'J',
                    },
                    {
                        text: '是否含有 P ',
                        value: 'P',
                    },
                    {
                        text: '是否含有 A ',
                        value: 'A',
                    },

                ],
                filterMultiple: false,
                onFilter:(value,record)=> record.name.indexOf(value) !== -1
            },
            {
                title: '工号',
                key: 'id',
                dataIndex: 'id',
                sorter: (a, b) => a.id - b.id
            },
            {
                title: '所属部门',
                key: 'department',
                dataIndex: 'department',
                render: (t, t2) => {
                    const index = tableData.indexOf(t2);
                    return t2.isEditing ? (<Input ref={(input) => {
                        this['input_row_' + index] = input
                    }} value={t} onChange={(event) => {
                        this.handleDataChange(t2, 'department', event.target.value)
                    }}/>) : (t)
                }
            },
            {
                title: '操作',
                key: 'action',
                render: (record) => {

                    return <span>
                            <a onClick={() => {
                                this.handleEdit(record)
                            }}>编辑</a>
                            <Divider type='vertical'/>
                            <a>操作2</a>
                        </span>
                }
            }
        ],
        selectedNum: 0,
        visible: false,
    };
    index = 5;

    handleEdit = (record) => {
        this.props.form.setFieldsValue({
            'modal-name': record.name,
            'modal-id': record.id,
            'modal-department': record.department
        });
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
        this.index--;
    };
    addItem = () => {
        this.props.form.setFieldsValue({
            'modal-name': 'name:' + Date.now().toLocaleString(),
            'modal-id': this.index++,
            'modal-department': Math.random().toFixed(5)
        });
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.props.form.validateFields(['modal-name', 'modal-id', 'modal-department'], (err, values) => {
            if (!err) {
                tableData.unshift({
                    name: values['modal-name'],
                    id: values['modal-id'],
                    department: values['modal-department'],
                });
                this.setState({
                    visible: false,
                });
            }
        })
    };
    query = () => {
        message.info('还没有实现改功能');
    };

    render() {
        const {getFieldDecorator, resetFields} = this.props.form;
        return <div className='antd-table-list-container'>
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form>
                    <FormItem label='名字' labelCol={{span: 8}} wrapperCol={{span: 12}}>
                        {
                            getFieldDecorator('modal-name', {
                                relus: [{required: true}]
                            })(<Input/>)
                        }
                    </FormItem>
                    <FormItem label='工号' labelCol={{span: 8}} wrapperCol={{span: 12}}>
                        {
                            getFieldDecorator('modal-id', {
                                relus: [{required: true}]
                            })(<Input disabled/>)
                        }
                    </FormItem>
                    <FormItem label='部门' labelCol={{span: 8}} wrapperCol={{span: 12}}>
                        {
                            getFieldDecorator('modal-department', {
                                relus: [{required: true}]
                            })(<Input/>)
                        }
                    </FormItem>
                </Form>
            </Modal>
            <div className='antd-table-list-wrapper'>
                <h1>查询表格</h1>
            </div>
            <div style={{margin: '20px 16px 16px', padding: 16, background: 'white'}}>
                <Form layout='inline'>
                    <Row gutter={12} style={{marginBottom: 20}}>
                        <Col xs={24} md={8}>
                            <FormItem label='规则名称'>
                                {
                                    getFieldDecorator('ruleName', {rules: [{required: true}]})(<Input/>)
                                }
                            </FormItem>
                        </Col>
                        <Col xs={24} md={8}>
                            <FormItem label='使用状态'>
                                {
                                    getFieldDecorator('status', {initialValue: '1', rules: [{required: true}]})(
                                        <Select>
                                            <Option value='1'>open</Option>
                                            <Option value='2'>close</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col xs={24} md={8}>
                            <FormItem label='调用次数'>
                                {
                                    getFieldDecorator('num', {initialValue: 2, rules: [{required: true}]})(
                                        <InputNumber/>
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={12} style={{marginBottom: 40}}>
                        <Col xs={24} md={8}>
                            <FormItem label='调用日期'>
                                {
                                    getFieldDecorator('date', {rules: [{required: true}]})(
                                        <DatePicker/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col xs={24} md={8}>
                            <div>
                                <Button style={{marginLeft: 79}} onClick={this.query} type='primary'>查询</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button onClick={resetFields}>重置</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
                <Alert style={{marginBottom: 10}} type='info'
                       message={<span>已经选择 <a>{this.state.selectedNum} </a>项</span>} showIcon></Alert>
                <Button style={{marginBottom: 10}} onClick={this.addItem}>新增</Button>
                <Table rowKey={'id'} columns={this.state.columns} dataSource={tableData} pagination={false}/>
            </div>
        </div>
    }
}

const wrapperedA = Form.create()(A);
export default wrapperedA
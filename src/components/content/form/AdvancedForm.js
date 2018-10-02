import React from 'react'
import { Card, Button,Row,Col,Form,Input,Select,DatePicker,Table,Divider } from 'antd';
import './advance.css'

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
let tableData = [
    {
        name:'Json',
        id:'001',
        department:'销售部'
    },
    {
        name:'Pson',
        id:'002',
        department:'软件部'
    },
    {
        name:'Ason',
        id:'003',
        department:'外贸部'
    },
    {
        name:'Kson',
        id:'004',
        department:'什么什么部'
    },

];
class A extends React.Component {
    state={
        columns:[
            {
                title:'成员姓名',
                key:'name',
                dataIndex:'name',
                render:(t,t2)=>{
                    const index = tableData.indexOf(t2);
                    return t2.isEditing?(<Input ref={(input)=>{this['input_row_'+index] = input}} value={t} onChange={(event)=>{this.handleDataChange(t2,'name',event.target.value)}}/>):(t)
                }
            },
            {
                title:'工号',
                key:'id',
                dataIndex:'id',
            },
            {
                title:'所属部门',
                key:'department',
                dataIndex:'department',
                render:(t,t2)=>{
                    const index = tableData.indexOf(t2);
                    return t2.isEditing?(<Input ref={(input)=>{this['input_row_'+index] = input}} value={t} onChange={(event)=>{this.handleDataChange(t2,'department',event.target.value)}}/>):(t)
                }
            },
            {
                title:'操作',
                key:'action',
                render:(record)=>{

                    return record.isEditing?
                        <span>
                            <a href="####" onClick={()=>{this.handleSaveEdit(record)}}>保存</a>
                            <Divider type='vertical' />
                            <a href="####" onClick={()=>{this.handleCancelEdit(record)}}>取消</a>
                        </span>
                        :<span>
                            <a href="####" onClick={()=>{this.handleClickEdit(record)}}>编辑</a>
                            <Divider type='vertical' />
                            <a href="####" onClick={()=>{this.handleClickDelete(record)}}>删除</a>
                        </span>
                }
            }
        ]
    };
    handleClickEdit=(record)=>{
        record.isEditing = true;
        this.forceUpdate();
    };
    handleSaveEdit=(record)=>{
        delete record.isEditing;
        this.forceUpdate();
    };
    handleCancelEdit=(record)=>{
        delete record.isEditing;
        this.forceUpdate();
    };
    handleDataChange(record,key,value){
        record[key] = value;
        this.forceUpdate();
    }
    handleClickDelete=(record)=>{
        const index = tableData.indexOf(record);
        tableData.splice(index,1);
        this.forceUpdate();
    };
    index = 5;
    addItem=()=>{
        tableData.push({
            name: 'name is '+Date.now().toLocaleString(),
            id:`00${this.index}`,
            department:'销售部'
        });
        this.index++;
        this.forceUpdate();
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return <div className='antd-advance-container'>
            <div className='antd-advance-wrapper'>
                <h1>高级表单</h1>
                <p>高级表单常见于一次性输入和提交大批量数据的场景。</p>
            </div>
            <div className='antd-advance-form-wrapper' >

                    <Card title='仓库管理'>
                        <Form layout='vertical'>
                            <Row>
                                <Col  sm={24} md={6} >
                                    <FormItem label="仓库名">
                                        {getFieldDecorator('potName', {
                                            rules: [{required: true,
                                                type: 'email', message: 'Please input pot name!',
                                            }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col sm={24} md={{span:6,offset:3}} >
                                    <FormItem label="仓库域名">
                                        {getFieldDecorator('potcom', {
                                            rules: [{required: true,
                                                type: 'email', message: 'Please input 仓库域名!',
                                            }],
                                        })(
                                            <Input addonBefore='http://' addonAfter='.com'/>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col sm={24} md={{span:6,offset:3}} >
                                    <FormItem label="仓库管理员">
                                        {getFieldDecorator('potName', {
                                            initialValue:'xxx'
                                        })(
                                            <Select>
                                                <Option value='xxx'>王老师</Option>
                                                <Option value='xxx2'>王教授</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col  sm={24} md={6} >
                                    <FormItem label="审批人">
                                        {getFieldDecorator('heiheiname', {

                                            rules: [{required: true,
                                            }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col sm={24} md={{span:6,offset:3}} >
                                    <FormItem label="生效日期">
                                        {getFieldDecorator('date', {
                                            rules: [{required: true,
                                            }],
                                        })(
                                            <RangePicker />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col sm={24} md={{span:6,offset:3}} >
                                    <FormItem label="仓库类型">
                                        {getFieldDecorator('type', {
                                            initialValue:'xxx1',
                                            rules: [{required: true,
                                            }],
                                        })(
                                            <Select>
                                                <Option value='xxx1'>私密</Option>
                                                <Option value='xxx4'>公开</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
            </div>
            <div style={{background:'white'}} className="antd-advance-form-wrapper">
                <Table  pagination={false} rowKey={'id'} dataSource={tableData} columns={this.state.columns} />
                <Button  onClick={this.addItem} style={{width:'100%',marginTop:20}} type="dashed">add +</Button>
            </div>
        </div>
    }
}
const wrapperedA = Form.create()(A);
export default wrapperedA
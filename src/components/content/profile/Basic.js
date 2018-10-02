import React from 'react'
import {
    Row,
    Col,
    Table,
    Divider
} from 'antd';
const dataSource = [
    {
        id:'0x000121',
        name:'矿泉水 550ml',
        price: '1.00',
        num: 52
    },
    {
        id:'0x584554',
        name:'卫龙',
        price: '2.00',
        num: 26
    },
    {
        id:'0x00fasfdas',
        name:'飞旺',
        price: '0.50',
        num: 62
    },
    {
        id:'0x00fffsfas',
        name:'航空飞机',
        price: '5000000000',
        num: 1
    },
];
const dataSource2 = [
    {
        id:'2018-10-1',
        name:'联系客户',
        price: '01',
        num: 1,
        status:'进行中'
    },
    {
        id:'2018-10-2',
        name:'取货员出发',
        price: '02',
        num: 1,
        status:'完成'
    },
    {
        id:'2018-10-3',
        name:'取货员接单',
        price: '03',
        num: 1,
        status:'进行中'
    },
    {
        id:'2018-10-4',
        name:'申请审批通过',
        price: '04',
        num: 1,
        status:'over'
    },
];
class A extends React.Component {
    state={
        columns:[
            {
                title: '商品编号',
                key: 'id',
                dataIndex:'id',
                render:(t,t2)=>(<a href="#">{t}</a>)
            },
            {
                title:'商品名称',
                key:'name',
                dataIndex:'name',
            },
            {
                title:'单价',
                key:'price',
                dataIndex:'price',
            },
            {
                title:'数量（件）',
                key:'num',
                dataIndex:'num'
            },
            {
                title:'总价',
                render:(record)=>{
                    return Number(record.price) * record.num
                }
            }
        ],
        columns2:[
            {
                title: '时间',
                key: 'id',
                dataIndex:'id'
            },
            {
                title:'当前进度',
                key:'name',
                dataIndex:'name',
            },
            {
                title:'操作员ID',
                key:'price',
                dataIndex:'price',
            },
            {
                title:'数量（件）',
                key:'num',
                dataIndex:'num'
            },
            {
                title:'状态',
                key:'status',
                dataIndex:'status'
            }
        ]
    };
    render(){
        return <div className='antd-content-container'>
            <div className="antd-content-wrapper">
                <h1>基础详情页</h1>
            </div>
            <div style={{padding: '20px 16px 16px'}} >
                <div  style={{backgroundColor: 'white',padding:16}} >
                    <div>
                        <h3>退款申请</h3>
                        <Row>
                            <Col md={8} xs={12}>
                                <p>取货单号：0x5s4r1f5ds564</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>状态：已取货</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>销售单号：jikjikjikjikjikj</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>子订单 ：	3214321432</p>
                            </Col>
                        </Row>
                        <Divider type="horizontal" />
                    </div>
                    <div>
                        <h3>用户信息</h3>
                        <Row>
                            <Col md={8} xs={12}>
                                <p>用户姓名：付小小</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>联系电话：110</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>常用快递：	菜鸟仓储</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>取货地址：杭州</p>
                            </Col>
                            <Col md={8} xs={12}>
                                <p>备注：没有</p>
                            </Col>
                        </Row>
                        <Divider type="horizontal" />
                    </div>
                    <div >
                        <h3>用户信息</h3>
                        <Table rowKey='id' pagination={false} dataSource={dataSource} columns={this.state.columns} />
                        <Divider type='horizontal' />
                    </div>
                    <div >
                        <h3>退货进度</h3>
                        <Table rowKey='id' pagination={false} dataSource={dataSource2} columns={this.state.columns2} />
                    </div>
                </div>

            </div>
        </div>
    }
}
export default A
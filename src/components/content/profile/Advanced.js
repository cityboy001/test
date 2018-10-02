import React from 'react'
import {
    Row,
    Col,
    Card,
    Popover,
    Button,
    Dropdown,
    Menu,
    Tabs,
    Steps,
    Divider
} from 'antd';

const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const dataSource = [
    {
        id: '0x000121',
        name: '矿泉水 550ml',
        price: '1.00',
        num: 52
    },
    {
        id: '0x584554',
        name: '卫龙',
        price: '2.00',
        num: 26
    },
    {
        id: '0x00fasfdas',
        name: '飞旺',
        price: '0.50',
        num: 62
    },
    {
        id: '0x00fffsfas',
        name: '航空飞机',
        price: '5000000000',
        num: 1
    },
];
const dataSource2 = [
    {
        id: '2018-10-1',
        name: '联系客户',
        price: '01',
        num: 1,
        status: '进行中'
    },
    {
        id: '2018-10-2',
        name: '取货员出发',
        price: '02',
        num: 1,
        status: '完成'
    },
    {
        id: '2018-10-3',
        name: '取货员接单',
        price: '03',
        num: 1,
        status: '进行中'
    },
    {
        id: '2018-10-4',
        name: '申请审批通过',
        price: '04',
        num: 1,
        status: 'over'
    },
];

class A extends React.Component {
    state = {
        columns: [
            {
                title: '商品编号',
                key: 'id',
                dataIndex: 'id',
                render: (t, t2) => (<a href="#">{t}</a>)
            },
            {
                title: '商品名称',
                key: 'name',
                dataIndex: 'name',
            },
            {
                title: '单价',
                key: 'price',
                dataIndex: 'price',
            },
            {
                title: '数量（件）',
                key: 'num',
                dataIndex: 'num'
            },
            {
                title: '总价',
                render: (record) => {
                    return Number(record.price) * record.num
                }
            }
        ],
        columns2: [
            {
                title: '时间',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '当前进度',
                key: 'name',
                dataIndex: 'name',
            },
            {
                title: '操作员ID',
                key: 'price',
                dataIndex: 'price',
            },
            {
                title: '数量（件）',
                key: 'num',
                dataIndex: 'num'
            },
            {
                title: '状态',
                key: 'status',
                dataIndex: 'status'
            }
        ]
    };

    render() {
        const customDot = (dot, {status, index}) => (
            <Popover content={<span>step {index} status: {status}</span>}>
                {dot}456
            </Popover>
        );
        const menu = (
            <Menu>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return <div className='antd-content-container'>
            <div className="antd-content-wrapper">
                <div style={{backgroundColor: 'white', padding: 16}}>
                    <Row>
                        <Col md={18}>
                            <h1>高级详情页</h1>
                            <Row>
                                <Col md={12} xs={24}>
                                    <p><b>创建人：</b> 曲丽丽</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>订购产品 ：</b>XX 服务</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>创建时间：</b> 2017-07-07</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>关联单据：</b> 12421</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>生效日期：</b> 2017-07-07 ~ 2017-08-08</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>备注：</b> 请于两个工作日内确认</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Button.Group>
                                <Button>操作</Button>
                                <Button>操作</Button>
                                <Dropdown overlay={menu}>
                                    <Button icon='ellipsis'/>
                                </Dropdown>

                            </Button.Group>
                            &nbsp;
                            <Button type='primary'>主操作</Button>
                            <Divider/>
                            <p><b>状态：</b> 进行中 </p>
                            <p><b>待审批：</b> ¥ 568.08</p>
                        </Col>

                    </Row>
                    <div>
                        <Tabs tabPosition='left'>
                            <TabPane tab="详情" key="1">详情是这样的...</TabPane>
                            <TabPane tab="规则" key="2">规则是那样的...</TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div style={{padding: '20px 16px 16px'}}>
                <div style={{background: 'white'}}>
                    <Card title='流程进度'>
                        <Steps current={1} progressDot={customDot}>
                            <Step progressDot current={1} title={'创建项目'} description={<div>
                                <div>TOM</div>
                                <time>2016-12-12 12:32</time>
                            </div>}/>
                            <Step progressDot current={1} title={'部门初审'} description={<div>
                                <div>王力宏</div>
                                <time>2016-12-15 12:32</time>
                            </div>}/>
                            <Step progressDot current={1} title={'财务复核'} description={<div>
                                <div>马云</div>
                            </div>}/>
                            <Step progressDot current={1} title={'完成'} description={<div>
                                <div>over</div>
                            </div>}/>
                        </Steps>
                    </Card>
                </div>
            </div>
            <div style={{padding: '20px 16px 16px', background: 'white'}}>
                <Card title='用户信息'>
                    <h1>高级详情页</h1>
                    <Row>
                        <Col md={12} xs={24}>
                            <p><b>用户姓名：</b> 曲丽丽</p>
                        </Col>
                        <Col md={12} xs={24}>
                            <p><b>会员卡号 ：</b>43898021309809423</p>
                        </Col>
                        <Col md={12} xs={24}>
                            <p><b>身份证：</b> 3321944288191034921</p>
                        </Col>
                        <Col md={12} xs={24}>
                            <p><b>联系方式：</b> 8112345678</p>
                        </Col>
                        <Col md={12} xs={24}>
                            <p><b>联系地址：</b> 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</p>
                        </Col>
                    </Row>
                    <h4>信息组</h4>
                    <Card title='多层级信息组'>
                        <div>
                            <h5>组名称</h5>
                            <Row>
                                <Col md={12} xs={24}>
                                    <p><b>负责人：</b> 高圆圆</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>角色码 ：</b> 1234567</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>所属部门：</b> XX公司 - YY部</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>过期时间：</b> 2017-08-08</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>描述：</b>这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... 曲丽丽 18100000000
                                        浙江省杭州市西湖区黄姑山路工专路交叉路口</p>
                                </Col>
                            </Row>
                            <Divider type='horizontal'/>
                        </div>
                        <div>
                            <h5>组名称</h5>
                            <Row>
                                <Col md={12} xs={24}>
                                    <p><b>学名：</b> Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
                                    </p>
                                </Col>

                            </Row>
                            <Divider type='horizontal'/>
                        </div>
                        <div>
                            <h5>组名称</h5>
                            <Row>
                                <Col md={12} xs={24}>
                                    <p><b>负责人：</b>我母鸡啊</p>
                                </Col>
                                <Col md={12} xs={24}>
                                    <p><b>角色码：</b>kkbobo</p>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    }
}

export default A
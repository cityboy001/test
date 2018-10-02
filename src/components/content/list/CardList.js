import React from 'react'
import {
    Icon,
    Card,
    Button,
    Row,
    Col,
    Form,
    Avatar
} from 'antd';
import './tableList.css'
import './cardlist.css'
const { Meta } = Card;

const data = [
    {
        title: 'Ali',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        des: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    },
    {
        title:'Safiri',
        avatar: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=11578103,2709364078&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2386426253,3673879670&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512252378,4083134293&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512252378,4083134293&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=11578103,2709364078&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2386426253,3673879670&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512252378,4083134293&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512252378,4083134293&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=11578103,2709364078&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2386426253,3673879670&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512252378,4083134293&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    },
    {
        title:'Safiri',
        avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1512252378,4083134293&fm=58',
        des:'Safari 浏览器速度快,能效高。它的众多创新功能,可为你带来精彩连连的网页浏览体验。... 现在,当你浏览网页时,Safari 浏览器可阻止那些突然出现的、或者你不喜欢的...'
    }
];
class A extends React.Component {
    state = {
        visible: false,
    };
    render() {
        return <div className='antd-table-list-container antd-card-list-container'>

            <div className='antd-table-list-wrapper'>
                <Row>
                    <Col sm={20} xs={24} >
                        <h1>卡片列表</h1>
                        <p>段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。<br/><br/><br/></p>
                        <p>
                            <Icon type="heat-map" style={{color:'purple',fontSize:20}} />&nbsp;&nbsp;
                            <a href="#">快速开始</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Icon type="laptop" style={{color:'purple',fontSize:20}} />&nbsp;&nbsp;
                            <a href="#">产品简介</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Icon type="paper-clip" style={{color:'purple',fontSize:20}} />&nbsp;&nbsp;
                            <a href="#">产品文档</a>
                            &nbsp;
                        </p>
                    </Col>
                    <Col sm={4} xs={24}>
                        <img width='100%' src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" alt="..."/>
                    </Col>
                </Row>
            </div>
            <Row gutter={16} style={{padding: '20px 16px 16px'}}>
                <Col sm={24} xs={24} md={8}>
                    <Button type='dashed' className='antd-card-list-item' >
                        <Icon type="plus" theme="outlined" />
                        新增产品
                    </Button>
                </Col>
                {
                    data.map((item,index)=>(
                        <Col style={{marginBottom:15}} key={index} sm={24} xs={24} md={8}>
                            <Card actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Meta
                                    avatar={<Avatar size={48} src={item.avatar} />}
                                    title={<a href="#">{item.title}</a>}
                                    description={<div style={{WebkitBoxOrient:'vertical'}} className='antd-card-list-item-content'>{item.des}</div>}
                                />
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    }
}

const wrapperedA = Form.create()(A);
export default wrapperedA
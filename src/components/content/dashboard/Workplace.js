import React from 'react'
import {Row, Col, Avatar, Card,Button,Tag,List} from 'antd';
import echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import './workplace.css'
import {macarons} from "./theme";
echarts.registerTheme('macarons', macarons);
class A extends React.Component {
    state={
        userName: localStorage.getItem('userName'),
        data:[
            {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                title:'Alipay',
                detail: '那是一种内在的东西，他们到达不了，也无法触及的',
                time: 'an hour ago',
                des:'没病吧你',
            },
            {
                src: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a08b87d6277f9e2f4fa7ea291230e924b899f305.jpg',
                title:'Douyu',
                detail: '打野出门，至今未归',
                time: 'six hour ago',
                des:'估计是回不来了',
            },
            {
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=642710517,1633352972&fm=26&gp=0.jpg',
                title:'Angular',
                detail: '项目暂未开始',
                time: 'in 2 monthes',
                des:'快快快',
            },
            {
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=642710517,1633352972&fm=26&gp=0.jpg',
                title:'Angular',
                detail: '项目暂未开始',
                time: 'in 2 monthes',
                des:'快快快',
            },
            {
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=642710517,1633352972&fm=26&gp=0.jpg',
                title:'Angular',
                detail: '项目暂未开始',
                time: 'in 2 monthes',
                des:'快快快',
            },
        ],
        option1:{

            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '销售（sales）', max: 6500},
                    { name: '管理（Administration）', max: 16000},
                    { name: '信息技术（Information Techology）', max: 30000},
                    { name: '客服（Customer Support）', max: 38000},
                    { name: '研发（Development）', max: 52000},
                    { name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : '预算分配（Allocated Budget）'
                    },
                    {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : '实际开销（Actual Spending）'
                    }
                ]
            }]
        },
        sourceData:[
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ],
    };
    render(){
        return (
            <div style={{margin:'-24px -40px -24px',    backgroundColor: 'rgb(240, 242, 245)'}}>
                <Row style={{backgroundColor:'white',padding: '10px 0 0 10px'}}>
                    <Col xs={24} sm={16} >
                        <div style={{display:'flex',alignItems:'center'}}>
                            <Avatar size={160} src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'/>
                            <div style={{verticalAlign:'middle',marginLeft:'20px'}}>
                                <h4 style={{fontSize:20}}>欢迎回来，{ this.state.userName }，祝你开心每一天！</h4>
                                <p>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</p>
                            </div>
                        </div>

                    </Col>
                    <Col xs={24} sm={8}>
                        <h5 className='work-place-title'>项目数：</h5>
                        <p>56</p>
                    </Col>
                    <Col xs={24} sm={8}>
                        <h5 className='work-place-title'>项目访问：</h5>
                        <p>2,223</p>
                    </Col>

                </Row>
                <Row style={{paddingTop:20,marginLeft:20,marginRight:20}} gutter={16}>
                    <Col xs={16}>
                        <Card title='进行中的项目'
                              extra={<a href="####">more</a>}
                              bodyStyle={{padding:0}}
                              style={{marginBottom:16}}
                        >
                         <div className='workplace-ant-grid-container'>
                             {
                                 this.state.data.map((item,index)=>(
                                     <div className="item" key={index} >
                                         <Avatar size='small' src={item.src} />
                                         <a href="#####" style={{marginLeft:10}}>{item.title}</a>
                                         <div className='workplace-ant-grid-container-detail'>
                                             {item.detail}

                                         </div>
                                         <div className="antd-pro-pages-dashboard-workplace-projectItemContent">
                                             <a href="####">{item.des}</a>
                                             <span className="antd-pro-pages-dashboard-workplace-datetime">
                                                 {item.time}
                                            </span>
                                         </div>
                                     </div>
                                 ))
                             }



                         </div>
                        </Card>
                        <Card title={'来自...的问题'}>
                            <List
                                  size="large"
                                  dataSource={this.state.sourceData}
                                  renderItem={item => (<List.Item>
                                      <Avatar src='https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3463497491,2076913186&fm=58' />
                                       <span style={{verticalAlign:'middle',marginLeft:10}}>{ item}</span>
                                  </List.Item>)}
                            />
                        </Card>

                    </Col>
                    <Col xs={8}>
                        <Card title='操作s'
                              className='has-tag'
                              style={{marginBottom:16}}
                        >
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="orange">orange</Tag>
                            <Tag color="gold">gold</Tag>
                            <Tag color="lime">lime</Tag>
                            <Tag color="green">green</Tag>
                            <Tag color="cyan">cyan</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="geekblue">geekblue</Tag>
                            <Tag color="purple">purple</Tag>
                            <Tag color="#f50">#f50</Tag>
                            <Button size='small' icon={'plus'}>添加</Button>
                        </Card>
                        <Card title='指数'>
                            <ReactEcharts
                                option={this.state.option1}
                                theme='macarons'
                            />
                        </Card>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default A
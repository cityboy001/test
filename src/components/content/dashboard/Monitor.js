import React from 'react'
import {Row,Col,Card } from 'antd';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
import {macarons} from "./theme";

const dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false}
    }
};
const placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
const option3 = {
    title: {
        text: '你幸福吗？',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 35,
            fontWeight : 'bolder'
        }
    },
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',

        y : 45,
        itemGap:12,
        data:['68%的人表示过的不错','29%的人表示生活压力很大','3%的人表示“我姓曾”']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'1',
            type:'pie',
            clockWise:false,
            radius : [125, 150],
            itemStyle : dataStyle,
            data:[
                {
                    value:68,
                    name:'68%的人表示过的不错'
                },
                {
                    value:32,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'2',
            type:'pie',
            clockWise:false,
            radius : [100, 125],
            itemStyle : dataStyle,
            data:[
                {
                    value:29,
                    name:'29%的人表示生活压力很大'
                },
                {
                    value:71,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'3',
            type:'pie',
            clockWise:false,
            radius : [75, 100],
            itemStyle : dataStyle,
            data:[
                {
                    value:3,
                    name:'3%的人表示“我姓曾”'
                },
                {
                    value:97,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
    ]
};

echarts.registerTheme('macarons', macarons);
class A extends React.Component {
    state={
        option1:{
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : false,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius : [0, 70],

                    // for funnel
                    x: '20%',
                    width: '40%',
                    funnelAlign: 'right',
                    max: 1548,

                    itemStyle : {
                        normal : {
                            label : {
                                position : 'inner'
                            },
                            labelLine : {
                                show : false
                            }
                        }
                    },
                    data:[
                        {value:335, name:'直达'},
                        {value:679, name:'营销广告'},
                        {value:1548, name:'搜索引擎', selected:true}
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius : [100, 140],

                    // for funnel
                    x: '60%',
                    width: '35%',
                    funnelAlign: 'left',
                    max: 1048,

                    data:[
                        {value:335, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1048, name:'百度'},
                        {value:251, name:'谷歌'},
                        {value:147, name:'必应'},
                        {value:102, name:'其他'}
                    ]
                }
            ]
        } ,
        option2:{
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'center',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : ['50%', '70%'],
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '30',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        },
        option3,

        theme:'macarons'
    };

    componentDidMount(){

    };
    render(){
        return <div>
            <Row gutter={24}>
                <Col xs={24} sm={18}>
                    <Card title="各类访问来源" >
                        <ReactEcharts
                            option={this.state.option1}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={this.state.theme}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card title="搜索引擎" >
                        <ReactEcharts
                            option={this.state.option2}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={this.state.theme}
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col xs={24} >
                    <Card title="你幸福吗" >
                        <ReactEcharts
                            option={this.state.option3}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={this.state.theme}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    }
}
export default A
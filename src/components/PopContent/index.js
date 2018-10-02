import React from 'react'
import { Tabs, Avatar,List,Button,Tag } from 'antd';
import './pop.css'
const TabPane = Tabs.TabPane;
const NoDataContent = function (props) {
    let {msgType} = props;
    return <div style={{height:'150px',display:'flex',textAlign:'center',alignContent:'center',alignItems:'center'}}>
        <img alt='' style={{verticalAlign:'middle'}} src="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"/>
        <span style={{verticalAlign:'middle'}}>您已经查看所有{ msgType }</span>
    </div>
}
class PopContent extends React.Component {
    state={
        inFormDataSource : [
            {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                title: '6年前的DNF',
                content: '您有一把魔剑阿波菲斯未领取'
            },
            {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                title: '来自未来',
                content: '关于未来的事，你敢看吗'
            },
            {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                title: '英雄联盟皮肤领取',
                content: '海克斯科技---狗熊'
            }
        ],
        messageDataSource: [
            {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '网友bui赞了一下您的评论',
                content: '上次那个货还真好，好想再来一次'
            },
            {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '网友bui回复了一下您的评论',
                content: '其实也没那么好'
            },
        ],
        todoListDataSource:[
            {
                status:'已经用时很多天了',
                title:'代码改动需求',
                content:'任务在2018年2月1号开始',
                color: 'red'
            },{
                status:'刚刚',
                title:'你妈妈来了',
                content:'你妈妈跟你拿了两瓶旺仔牛奶,在大厅等你',
                color: 'blue'
            },{
                status:'2小时前',
                title:'女朋友说',
                content:'下个情人节，你可要准备好礼物',
                color: '#2f54eb'
            },{
                status:'已完成',
                title:'15号项目',
                content:'早就再14号已经做完了，还旅游一天',
                color: 'green'
            },
        ],
        length:0,
    }
    clearDataSource=(str)=>{

        this.setState(state=>{
            return {
                [str]:[]
            }
        });
        let l = this.state.length-this.state[str].length;
        this.setState({
            length: l
        });
        this.props.changeInfoNum(l);

    }
    componentDidMount(){
        let {inFormDataSource, messageDataSource, todoListDataSource} = this.state;
        let l = inFormDataSource.length+messageDataSource.length+todoListDataSource.length;
        this.setState({
            length: l
        });
        this.props.changeInfoNum(l);
    }
    render(){
        return (
            <Tabs style={{width:'350px'}} defaultActiveKey="1">
                <TabPane tab={'通知('+this.state.inFormDataSource.length+')'} key={1}>

                    <List dataSource={this.state.inFormDataSource}
                          renderItem={(item,index)=>(
                        <List.Item className={'list-item'}>
                            <Avatar style={{ verticalAlign:'middle' }} src={item.src} />
                            <div style={{marginLeft: 15}} className={'ant-list-item-meta-content'}>
                                <h4>{item.title}</h4>
                                <div className="ant-list-item-meta-description">
                                    {item.content}
                                </div>
                            </div>
                        </List.Item>
                    )}
                          locale={{emptyText:<NoDataContent msgType="通知" />    }}
                    />
                    <Button onClick={()=>{this.clearDataSource('inFormDataSource')}} type={'primary'} style={{width:'100%',marginTop:'5px'}} >清空</Button>
                </TabPane>
                <TabPane tab={'消息('+this.state.messageDataSource.length+')'} key={2}>
                    <List dataSource={this.state.messageDataSource}
                          renderItem={(item,index)=>(
                              <List.Item className={'list-item'}>
                                  <Avatar style={{ verticalAlign:'middle' }} src={item.src} />
                                  <div style={{marginLeft: 15}} className={'ant-list-item-meta-content'}>
                                      <h4>{item.title}</h4>
                                      <div className="ant-list-item-meta-description">
                                          {item.content}
                                      </div>
                                  </div>
                              </List.Item>
                          )}
                          locale={{emptyText:<NoDataContent msgType="消息" />    }}
                    />
                    <Button onClick={()=>{this.clearDataSource('messageDataSource')}} type={'primary'} style={{width:'100%',marginTop:'5px'}} >清空</Button>
                </TabPane>
                <TabPane tab={'待办('+this.state.todoListDataSource.length+')'} key={3}>
                    <List dataSource={this.state.todoListDataSource}
                          renderItem={(item,index)=>(
                              <List.Item className={'list-item'}>
                                  <div style={{marginLeft: 15}} className={'ant-list-item-meta-content'}>
                                      <h4>{item.title} <Tag style={{float:'right'}} color={item.color} >{ item.status }</Tag> </h4>
                                      <div className="ant-list-item-meta-description">
                                          {item.content}
                                      </div>
                                  </div>
                              </List.Item>
                          )}
                          locale={{emptyText:<NoDataContent msgType="待办" />    }}
                    />
                    <Button onClick={()=>{this.clearDataSource('todoListDataSource')}} type={'primary'} style={{width:'100%',marginTop:'5px'}} >清空</Button>
                </TabPane>
            </Tabs>
        )
    }
}

export default PopContent
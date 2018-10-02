import React from 'react'
import {Dropdown,Menu,Avatar } from 'antd';
class App extends React.Component {
    state={
        visible: false
    };


    handleMenuClick=(keyOBJ)=>{
        this.props.history.push(keyOBJ.key);
    };
    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    };
    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">个人中心</Menu.Item>
                <Menu.Item key="2">个人设置</Menu.Item>
                <Menu.Item key="/login">退出登录</Menu.Item>
            </Menu>
        )
        return (
            <Dropdown overlay={menu}
                      visible={this.state.visible}
                      onVisibleChange={this.handleVisibleChange}
            >
                <Avatar style={{marginLeft:'10px'}} size={23} src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'/>
            </Dropdown>
        )
    }
}
export default App;
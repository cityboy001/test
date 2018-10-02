import React from 'react'
import {Layout, Menu, Icon, Spin, Tooltip} from 'antd';
import './menu.css'

import {Route, Link,Redirect,Switch} from 'react-router-dom'

import Loadable from 'react-loadable';
import {menuData} from './../../dataSource/menu.js'
import Inform from './Inform.js'
import User from './User.js'
const createElement = React.createElement;
const {Header, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;
const loading = () => <div style={ {textAlign:'center',paddingTop:'20px'} }><Spin size="large" /></div>;

const Analysis = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/dashboard/Analysis.js'),
        loading
    }))
);

const Monitor = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/dashboard/Monitor.js'),
        loading
    }))
);
const Workplace = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/dashboard/Workplace.js'),
        loading
    }))
);
const BasicForm = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/form/BasicForm.js'),
        loading
    }))
);
const StepForm = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/form/StepForm.js'),
        loading
    }))
);
const AdvancedForm = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/form/AdvancedForm.js'),
        loading
    }))
);
const TableList = ()=>(
    createElement(Loadable({
        loader: () => import('../content/list/TableList.js'),
        loading
    }))
);
const BasicList = ()=>(
    createElement(Loadable({
        loader: () => import('../content/list/BasicList.js'),
        loading
    }))
);
const CardList = ()=>(
    createElement(Loadable({
        loader: () => import('../content/list/CardList.js'),
        loading
    }))
);
const Basic = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/profile/Basic.js'),
        loading
    }))
);
const Advanced = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/profile/Advanced.js'),
        loading
    }))
);
const Success = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/result/Success.js'),
        loading
    }))
);const Fail = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/result/Fail.js'),
        loading
    }))
);const Exception403 = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/exception/Exception403.js'),
        loading
    }))
);
const Exception404 = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/exception/Exception404.js'),
        loading
    }))
);
const Exception500 = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/exception/Exception500.js'),
        loading
    }))
);
const Center = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/account/Center.js'),
        loading
    }))
);
const Settings = ()=>(
    createElement(Loadable({
        loader: () => import('./../content/account/Settings.js'),
        loading
    }))
);

const components = {
    Analysis,Monitor,Workplace,BasicForm,StepForm,AdvancedForm,TableList,BasicList,CardList
    ,Basic,Advanced,Success,Fail,Exception403,Exception404,Exception500,Center,Settings
};


class myMenu extends React.Component {
    state = {
        collapsed: false,
        searchCollapsed: true,
    };
    wrapperInput = null;
    

    onSelect = ({key}) => {
        this.props.history.push(key);
    };
    toggleInputCollapse = ()=>{
        // console.log(Array.from(this.wrapperInput.classList));
        let flag = Array.from(this.wrapperInput.classList).includes('collapsed-input');
        this.wrapperInput.className = flag?'search-inline-block':'collapsed-input search-inline-block';
    }
    render() {
        // console.log(this.props);
        const routeLists = [];
        const Trigger = <Icon
            className="font-19"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        />;
        const { location } = this.props;
        const openKeys = location.pathname.split('/')[1];
        const selectedKeys = location.pathname.split('/')[2];
        return (
            <Layout className={'container'}>
                <Sider
                    breakpoint={'sm'}
                    trigger={Trigger}
                    collapsible
                    collapsedWidth={40}
                    onCollapse={collapsed => {
                        this.setState({
                            collapsed
                        });
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline"
                          onSelect={this.onSelect}
                          defaultSelectedKeys={[selectedKeys]}
                          defaultOpenKeys={[openKeys]}
                    >
                        {
                            menuData.map((item) => (
                                <SubMenu key={item.route}
                                         title={<span><Icon className={'font-19'} type={item.icon}/>
                            <span>{item.title}</span></span>}
                                >
                                    {
                                        item.children.map(innerItem => {
                                            const url = '/' + item.route + '/' + innerItem.route;
                                            routeLists.push({
                                                url,
                                                component: innerItem.route
                                            });
                                            return <Menu.Item key={innerItem.route}>
                                                <Link to={url}>{innerItem.title}</Link>
                                            </Menu.Item>
                                        })

                                    }
                                </SubMenu>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: ' 0 16px', height: '40px', lineHeight: '48px'}}>
                        <div className={'header-content-right'}>
                            <Icon onClick={this.toggleInputCollapse}
                                  style={{cursor: 'pointer', verticalAlign: 'middle'}}
                                  className={'font-19'} type='search'/>
                            <div ref={(wrapperInput)=>{this.wrapperInput = wrapperInput;}}
                                className={'search-inline-block collapsed-input'}>
                                <input className={'has-one-line-input'}/>
                            </div>
                            <Tooltip placement={'bottom'} title={'查看文档'}>
                                <a href="https://pro.ant.design/docs/getting-started">
                                    <Icon className={'font-19'} style={{cursor: 'pointer'}} type="question-circle"
                                          theme="outlined"/>
                                </a>
                            </Tooltip>
                            <Inform />
                            <Route path={this.props.match.path} component={User} />
                        </div>
                    </Header>
                    <Content style={{margin: '16px 16px', padding: 24, background: '#fff'}}>
                        <Switch>
                            {
                                routeLists.map(e => (<Route key={e.url} path={e.url} component={components[e.component]} />))
                            }
                            <Redirect to="/exception/Exception404"/>
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default myMenu;

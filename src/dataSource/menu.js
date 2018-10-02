export const menuData = [
    {
        title:'仪表盘',
        icon:'dashboard',
        route:'dashboard',
        children:[
            {
                route:'Analysis',
                title: '分析页'
            },{
                route:'Monitor',
                title: '监控页'
            },{
                route:'Workplace',
                title: '工作台'
            }
        ]
    },{
        title:'表单页',
        icon:'form',
        route:'form',
        children:[
            {
                route:'BasicForm',
                title: '基础表单'
            },{
                route:'StepForm',
                title: '分步表单'
            },{
                route:'AdvancedForm',
                title: '高级表单'
            }
        ]
    },{
        title:'列表页',
        icon:'table',
        route:'list',
        children:[
            {
                route:'TableList',
                title: '查询表格'
            },{
                route:'BasicList',
                title: '标准列表'
            },{
                route:'CardList',
                title: '卡片列表'
            }
        ]
    },{
        title:'详情页',
        icon:'profile',
        route:'profile',
        children:[
            {
                route:'Basic',
                title: '基础详情页'
            },{
                route:'Advanced',
                title: '高级详情页'
            }
        ]
    },{
        title:'结果页',
        icon:'dashboard',
        route:'result',
        children:[
            {
                route:'Success',
                title: '成功页'
            },{
                route:'Fail',
                title: '失败页'
            }
        ]
    },{
        title:'异常页',
        icon:'warning',
        route:'exception',
        children:[
            {
                route:'Exception403',
                title: '403'
            },{
                route:'Exception404',
                title: '404'
            },{
                route:'Exception500',
                title: '500'
            },
        ]
    },{
        title:'个人页',
        icon:'user',
        route:'account',
        children:[
            {
                route:'Center',
                title:'个人中心'
            },{
                route:'Settings',
                title: '个人设置'
            },
        ]
    },
];
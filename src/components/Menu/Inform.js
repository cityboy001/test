import React from 'react'
import {Icon,Popover, Badge} from 'antd';
import PopContent from "../PopContent";
class Info extends React.Component{
    state = {
        infoNum:9,
        popVisibility: false
    };
    togglePopVisibility = (popVisibility) => {
        this.setState({
            popVisibility
        });
    };
    changeInfoNum = (infoNum) => {
        this.setState({
            infoNum
        });
    };
    render (){
        return <Popover onVisibleChange={this.togglePopVisibility} placement="bottomRight" visible={this.state.popVisibility} content={(
            <PopContent changeInfoNum={this.changeInfoNum}/>

        )}>
            <Badge count={this.state.infoNum}>
                <Icon style={{cursor: 'pointer'}}  className={'font-19'} type="bell" theme="outlined"/>
            </Badge>
        </Popover>
    }
}
export default Info
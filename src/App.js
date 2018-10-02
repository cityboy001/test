import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Login from './components/Login'
import './css/css_global.css'
import Menu from './components/Menu';
class App extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <Route exact  path={'/'} render={()=>{
                    if(localStorage.getItem('logined')==='true'){
                            return <Redirect to="/dashboard/Analysis" />
                    }else{
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path={'/login'} component={Login}/>
                <Route path={'/dashboard'} component={Menu}/>
                <Route path={'/form'} component={Menu}/>
                <Route path={'/list'} component={Menu}/>
                <Route path={'/profile'} component={Menu}/>
                <Route path={'/result'} component={Menu}/>
                <Route path={'/exception'} component={Menu}/>
                <Route path={'/account'} component={Menu}/>
            </div>
        )
    }
}

export default App;
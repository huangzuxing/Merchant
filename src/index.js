/**
 * 这个类是终极入口，所有的角色都只能从这里进入
 * 并且判断不同角色渲染不同的组件， 以达到角色区分渲染的效果
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/public/admin.css';
import './css/public/amazeui.min.css';
import './css/public/app.css';
import './css/public/iconfont.css';
import MerchantIndex from "./components/merchant/index/index.js";
import AgentIndex from "./components/agent/index.js";
import AdminIndex from "./components/admin/index.js"
import Login from "./login.js";
import BaseComponent from "./components/BaseComponent"
import {BrowserRouter,Route} from "react-router-dom"

/**
 * 用户角色控制类
 */
class UserRole  extends BaseComponent {
    constructor(param){
        super(param)
        this.state = {
            role:2
        }

    }
    render(){
        if(this.state.role === 4){
            return <Route path="/login" component={Login}></Route>
        }
        /*
        *商户角色
        */
        else if(this.state.role === 3){
            return <Route path="/merchant" component={MerchantIndex}></Route>
        }
        /**
         * 代理商角色
         */
        else if(this.state.role === 2){
            return <Route path="/agent" component={AgentIndex}></Route>
        }
        /**
         * 平台角色
         */
        else if(this.state.role === 1){
            return <Route path="/admin" component={AdminIndex}></Route>
        }
        /**
         * 没有任何角色
         */
        else {
            return (
                <div>
                    没有任何角色， 你没有权限！
                </div>
            )
        }
    }
}
ReactDOM.render(
    <BrowserRouter path="/">
        <UserRole/>
    </BrowserRouter>,
    document.getElementById('root')
);


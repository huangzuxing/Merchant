import React from 'react';
import ReactDOM from 'react-dom';
import './css/public/admin.css';
import './css/public/amazeui.min.css';
import './css/public/app.css';
import './css/public/iconfont.css';
import './css/login.css'
import BaseComponent from "./components/BaseComponent"
export default class Login extends BaseComponent{
    constructor (param){
        super(param)
        this.state={
            codeselected:false,
            acountselected:true,
        }
    }
    /*
    * 二维码登陆
    * */
    codeselected(){
        this.content.setState({
            codeselected:false,
            acountselected:true,
        })
    }
    /*
    * 账号密码登陆
    * */
    acountselected(){
        this.content.setState({
            codeselected:true,
            acountselected:false,
        })
    }
    render(){
        return(
            <div className="container">
                <div className="login-h-container">
                    <div className="myapp-login-logo-block  tpl-login-max">
                        <div className="row">
                            <div className="am-u-lg-8">
                                <div className="row-right">
                                    <div className="logo">
                                        <img src="../image/Icon-02.png" alt=""/>
                                    </div>
                                    <div className="row-title">
                                        <h1>聚合你我 支付未来</h1>
                                        <h4>引领消费时代 让支付更<em>精彩</em></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="am-u-lg-4">
                                <div className="row-login">
                                    <div className="login-container">
                                        <div className="login-header-nav">
                                            <ul>
                                                <li onClick={this.codeselected.bind({content:this})}>
                                                    <span className={this.state.acountselected ? "active" : ""}>二维码登陆</span>
                                                </li>
                                                <li onClick={this.acountselected.bind({content:this})}>
                                                    <span className={this.state.codeselected ? "active" : ""}>账号密码登陆</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="login-code s_item" hidden={this.state.codeselected ? true : false}>123</div>
                                        <div className="login-content s_item" hidden={this.state.acountselected ? true : false}>
                                            <div className="user-name">
                                                <input type="text" placeholder="输入登录码"/>
                                            </div>
                                            <div className="user-password">
                                                <input type="text" placeholder="输入验证码"/>
                                                <img src="" alt="" />
                                            </div>
                                            <div className="login-footer">
                                                登录　　→
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="amg-footer">
                        <div className="row">
                            <div className="am-u-lg-4">
                                <div className="s-link">
                                    <ul>
                                        <li><a href="javascript:void(0)">网站地图</a></li>
                                        <li><a href="javascript:void(0)">法律声明</a></li>
                                        <li><a href="javascript:void(0)">友情链接</a></li>
                                    </ul>
                                </div>
                                <div className="s-footer">
                                    ©2017-2017深圳市聚和付信息技术有限公司版权所有
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

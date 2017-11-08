import React from 'react';
import "../../css/admin/setup.css"
import BaseComponent from "../BaseComponent"
export default class SetupContent extends BaseComponent{
        constructor (param){
            super (param)
            this.state={
                noticelist:[{},{}]
            }
        }
    render() {
        return (
            <div className="right-content">
                <div className="tpl-content-nav">
                    <div className="menu">
                        <ul>
                            <li><a href="JavaScript:void(0)">系统设置</a></li>
                        </ul>
                    </div>
                </div>
                <div className="am-g">
                    <div className="tpl-setup-container">
                        <div className="tpl-title">
                            <span className="t-left">设置系统通知</span>
                            <div className="t-right"><a href="javascript:void(0)" className="t-notice">添加通知</a></div>
                        </div>
                        <div className="i-tpl-list">
                            <ul>
                                {this.state.noticelist.map((item,index)=>{
                                    return(
                                        <li>
                                            <div className="sub-left"><p>官方信息和通知的展示，可更新，重要通知的商户请注意结果反馈说的价格科技馆科技馆看了几个了接口连接感觉克劳福德管理机构克劳福德 看了感觉到了看看了</p></div>
                                            <div className="sub-right">
                                                <div className="sub-right-floor">
                                                    <a href="javascript:void(0)" className="edit">编辑</a>
                                                    <a href="javascript:void(0)" className="del">删除</a>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="am-jump">
                        <div className="sub-jump">
                            <ul>
                                <li className="j-prev"/>
                                <li><p>2/12</p></li>
                                <li className="j-next"/>
                                <li><input type="text"/></li>
                                <li className="jump">跳转</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

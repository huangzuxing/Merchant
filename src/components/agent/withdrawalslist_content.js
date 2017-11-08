import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/agent/withdrawalslist.css"
import BaseComponent from "../BaseComponent"
/*
* 提现列表组件
* */
export default class WithdrawalsListContent extends BaseComponent{
    constructor (param){
        super (param)
        this.state={
            orderlist:[{},{},{},{},{},{},{},{},{},{}]
        }
    }
    render(){
        return <div className="content-right">
            <div className="tpl-content-nav">
                <div className="menu">
                    <ul>
                        <li><a href="JavaScript:void(0)">首页</a><span>></span></li>
                        <li><a href="JavaScript:void(0)">提现列表</a><span>></span></li>
                        <li><a href="JavaScript:void(0)">详情</a></li>
                    </ul>
                </div>
            </div>
            <div className="am-g">
                <div className="cm-table">
                    <table className="am-table am-table-hover a-table-main">
                        <thead>
                            <tr>
                                <th>时间</th>
                                <th>提现金额</th>
                                <th>银行卡信息</th>
                                <th>提现详情</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.orderlist.map((item,index)=>{
                            return(
                                <tr>
                                    <td>
                                        <div className="item">2017-07-12 12:12</div></td>
                                    <td><div className="item">52021元</div></td>
                                    <td><div className="item">中国银行（尾号5421 马云）</div></td>
                                    <td>
                                        <div className="c-msg">
                                            <div className="c-datail">详情</div>
                                            <div className="details-list-two">
                                                <div className="main">
                                                    <div className="main_header">
                                                        <div className="bank">
                                                            <p>中国银行（尾号5421马云）</p>
                                                        </div>
                                                        <div className="money">
                                                            <p>-251.5</p>
                                                        </div>
                                                        <div className="acount">
                                                            <div className="left">
                                                                <p>实到账金额-200</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>手续费 0.1</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="main_list">
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>提现方式</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>银行卡提现</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>提现时间</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>2017-07-11 12:21:12</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>提现状态</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>已提交</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>到账时间</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>今日18时前/明日1时前</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>订单号</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>20213322556332255633115</p>
                                                                <span>复制</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>
                <div className="am-jump">
                    <div className="sub-jump">
                        <ul>
                            <li className="j-prev"></li>
                            <li><p>2/12</p></li>
                            <li className="j-next"></li>
                            <li><input type="text" /></li>
                            <li className="jump">跳转</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}

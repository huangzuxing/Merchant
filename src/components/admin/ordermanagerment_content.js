import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/admin/ordermanagerment.css"
import BaseComponent from "../BaseComponent"
/*
* 订单管理
* */

export default class OrderManagermentContent extends BaseComponent{
    render(){
        return <div className="content-right">
            <div className="tpl-content-nav">
                <div className="menu">
                    <ul>
                        <li><a href="JavaScript:void(0)">订单管理</a></li>
                    </ul>
                </div>
            </div>
            <div className="am-g">
                <div className="cm-table">
                    <div className="cm-nav-tabs">
                        <div className="nav-date"></div>
                        <div className="nav-order">
                            <input type="text" placeholder="输入消费订单编号搜索订单"/>
                            <div className="nav-right">
                                <i className="iconfont">&#xe60c;</i>
                            </div>
                        </div>
                        <div className="nav-c-return" style={{overflow:"hidden"}}>
                            <ul style={{height:"90px",bankgroundColor:"white"}}>
                                <li className="active">
                                    <div className="nav-left">全部</div>
                                    <div className="nav-right">
                                        <i className="iconfont">&#xe642;</i>
                                    </div>
                                </li>
                                <li><div className="nav-left">已返现</div>
                                    <div className="nav-right">
                                        <i className="iconfont">&#xe642;</i>
                                    </div></li>
                                <li>
                                    <div className="nav-left"> 未返现  </div>
                                    <div className="nav-right">
                                        <i className="iconfont">&#xe642;</i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <table className="am-table am-table-hover g-table-main">
                        <thead>
                            <tr>
                                <th>用户名称</th>
                                <th>消费金额</th>
                                <th>消费商户名称</th>
                                <th>消费日期</th>
                                <th>是否返现</th>
                                <th>订单编号</th>
                                <th>订单详情</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="item">
                                        <div className="user-invate">
                                            <img src="" alt=""/>
                                        </div>

                                        <p className="am-user-name">赵四</p>
                                    </div>
                                </td>
                                <td><div className="item">52021元</div></td>
                                <td><div className="item">2017-08-05 22:21</div></td>
                                <td><div className="item">已返</div></td>
                                <td><div className="item">分成52.12元</div></td>
                                <td><div className="item">450622153454565454445</div></td>
                                <td>
                                    <div className="c-msg">
                                        <div className="c-datail">详情</div>
                                        <div className="merchant-list">
                                            <div className="income-list">
                                                <div className="username">
                                                   在麦田里找虫吃符合健康上导航发就看过后端接口好几个快递费
                                                </div>
                                                <div className="m-income">
                                                    <div className="m-i-left">
                                                        <p>平台分成</p>
                                                    </div>
                                                    <div className="m-right">
                                                        <p className="money">2514444444444444444444444444.12</p><p className="word">元</p>
                                                    </div>
                                                </div>
                                                <div className="m-list">
                                                    <div className="m-i-left">
                                                        <p>推广收益</p>
                                                    </div>
                                                    <div className="m-i-right">
                                                        <p className="money">25144444444444444444.12</p><p className="word">元</p>
                                                    </div>
                                                </div>
                                                <div className="m-list">
                                                    <div className="m-i-left">
                                                        <p>用户支付</p>
                                                    </div>
                                                    <div className="m-i-right">
                                                        <p className="money">2514444444444.12</p><p className="word">元</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="a-balance">
                                                <div className="t-list">
                                                    <div className="a-t-left">
                                                        <div className="sub-left">余额支付</div>
                                                        <div className="sub-content">+800</div>
                                                        <div className="sub-right">元</div>
                                                    </div>
                                                    <div className="a-t-right">
                                                        <div className="sub-left">微信支付</div>
                                                        <div className="sub-content">+800</div>
                                                        <div className="sub-right">元</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="f-list">
                                                <div className="f-s-list">
                                                    <div className="left">订单编号</div>
                                                    <div className="content">54566666666666666666666666666666</div>
                                                    <div className="s-right">复制</div>
                                                </div>
                                                <div className="f-s-list">
                                                    <div className="left">交易方式</div>
                                                    <div className="right">微信扫码</div>
                                                </div>
                                                <div className="f-s-list">
                                                    <div className="left">鼓励状态</div>
                                                    <div className="right">已奖励（队列奖励模式）</div>
                                                </div>
                                                <div className="f-s-list">
                                                    <div className="left">奖励日期</div>
                                                    <div className="right">2017-07-01 12:12:12</div>
                                                </div>
                                                <div className="f-s-list">
                                                    <div className="left">消费日期</div>
                                                    <div className="right">2017-07-01 12:12:12</div>
                                                </div>
                                                <div className="f-s-list">
                                                    <div className="left">商户名称</div>
                                                    <div className="right">聚和付商户符合健康舒服点返回几点开始发挥空间发的健康是福黑科技</div>
                                                </div>
                                                <div className="f-s-list">
                                                    <div className="left">联系商户</div>
                                                    <div className="right">15810696512</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
    }
}
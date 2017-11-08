import React from 'react';
import ReactDOM from 'react-dom';

import {CarouselNotice} from "../public"
import "../../css/merchant/index.css"
/*
* 首页的右边内容
* */
import BaseComponent from "../BaseComponent.js"
import {Link} from "react-router-dom"

export default class Indexcontent extends BaseComponent{
    render(){
        return <div className="content-right">
            <CarouselNotice speed={100} >
                <p>此处放文字。。。。。。。。。</p>
                <p>此处放文字。。。。。。。。。</p>
                <p>此处放文字。。。。。。。。。</p>
                <p>此处放文字。。。。。。。。。</p>
            </CarouselNotice>
            <div className="tpl-content-nav">
                <div className="menu">
                    <ul>
                        <li><a href="JavaScript:void(0)">首页</a></li>
                    </ul>
                </div>
            </div>
            <div className="tpl-portlet-components">
                <div className="portlet-title">
                    <div className="portlet-content">
                        <h1>50125.23元</h1>
                        <span>余额</span>
                        <Link to="/merchant/Withdrawals" className="widthdrew">提现</Link>
                        <Link to="/merchant/WithdrawalsList" className="widthdrewList">提现列表</Link>
                    </div>
                </div>
                <div className="tpl-block">
                    <div className="row">
                        <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                            <div className="row-header">
                                <span>总收入</span>
                            </div>
                            <div className="row-content">
                                <ul>
                                    <li>
                                        <div className="top">
                                            <h3>...</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>今日</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>8054.23</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>本周</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>45423.35</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>本月</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="row-bottom">
                                <p>单位：元</p>
                            </div>
                        </div>
                        <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                            <div className="row-header row-number">
                                <span>交易笔数</span>
                            </div>
                            <div className="row-content">
                                <ul>
                                    <li>
                                        <div className="top">
                                            <h3>24</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>今日</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>80</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>本周</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>180</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>本月</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="row-bottom row-bottom-number">
                                <p>单位：笔</p>
                            </div>
                        </div>
                        <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                            <div className="row-header row-user">
                                <span>用户数</span>
                            </div>
                            <div className="row-content row-content-user">
                                <ul>
                                    <li>
                                        <div className="top">
                                            <h3>12</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>今日新增用户数</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>80</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>历史累计用户数</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="row-bottom row-bottom-user">
                                <p>单位：人</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

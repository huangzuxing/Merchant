import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/agent/index.css"
import BaseComponent from "../BaseComponent"
import {Link} from "react-router-dom"
import {CarouselNotice,Title,IndexHeader} from "../public"
// import IndexHeader from "../public/indexheader"
// import Title from "../public/title"
/*
* 代理商主页
* */
export default class Indexcontent extends BaseComponent{
    render(){
        return <div className="content-right">
            <CarouselNotice speed={30} >
                <p>此处放文字。。。。。。。。。</p>
                <p>此处放文字。。。。。。。。。</p>
                <p>此处放文字。。。。。。。。。</p>
                <p>此处放文字。。。。。。。。。</p>
            </CarouselNotice>
            <Title title="首页"/>
            <div className="tpl-portlet-components">
                <IndexHeader towithdrawals="/agent/Withdrawals" towithdrawalslist="/agent/Withdrawalslist"/>
                <div className="tpl-block">
                    <div className="row">
                        <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                            <div className="row-header">
                                <span>分成收入</span>
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
                                <span>商户数</span>
                            </div>
                            <div className="row-content">
                                <ul>
                                    <li>
                                        <div className="top">
                                            <h3>...</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>已开店商户数</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>8054</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>今日新增商户数</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <h3>45423</h3>
                                        </div>
                                        <div className="bottom">
                                            <p>不活跃商户数</p>
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

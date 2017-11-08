import React from 'react'
import ReactDOM from 'react-dom'
import "../../css/agent/statistics.css"
import {Title} from '../public'
/*
* 统计收入数据
* */
class StatisticsContent extends React.Component{
    render(){
        return <div className="content-right">
                    <Title title="收入统计"/>
                    <div className="am-s-content">
                        <div className="row">
                            <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                                <div className="c-bg">
                                    <div className="top-title">
                                        <div className="t-left">
                                            <h2>交易笔数</h2>
                                        </div>
                                        <div className="t-right">
                                            <p>单位:笔</p>
                                        </div>
                                    </div>
                                    <div className="date-content">
                                        <ul>
                                            <li>
                                                <h3>54</h3>
                                                <p>今日数据</p>
                                            </li>
                                            <li>
                                                <h3>124</h3>
                                                <p>昨日数据</p>
                                            </li>
                                            <li>
                                                <h3>587333333</h3>
                                                <p>近7日数据</p>
                                            </li>
                                            <li>
                                                <h3>1245</h3>
                                                <p>近30日数据</p>
                                            </li>
                                            <li>
                                                <h3>54</h3>
                                                <p>日均</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chart">

                                    </div>
                                    <div className="date-bottom">
                                        <div className="date-number">
                                            <span></span>
                                            <p>交易笔数</p>
                                        </div>
                                        <div className="date-d-number">
                                            <span></span>
                                            <p>日均</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                                <div className="c-bg">
                                    <div className="top-title content-title">
                                        <div className="t-left">
                                            <h2>交易金额</h2>
                                        </div>
                                        <div className="t-right">
                                            <p>单位:元</p>
                                        </div>
                                    </div>
                                    <div className="date-content">
                                        <ul>
                                            <li>
                                                <h3>54</h3>
                                                <p>今日数据</p>
                                            </li>
                                            <li>
                                                <h3>124</h3>
                                                <p>昨日数据</p>
                                            </li>
                                            <li>
                                                <h3>587333333</h3>
                                                <p>近7日数据</p>
                                            </li>
                                            <li>
                                                <h3>1245</h3>
                                                <p>近30日数据</p>
                                            </li>
                                            <li>
                                                <h3>54</h3>
                                                <p>日均</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chart">

                                    </div>
                                    <div className="date-bottom">
                                        <div className="date-number">
                                            <span style={{background:"#00a8df"}}></span>
                                            <p>交易金额</p>
                                        </div>
                                        <div className="date-d-number">
                                            <span></span>
                                            <p>日均</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                                <div className="c-bg">
                                    <div className="top-title right-title green">
                                        <div className="t-left">
                                            <h2>分红金额</h2>
                                        </div>
                                        <div className="t-right">
                                            <p>单位:元</p>
                                        </div>
                                    </div>
                                    <div className="date-content">
                                        <ul>
                                            <li>
                                                <h3>54</h3>
                                                <p>今日数据</p>
                                            </li>
                                            <li>
                                                <h3>124</h3>
                                                <p>昨日数据</p>
                                            </li>
                                            <li>
                                                <h3>587333333</h3>
                                                <p>近7日数据</p>
                                            </li>
                                            <li>
                                                <h3>1245</h3>
                                                <p>近30日数据</p>
                                            </li>
                                            <li>
                                                <h3>54</h3>
                                                <p>日均</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chart">

                                    </div>
                                    <div className="date-bottom">
                                        <div className="date-number">
                                            <span style={{background:"#00d5df"}}></span>
                                            <p>交易金额</p>
                                        </div>
                                        <div className="date-d-number">
                                            <span></span>
                                            <p>日均</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                                <div className="c-bg">
                                    <div className="top-title right-title">
                                        <div className="t-left">
                                            <h2>用户数</h2>
                                        </div>
                                        <div className="t-right">
                                            <p>单位:人</p>
                                        </div>
                                    </div>
                                    <div className="date-content">
                                        <ul>
                                            <li>
                                                <h3>54</h3>
                                                <p>今日数据</p>
                                            </li>
                                            <li>
                                                <h3>124</h3>
                                                <p>昨日数据</p>
                                            </li>
                                            <li>
                                                <h3>587333333</h3>
                                                <p>近7日数据</p>
                                            </li>
                                            <li>
                                                <h3>1245</h3>
                                                <p>近30日数据</p>
                                            </li>
                                            <li>
                                                <h3>54</h3>
                                                <p>日均</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chart">

                                    </div>
                                    <div className="date-bottom">
                                        <div className="date-number">
                                            <span style={{background:"#00d0a8"}}></span>
                                            <p>用户数</p>
                                        </div>
                                        <div className="date-d-number">
                                            <span></span>
                                            <p>日均</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="am-u-lg-4 am-u-md-12 am-u-sm-12">
                                <div className="c-bg">
                                    <div className="top-title right-title merchant">
                                        <div className="t-left">
                                            <h2>新增商户数</h2>
                                        </div>
                                        <div className="t-right">
                                            <p>单位:家</p>
                                        </div>
                                    </div>
                                    <div className="date-content">
                                        <ul>
                                            <li>
                                                <h3>54</h3>
                                                <p>今日数据</p>
                                            </li>
                                            <li>
                                                <h3>124</h3>
                                                <p>昨日数据</p>
                                            </li>
                                            <li>
                                                <h3>587333333</h3>
                                                <p>近7日数据</p>
                                            </li>
                                            <li>
                                                <h3>1245</h3>
                                                <p>近30日数据</p>
                                            </li>
                                            <li>
                                                <h3>54</h3>
                                                <p>日均</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chart">

                                    </div>
                                    <div className="date-bottom">
                                        <div className="date-number">
                                            <span style={{background:"#8ad06e"}}></span>
                                            <p>用户数</p>
                                        </div>
                                        <div className="date-d-number">
                                            <span></span>
                                            <p>日均</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}
export default StatisticsContent;
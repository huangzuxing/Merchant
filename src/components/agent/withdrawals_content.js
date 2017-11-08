import React from 'react';
import BaseComponent from '../BaseComponent';
import "../../css/agent/withdrawals.css"
/*
* 提现组件
* */
export default class WithdrawalsContent extends BaseComponent{
    constructor(param){
        super(param)
        this.state= {
            bankCard: [
                {name:123}, {name:234}, {name:345}, {name:456}, {name:567}, {name:678}, {name:789}, {name:890}
            ],
            selectedBankCard: null
        }
        /**
         * 1、 渲染出所有的银行卡项目
         * 2、绑定事件：【
         *      1、其他的同等级的对象去除该【active】class
         *      2、点击每个银行卡项则为当前点击的对象添加 【active】 class 样式
         *
         * 】
         */
    }
    selectedBankCard(){
        /**
         * map 是js原生数组的一个遍历方法，该方法可以产生一个改变后【数组中的每一个对象】的原数组
         */
        this.content.state.bankCard.map(item=>{
            item.selected = false
            return item
        })
        this.content.state.bankCard[this.id].selected = true
        this.content.setState({
            bankCard:this.content.state.bankCard,
            selectedBankCard: this.content.state.bankCard[this.id]
        })
    }
    render(){
        return <div className="right-content">
            <div className="tpl-content-nav">
                <div className="menu">
                    <ul>
                        <li><a href="JavaScript:void(0)">首页</a><span>></span></li>
                        <li><a href="JavaScript:void(0)">提现</a></li>
                    </ul>
                </div>
            </div>
            <div className="nav-battle">
                <div className="nav-part">
                    <div className="nav-one">
                        <span className="sub-number-one">
                            1
                        </span>
                        <p>提现录入</p>
                    </div>
                    <div className="sub-content"></div>
                    <div className="nav-two">
                        <span className="sub-number-two active">
                            2
                        </span>
                        <p>提现确认</p>
                    </div>
                </div>
            </div>
            <div className="am-content">
                <div className="title">
                    <h2>提现信息</h2>
                    <p>单位:元</p>
                </div>
                <div className="row">
                    <div className="am-u-lg-5 am-u-md-12 am-u-sm-12 left">
                        <div className="l-info">
                            <div className="top-item">
                                <ul>
                                    <li>
                                        <div className="i-left">
                                            <p>提现金额</p>
                                        </div>
                                        <div className="i-right">
                                            <input type="text" placeholder="请输入转账金额"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="i-left">
                                            <p>可用余额</p>
                                        </div>
                                        <div className="i-c-right">
                                            <div className="r-top">
                                                <p>1245.12元</p>
                                            </div>
                                            <div className="r-bottom">
                                                <p>(实际到账金额<em className="number">12456.12</em> 手续费<em>0.01</em>)</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="i-left">
                                            <p>提现银行</p>
                                        </div>
                                        <div className="i-right">
                                            <p className="bank-number">中国银行（4512）刘俊麟</p><div className="explain">说明
                                            <div className="explain-msg">
                                                <p className="title">说明</p>
                                                <p className="cotent">
                                                    ”此金额为银行收取的银行账户转账费用，由银行从提现金额中收取“
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                </ul>
                                <a href="javascript:void(0)" className="sub-footer">提交</a>
                            </div>
                            <div className="info-sure">
                                <ol>
                                    <li>
                                        <p>手续费</p> <em>￥0.01</em>
                                    </li>
                                    <li>
                                        <p>实际到账金额</p> <em class="money">￥1527.12</em>
                                    </li>
                                    <li>
                                        <p>交易类型</p> <em>银行卡提现</em>
                                    </li>
                                    <li>
                                        <p>手提现账户</p> <em>中国银行（尾号4521）赵四</em>
                                    </li>
                                    <li><p>预计到账时间</p><em>今日18时/明日18时</em></li>
                                </ol>
                                <div className="info-sure-footer">
                                    确认
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="am-u-lg-7 am-u-md-12 am-u-sm-12 right">
                        <div className="right-bank">
                            <div className="b-left" hidden={this.state.selectedBankCard ? false : true}>
                                <div className="b-bank-number">
                                    <div className="b-bank-logo">
                                        <img src="" alt=""/>
                                        <p>{this.state.selectedBankCard && this.state.selectedBankCard.name}</p>
                                    </div>
                                    <div className="b-bank-bottom">
                                        <div className="b-bottom-left">
                                            <p className="bank">{this.state.selectedBankCard && this.state.selectedBankCard.name}</p>
                                            <p className="number">{this.state.selectedBankCard && this.state.selectedBankCard.name}</p>
                                        </div>
                                        <div className="b-bottom-right">
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="b-right">
                                <ul>
                                    {this.state.bankCard.map((item,items)=>{
                                        return(
                                            <li className={item.selected ? "active":""} onClick={this.selectedBankCard.bind({id:items,content:this})}>
                                                <div className="b-right-top">
                                                    <img src="" alt=""/><p>马三立</p>
                                                </div>
                                                <div className="b-right-bottom">
                                                    <p>8542</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                    {/*{this.state.bankCard.map((item,index)=>{*/}
                                    {/*return (*/}
                                    {/*<li className={item.selected ? "active" : ""} onClick={this.selectedBankCard.bind({id:index,content:this})}>*/}
                                    {/*<div className="b-right-top">*/}
                                    {/*<img src="" alt=""/><p>马三立</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="b-right-bottom">*/}
                                    {/*<p>8542</p>*/}
                                    {/*</div>*/}
                                    {/*</li>*/}
                                    {/*)*/}
                                    {/*})}*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
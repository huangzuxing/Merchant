import React from 'react';
import ReactDOM from 'react-dom';
// import copy from 'copy-to-clipboard';
import "../../css/merchant/withdrawalslist.css"
// import Paging from '../../util/Paging.js'
import BaseComponent from '../BaseComponent';
// let {public:{getBalances}} = require("../../util/lyapi");

/**
 * 提现列表内容
 */
export default class WithdrawalsListContent extends BaseComponent{
    constructor(param){
        super(param)
        this.state = {
            list:[]
            // pageNo : 1,
            // pageSize : 10,
            // totalCount : 0
        }
    }
    /**
     *显示订单详情
     */
    showOrderDetail(e){
        //阻止事件冒泡
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.content.state.list.map(item=>{item.show=false;return item})
        this.content.state.list[this.id].show = true
        this.content.setState({
            list:this.content.state.list
        })
    }
    /**
     * 隐藏订单详情
     */
    hideOrderDetail(){
        console.log(123);
        this.setState({
            list:this.state.list.map(item=>{item.show=false;return item})
        })
    }

    // /**
    //  * 复制订单号
    //  */
    // copy(){
    //     copy(this.content)
    //     alert("复制 " + this.content + " 成功！")
    // }
    //
    // getData({pageNo,pageSize}){
    //     this.setState({
    //         pageNo,pageSize
    //     })
    //     console.log(pageNo,pageSize);
    // }

    // /**
    //  * 调用后台接口
    //  */
    // componentWillMount(){
    //     getBalances({
    //         pageNo : this.state.pageNo,
    //         pageSize : this.state.pageSize
    //     }, ({data, totalCount})=>{
    //         console.log(data)
    //         this.setState({
    //             list:data,
    //             totalCount
    //         })
    //     },({data,msg})=>{
    //         console.log("失败",msg);
    //     })
    // }
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
            <div className="am-g" onClick={this.hideOrderDetail.bind(this)}>
                <div className="cm-table">
                    <table className="am-table am-table-hover table-main">
                        <thead>
                            <tr>
                                <th>时间</th>
                                <th>提现金额</th>
                                <th>银行卡信息</th>
                                <th>提现详情</th>
                            </tr>
                        </thead>
                        <tbody>{this.state.list.map((item, index)=>{
                            return (
                                <tr>
                                    <td>
                                        {item.createTime}</td>
                                    <td>{item.amount}元</td>
                                    <td>{item.bankName+"(尾号"+item.cardNumber.substr(-4, 4)+item.targetObjectName+")"}</td>
                                    <td>
                                        <div className="c-msg">
                                            <div className="c-datail" onClick={this.showOrderDetail.bind({id:index,content:this})}>详情</div>
                                            <div className="details-list-two"  hidden={!item.show}>
                                                <div className="main">
                                                    <div className="main_header">
                                                        <div className="bank">
                                                            <p>{item.bankName+"(尾号"+item.cardNumber.substr(-4, 4)+item.targetObjectName+")"}</p>
                                                        </div>
                                                        <div className="money">
                                                            <p>{item.amount}</p>
                                                        </div>
                                                        <div className="acount">
                                                            <div className="left">
                                                                <p>实到账金额{item.amount + 0.5}</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>手续费 0.5</p>
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
                                                                <p>{item.createTime}</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>提现状态</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>{item.targetObjectOperationStatus == 1 ? '已到账' : '发起中'}</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>到账时间</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>{item.targetObjectOperationStatus == 1 ? item.targetObjectOperationEndTime: '30 分钟之内到账'}</p>
                                                            </div>
                                                        </li>
                                                        <li className="item_list">
                                                            <div className="left">
                                                                <p>订单号</p>
                                                            </div>
                                                            <div className="right">
                                                                <p>{item.orderId}</p>
                                                                <span onClick={this.copy.bind({content:item.orderId})}>复制</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}</tbody>
                    </table>
                </div>
                <div className="am-jump">
                    <div className="sub-jump">
                        {/*<ul>*/}
                            {/*<li className="j-prev"></li>*/}
                            {/*<li><p>2/12</p></li>*/}
                            {/*<li className="j-next"></li>*/}
                            {/*<li><input type="text" /></li>*/}
                            {/*<li className="jump">跳转</li>*/}
                        {/*</ul>*/}
                        {/*<Paging pageSize={this.state.pageSize} pageNo={this.state.pageNo} totalCount={this.state.totalCount} getData={this.getData.bind(this)}/>*/}
                    </div>
                </div>
            </div>
        </div>
    }
}

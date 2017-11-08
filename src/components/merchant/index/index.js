import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../../BaseComponent"
import "../../../css/merchant/index.css"
import {Nav, MenuItem,Right,Header,CarouselNotice} from "../../public/"
import Indexcontent from "../indexcontent"
import MerchantdetailsContent from "../merchantdetails_content"
import OrdermanagermentContent from "../ordermanagerment_content"
import StatisticsContent from "../statistics_content"
import WithdrawalsContent from "../withdrawals_content"
import WithdrawalslistContent from "../withdrawalslist_content"
import {Route} from "react-router-dom"

/**
 *路由
 */
export default class Index extends BaseComponent{
    constructor(param){
        super(param)
        this.state = {
            index:true,
            OrderManagerment:false,
            Statistics:false,
            MerchantDetails:false,
        }
    }
    muenItemSelected(e){
        for(var item in this.content.state){this.content.state[item] = false}
        this.content.state[this.id] = true
        this.content.setState(this.content.state)
    }
    render(){
        return (
            <div>
                <Header name={"商户中心"}/>
                <Nav>
                    <MenuItem href="/merchant/" name="首页" ioc="&#xf029d;" selected={this.state.index} onClick={this.muenItemSelected.bind({id:"index",content:this})}/>
                    <MenuItem href="/merchant/OrderManagerment" name="订单管理" ioc="&#xe6de;" selected={this.state.OrderManagerment} onClick={this.muenItemSelected.bind({id:"OrderManagerment",content:this})}/>
                    <MenuItem href="/merchant/Statistics" name="收入统计" ioc="&#xe686;" selected={this.state.Statistics} onClick={this.muenItemSelected.bind({id:"Statistics",content:this})}/>
                    <MenuItem href="/merchant/MerchantDetails" name="商户详情" ioc="&#xe88c;" selected={this.state.MerchantDetails} onClick={this.muenItemSelected.bind({id:"MerchantDetails",content:this})}/>
                </Nav>
                <Right>
                    <Route exact path="/merchant/" component={Indexcontent}></Route>
                    <Route exact path="/merchant/Withdrawals" component={WithdrawalsContent}></Route>
                    <Route exact path="/merchant/WithdrawalsList" component={WithdrawalslistContent}></Route>
                    <Route exact path="/merchant/MerchantDetails" component={MerchantdetailsContent}></Route>
                    <Route exact path="/merchant/OrderManagerment" component={OrdermanagermentContent}></Route>
                    <Route exact path="/merchant/Statistics" component={StatisticsContent}></Route>
                </Right>
            </div>
        )
    }
}
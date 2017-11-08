import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/agent/index.css"
import {Nav, MenuItem,Right,Header} from "../public"
import BaseComponent from "../BaseComponent"
import AgentIndex from "./indexcontent"
import WithdrawalslistContent from "./withdrawalslist_content.js"
import WithdrawalsContent from "./withdrawals_content.js"
import OrderManagermentContent from "./ordermanagerment_content.js"
import AgentdetailsContent from "./agentdetails_content.js"
import MerchantListContent from "./merchantlist_content.js"
import StatisticsContent from "./statistics_content.js"
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
                <Header name="平台中心"/>
                <Nav>
                    <MenuItem href="/agent/" name="首页" ioc="&#xf029d;" selected={this.state.index} onClick={this.muenItemSelected.bind({id:"index",content:this})}/>
                    <MenuItem href="/agent/OrderManagerment" name="订单管理" ioc="&#xe6de;" selected={this.state.OrderManagerment} onClick={this.muenItemSelected.bind({id:"OrderManagerment",content:this})}/>
                    <MenuItem href="/agent/Statistics" name="收入统计" ioc="&#xe686;" selected={this.state.Statistics} onClick={this.muenItemSelected.bind({id:"Statistics",content:this})}/>
                    <MenuItem href="/agent/MerchantList" name="商户列表" ioc="&#xe98a;" selected={this.state.MerchantDetails} onClick={this.muenItemSelected.bind({id:"MerchantDetails",content:this})}/>
                    <MenuItem href="/agent/AgentDetails" name="代理商详情" ioc="&#xe88c;" selected={this.state.AgentDetail} onClick={this.muenItemSelected.bind({id:"AgentDetail",content:this})}/>
                </Nav>
                <Right>
                    {/*{this.props.children}*/}
                    <Route exact path="/agent/" component={AgentIndex}></Route>
                    <Route exact path="/agent/Withdrawalslist" component={WithdrawalslistContent}></Route>
                    <Route exact path="/agent/Withdrawals" component={WithdrawalsContent}></Route>
                    <Route exact path="/agent/MerchantList" component={MerchantListContent}></Route>
                    <Route exact path="/agent/AgentDetails" component={AgentdetailsContent}></Route>
                    <Route exact path="/agent/OrderManagerment" component={OrderManagermentContent}></Route>
                    <Route exact path="/agent/Statistics" component={StatisticsContent}></Route>
                </Right>
            </div>
        )
    }
}
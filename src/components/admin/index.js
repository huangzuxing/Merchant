import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/agent/index.css"
import {Nav, MenuItem,Right,Header} from "../public"
import BaseComponent from "../BaseComponent"
import AdminIndex from "./indexcontent"
import WithdrawalslistContent from "./withdrawalslist_content.js"
import WithdrawalsContent from "./withdrawals_content.js"
import OrderManagermentContent from "./ordermanagerment_content.js"
import MerchantListContent from "./merchantlist_content.js"
import SetupContent from "./setupcontent"
import AgentListContent from "./agentlist_content"
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
            MerchantList:false,
            Setup:false
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
                    <MenuItem href="/admin/" name="首页" ioc="&#xf029d;" selected={this.state.index} onClick={this.muenItemSelected.bind({id:"index",content:this})}/>
                    <MenuItem href="/admin/OrderManagerment" name="订单管理" ioc="&#xe6de;" selected={this.state.OrderManagerment} onClick={this.muenItemSelected.bind({id:"OrderManagerment",content:this})}/>
                    <MenuItem href="/admin/Statistics" name="收入统计" ioc="&#xe686;" selected={this.state.Statistics} onClick={this.muenItemSelected.bind({id:"Statistics",content:this})}/>
                    <MenuItem href="/admin/AgentListContent" name="代理商/商户列表" ioc="&#xe98a;" selected={this.state.AgentListcontent} onClick={this.muenItemSelected.bind({id:"MerchantList",content:this})}/>
                    <MenuItem href="/admin/Setup" name="系统设置" ioc="&#xe637;" selected={this.state.Setup} onClick={this.muenItemSelected.bind({id:"Setup",content:this})}/>
                </Nav>
                <Right>
                    {/*{this.props.children}*/}
                    <Route exact path="/admin/" component={AdminIndex}></Route>
                    <Route exact path="/admin/Withdrawalslist" component={WithdrawalslistContent}></Route>
                    <Route exact path="/admin/Withdrawals" component={WithdrawalsContent}></Route>
                    <Route exact path="/admin/AgentListContent" component={AgentListContent}></Route>
                    <Route exact path="/admin/OrderManagerment" component={OrderManagermentContent}></Route>
                    <Route exact path="/admin/Statistics" component={StatisticsContent}></Route>
                    <Route exact path="/admin/Setup" component={SetupContent}></Route>
                </Right>
            </div>
        )
    }
}
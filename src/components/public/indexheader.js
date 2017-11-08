import React from 'react';
import BaseComponent from "../BaseComponent"
import "../../css/public/indexheader.css"
import {Link} from "react-router-dom"

export default class IndexHeader extends BaseComponent{
    render(){
        return(
            <div className="index-header">
                <div className="portlet-title">
                    <div className="portlet-content">
                        <h1>50125.23元</h1>
                        <span>余额</span>
                        <Link to={this.props.towithdrawals} className="widthdrew">提现</Link>
                        <Link to={this.props.towithdrawalslist} className="widthdrewL">提现列表</Link>
                    </div>
                </div>
            </div>
        )
    }
}
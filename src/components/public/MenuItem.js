import React from 'react';
import {Link} from "react-router-dom"
import BaseComponent from "../BaseComponent"
/**
 * 菜单项
 */
export default class MenuItem extends BaseComponent {
    render(){
        return (<li className="tpl-left-nav-item" onClick={this.props.onClick} name={this.props.selectName}>
            <Link to={this.props.href} className={"nav-link tpl-left-nav-link-list " + (this.props.selected ? "active" : "")}>
                <i className="iconfont">{this.props.ioc}</i>
                <span>{this.props.name}</span>
            </Link>
        </li>)
    }
}
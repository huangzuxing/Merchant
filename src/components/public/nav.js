import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/public/nav.css"
import {Link} from "react-router-dom"
import BaseComponent from '../BaseComponent';

import  {demo} from './demo';
/**
 *1.左边导航
 */
export default class Nav extends BaseComponent{
    /*
    * 1.渲染Header组件和Nav组件。
    * 2.绑定事件
    *   2.1绑定点击事件在Header和Nav的图标上。
    * */
    constructor(param){
        super(param)
        this.state={
            hidden:false,
        }
    }
    // fun(){
    //     demo.a();
    // }
    render(){
        return <div className="tpl-left-nav tpl-left-nav-hover" style={{height:"100%"}} hidden={this.state.hidden}>
            <div className="tpl-left-nav-title">
                <img src="/image/Icon-19.png" alt="" />
            </div>
            <div className="tpl-left-nav-list">
                <ul className="tpl-left-nav-menu">
                    {this.props.children}
                </ul>
            </div>
        </div>;
    }
}

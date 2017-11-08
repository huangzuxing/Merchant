import React from 'react';
import {Link} from "react-router-dom"
import BaseComponent from "../BaseComponent"
/**
 * 菜单项
 */
export default class CarouselNotice extends BaseComponent {
    constructor(param){
        super(param)
        this.state = {
            id:null,
            speed:this.props.speed
        }
    }
    componentDidMount(){
        this.state.container = document.getElementById("container")
        this.state.content = document.getElementById("content")
        this.state._content = document.getElementById("_content")
        // this.mouseout()
    }
    Marquee(){
        //当滚动至colee1与colee2交界时
        if(this.state._content.offsetTop - this.state.container.scrollTop <= 0){
            this.state.container.scrollTop -= this.state.content.offsetHeight - 8; //colee跳到最顶端
        }else{
            this.state.container.scrollTop++
        }
    }
    //鼠标移上时清除定时器达到滚动停止的目的
    mouseover(){
        clearInterval(this.state.id)
    }
    //鼠标移开时重设定时器
    mouseout(){
        this.state.id = setInterval(this.Marquee.bind(this), this.state.speed)
    }
    render(){
        return (/**/
            <div className="notice-msg">
                <div className="msg-left">
                    <img src="/image/Icon-13.png" alt=""/>
                </div>
                <div id="container" style={this.props._style} onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)}>
                    <div id="content">
                        {this.props.children}
                    </div>
                    <div id="_content">
                        {this.props.children}
                    </div>
                </div>
                <div className="msg-right">
                    <img src="/image/Icon-14.png" alt=""/>
                </div>
            </div>
        )
    }
}
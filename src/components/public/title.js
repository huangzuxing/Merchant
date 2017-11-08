import React from 'react';
import BaseComponent from "../BaseComponent"
import "../../css/public/title.css"

export default class Title extends BaseComponent{
    render(){
        return(
            <div className="tpl-content-nav">
                <div className="menu">
                    <ul>
                        <li><a href="JavaScript:void(0)">{this.props.title}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
import Indexcontent from '../merchant/indexcontent.js';
import MerchantDetailsContent from '../merchant/merchantdetails_content.js'
/*
* 右边的内容组件
* */
export default class Right extends React.Component{
    render(){
        return <div className="tpl-content-wrapper">
            {this.props.children}
        </div>;
    }
}
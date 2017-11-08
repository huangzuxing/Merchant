import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/public/header.css"
import Nav from './nav.js'
/*
* 头部导航栏区
* */
class Header extends React.Component {
    render() {
        return <header className="am-topbar am-topbar-inverse admin-header">
            <div className="am-topbar-brand">
                <img src="/image/Icon-01.png" alt="" className="tpl-logo"/>
                <a href="javascript:;" className="tpl-name">{this.props.name}</a>
            </div>
            <div className="am-collapse1">
                <ul>
                    <li className="am-dropdown">
                        <a className="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
                            <span className="tpl-header-list-user-nick">禁言小张</span>
                        </a>
                    </li>
                    <li><a href="###" className="tpl-header-list-link">
                        <img src="/image/Icon-17.png" alt="" />
                    </a></li>
                </ul>
            </div>
        </header>;
    }
}
export default Header;
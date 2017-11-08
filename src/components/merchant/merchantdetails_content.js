import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/merchant/merchantDetails.css"
/*
* 商户详情内容区
* */
export default class MerchantDetailsContent extends React.Component{
    render(){
        return <div className="content-right">
                <div className="tpl-content-nav">
                    <div className="menu">
                        <ul>
                            <li><a href="JavaScript:void(0)">商户详情</a></li>
                        </ul>
                    </div>
                </div>
                <div className="am-g" style={{height:"auto"}}>
                    <div className="left">
                        <div className="merchant-information">
                            <div className="m-left">
                                <p>商户信息</p>
                            </div>
                            <div className="m-right">
                                <ul>
                                    <li>
                                        <p>商户名</p><input type="text" />
                                    </li>
                                    <li>
                                        <p>商铺简介</p><input type="text" />
                                    </li>
                                    <li>
                                        <p>商铺地址</p><input type="text" />
                                    </li>
                                    <li>
                                        <p>联系方式</p><input type="text" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="business-license">
                            <div className="m-left">
                                <p>营业执照</p>
                            </div>
                            <div className="m-right">
                                <img src="" alt=""/>
                                <div className="m-bottom">
                                    <a href="javascript:void(0)" className="preser">保存</a>
                                    <a href="javascript:void(0)" className="cancel">取消</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="merchant-map-left">
                            <p>商户地图位置</p>
                        </div>
                        <div className="merchant-map">

                        </div>
                    </div>
                </div>
            </div>
    }
}

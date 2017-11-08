import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/admin/merchantlist.css"
import BaseComponent from "../BaseComponent"
import {Link} from "react-router-dom"
/*
* 代理商商户列表
* */
export default class MerchantListcontent extends BaseComponent{
    render(){
        return (
            <div className="content-right">
                <div className="tpl-content-nav">
                    <div className="menu">
                        <ul>
                            <li><a href="JavaScript:void(0)">代理商列表</a></li>
                        </ul>
                    </div>
                </div>
                <div className="am-b-g">
                    <div className="am-header-title">
                        <h3>代理商下属商户列表</h3>
                    </div>
                    <div className="cm-table">
                        <table className="am-table am-table-hover ad-table-main">
                            <thead>
                            <tr>
                                <th>商户名</th>
                                <th>商铺简介</th>
                                <th>店铺地址</th>
                                <th>所属代理商</th>
                                <th>联系方式</th>
                                <th>营业执照</th>
                                <th>商户地图位置</th>
                                <th><div className="instruction">
                                        <div className="ins-top">暂停/注销此商户 <em>说明</em></div>
                                        <div className="ins-msg" hidden="ture">
                                            <div className="ins-title">说明</div>
                                            <div className="ins-content">“<em>暂停代理商的使用权限</em>(不可扫码开店，不可扫码支付，不可使用余额支付，不可使用余额提现，不可
                                                修改下属商家状态；下属商家正常工作)<br/><em>暂停代理商和其下属商户的使用权限</em>(代理商不可扫码开店，不可扫码支付，不可使用余额支付
                                                ，不可使用余额提现；下属商户不可扫码支付，不可使用余额支付，不可使用余额提现)”<br/><em>删除代理商并将代理商下属商户划为平台直属</em></div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="item">
                                            <div className="user-invate">
                                                <img src="" alt=""/>
                                            </div>
                                            <p className="am-user-name">赵四</p>
                                        </div>
                                      </td>
                                    <td>
                                        <div className="item">
                                            走过路过不要错过方式即可领盒饭副科级是
                                        </div>
                                        </td>
                                    <td>
                                        <div className="item">
                                            加快速度回家看书发个个好手机到空格给你加快速度接口发生的快乐复活甲
                                        </div>
                                        </td>
                                    <td><div className="item">
                                        老挤压刚回家时代光华四大皆空好几款个地方好几款
                                    </div></td>
                                    <td>1562645284</td>
                                    <td>
                                        <div className="m-business">
                                            <div className="v-business-license">
                                                查看营业执照
                                            </div>
                                            <div className="m-license" hidden="ture">
                                                <img src="" alt=""/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="map-item">
                                            <div className="v-map">
                                                查看地图
                                            </div>
                                            <div className="m-map" hidden="true"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="item">
                                            <div className="z-index">
                                                <div className="b-left">
                                                    <select name="1" id="1">
                                                        <option value="">正常</option>
                                                        <option value="">暂停</option>
                                                    </select>
                                                </div>
                                                <div className="cancellation">
                                                    <span>注销</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="am-jump">
                        <div className="sub-jump">
                            <ul>
                                <li className="j-prev"/>
                                <li><p>2/12</p></li>
                                <li className="j-next"/>
                                <li><input type="text"/></li>
                                <li className="jump">跳转</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*温馨提示*/}
                <div className="prompting" hidden="ture">
                    <div className="p-cove"></div>
                    <div className="sub-c-container">
                        <div className="c-title">
                            <h4>温馨提示</h4>
                            <div className="sub-right">
                                {/*<img src="" alt=""/>*/}
                                <em className="iconfont">&#xe641;</em>
                            </div>
                        </div>
                        <div className="c-content">
                            {/*<img src="" alt=""/>*/}
                            <em className="iconfont">&#xe6fd;</em>
                            <p>此操作会永久清除此店，确认继续？</p>
                        </div>
                        <div className="c-bottom">
                            <div className="c-left">
                                <div className="c-sure">确认</div>
                            </div>
                            <div className="c-right">
                                <div className="c-cancel">取消</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/agent/agentdetails.css"
import {Title} from "../public"
/*
* 代理商详情
* */
export default class MerchantDetailsContent extends React.Component{
    constructor(param){
        super (param)
        this.state={
            value:true,
            readonly:true,
            bordershow:false
        }
    }
    switchvalue(){
        if(this.state.value==true){
            this.setState({
                value:false,
                readonly:false
            })
        }else{
            this.setState({
                value:true,
                readonly:true
            })
        }
    }
    render(){
        return <div className="content-right">
            <Title title="代理商详情"/>
            <div className="am-g" style={{height:"auto"}}>
                <div className="bm-container">
                    <div className="left">
                        <div className="merchant-information">
                            <div className="m-left">
                                <p>代理商信息</p>
                            </div>
                            <div className="m-right">
                                <ul>
                                    <li>
                                        <p>代理商头像</p><img src="" alt=""/>
                                    </li>
                                    <li>
                                        <p>代理商名称</p><input type="text" value="123213" className={this.state.bordershow ? "" : "m-item-l"} readOnly={this.state.readonly ? true : false} />
                                    </li>
                                    <li>
                                        <p>代理地区</p><input type="text" value="123213" className="m-item-l" readOnly={this.state.readonly ? true : false} />
                                    </li>
                                    <li>
                                        <p>公司地址</p><input type="text" value="123213" className="m-item-l" readOnly={this.state.readonly ? true : false} />
                                    </li>
                                    <li>
                                        <p>联系方式</p><input type="text" value="123213" className="m-item-l" readOnly={this.state.readonly ? true : false} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="business-license">
                            <div className="m-left">

                            </div>
                            <div className="m-right">
                                <div className="license-top">
                                    <p>营业执照</p><input type="file"/>
                                </div>
                                <div className="license">
                                    <img src="" alt=""/>
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
                <div className="f-bottom">
                    <div className="sub-f-bottom">
                        <div className="f-left"></div>
                        <div className="f-right">
                            <a href="javascript:void(0)" className="preser" onClick={this.switchvalue.bind(this)}>{this.state.value ? "修改":"保存"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

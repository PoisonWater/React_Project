import React from 'react';
import config from '../../../assets/js/conf/config.js';
import "../../../assets/css/common/swiper.min.css";
import Css from '../../../assets/css/home/index/index.css';
import SearchComponent from '../../../components/search/search';
export default class  IndexComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            pageStyle:{display:"none"}
        }
    }
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    pushPage(pUrl){
        this.props.history.push(config.path+pUrl)
    }
    changeSearch(){
        this.setState({pageStyle:{display:"block"}})
    }
    getStyle(val){
        this.setState({pageStyle:val})
    }
    render(){
        return(
            <div className={Css['page']}>
                <div className={this.state.bScroll?Css['search-header']+" "+Css["red-bg"]:Css['search-header']}>
                    <div className={Css['classify-icon']} onClick={this.pushPage.bind(this, "goods/classify/items")}></div>
                    <div className={Css['search-wrap']} onClick={this.changeSearch.bind(this)}>
                        <div className={Css['search-icon']}></div>
                        <div className={Css['search-text']}>请输入宝贝名称</div>
                    </div>
                    <div className={Css['login-wrap']}>
                        <div className={Css['login-text']}>登录</div>
                    </div>
                </div>
                <SearchComponent pageStyle={this.state.pageStyle} childStyle={this.getStyle.bind(this)}></SearchComponent>
            </div>
        );
    }
}
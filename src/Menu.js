import React, { Component } from 'react';
import Counter from './Counter';

class Menu extends Component {
     
    render() {
        return (
            <div>
                <img className="logoImg" src="/images/logo.png" alt=""/>
                <div className="wrap">
                    <div className="prd-title">
                        <span className="prd-img">이미지</span>
                        <span className="prd-name">제품명</span>
                        <span className="prd-price">가격</span>
                        <span className="prd-quantity">수량</span>
                        <span className="prd-price-total">총계</span>
                    </div>
                    <Counter
                        seq = {1}
                        name = "떡볶이"
                        price = {3000}
                        url = "/images/1.png"
                        max = {10}
                        updateOrder = {this.props.updateOrder} />
                    <Counter
                        seq = {2}
                        name = "순대"
                        price = {3000}
                        url = "/images/2.png"
                        updateOrder = {this.props.updateOrder} /> 
                    <Counter
                        seq = {3}
                        name = "오뎅"
                        price = {2500}
                        url = "/images/3.png"
                        max = {20}
                        updateOrder = {this.props.updateOrder} /> 
                    <br/><br/>
                </div>
                <div className="total-all">총 계 : {this.props.orderTotal}</div>
            </div>
        );
    }
}

export default Menu;

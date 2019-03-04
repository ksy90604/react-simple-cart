import React, { Component } from 'react';
import {numberWithCommas} from './Util.js';

class Counter extends Component {

    state = {
        quantity: 0
    }

    updateQuantity = modifier => {
        // 최대 최소값 범위
        const minimum = this.props.min || 0;
        const maximum = this.props.max || Number.POSITIVE_INFINITY; // 양수 무한대

        // 업데이트된 수량의 값
        const quantity = this.state.quantity + modifier;

        // 최대 최소값 예외처리
        if (quantity < minimum || maximum < quantity) {
            return;
        }

        // state를 업데이트하고
        this.setState({
            quantity
        }, () => {
            // 2번째 인수로 콜백을 넣을 수 있다
            // setState가 완료된 시점에서 호출됨
            this.props.updateOrder({
                name: this.props.name,
                price: this.getPrice()
            });
        });
    }

    getPrice = () => {
        return this.props.price * this.state.quantity;
    }
    
    render() {
        return (
            <div className="prd-temp">
                <img className="prd-img" src={this.props.url} alt=""/>
                <span className="prd-name">{this.props.name}</span>
                <span className="prd-price">{this.props.price}</span>
                <div className="prd-btn-wrap">
                    <button className="prd-btn minus" onClick={() => this.updateQuantity(-1)}>-</button>
                    <span className="prd-quantity">{this.state.quantity} </span>
                    <button className="prd-btn plus" onClick={() => this.updateQuantity(1)}>+</button>
                </div>
                <span className="prd-price-total"> {numberWithCommas(this.getPrice())}</span>
            </div>
        );
    }
}

export default Counter;

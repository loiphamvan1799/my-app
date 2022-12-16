import React from "react";
import { Component } from "react";

const USDToVND = function (props) {
    const convert = function(usd) {
        return usd * 23632;
    };

    return (
        <div>
            <span>USD</span>
            <input
              onChange = {(e) => {
                const usd = e.target.value;
                const vnd = convert(usd);
                props.onHandleChange({
                    usd,
                    vnd
                });
              }}
              value = {props.value}
            />
        </div>
    );
};

const VNDtoUSD = function (props) {
    const convert = function(vnd) {
        return vnd / 23632;
    };

    return (
        <div>
            <span>VND </span>
            <input
              onChange = {(e) => {
                const vnd = e.target.value;
                const usd = convert(vnd);
                props.onHandleChange({
                    usd,
                    vnd
                });
              }}
              value = {props.value}
              />
        </div>
    )
}

class CurrencyExchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: 0,
            vnd: 0
        };
    }
    handleChange = (data) => {
        this.setState(data);
    }

    render() {
        return (
            <div style = {{margin: "3%"}}>
                <USDToVND onHandleChange = {this.handleChange} value = {this.state.value} />
                <VNDtoUSD onHandleChange = {this.handleChange} value = {this.state.vnd} />
                <hr />
                <code>Freetuts</code>
            </div>
        );
    }
}

export default CurrencyExchange
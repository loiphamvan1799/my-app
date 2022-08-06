import React from "react";
import PropTypes from 'prop-types';
 
class PropsValidationExample extends React.Component {
  render() {
    const {number1, number2} = this.props
    return (
      <div>
        <h1>{number1} + {number2} = {number1 + number2}</h1>
      </div>
    );
  }
}

// PropsValiationExample case validate true
PropsValidationExample.defaultProps = {
  number1: 4,
  number2: 2
}

// PropsValiationExample case validate false
//PropsValidationExample.defaultProps = {
//    number1: '4',
//   number2: '2'
//}


//Kiểm tra dữ liệu sử dụng PropTypes.
PropsValidationExample.propTypes = {
  number1: PropTypes.number,
  number2: PropTypes.number
}



export default PropsValidationExample;
import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class birthday extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} //only when value has changed
        isClearable
        renderCustomInput
      />
    );
  }
}

export default birthday;

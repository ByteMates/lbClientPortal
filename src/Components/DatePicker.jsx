import React from "react";
import DatePicker from "react-datepicker";
import "./Agents/Table.css";
import "react-datepicker/dist/react-datepicker.css";

class DatePickerComp extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        className="datePickerStyles"
      />
    );
  }
}

export default DatePickerComp;

import React, { Component, useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './ToolTip.css';

class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: undefined,
      endDay: undefined
    }
    this.getInitialState = this.getInitialState.bind();
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this)
  }
  
  getInitialState() {
    return {
      desde: undefined,
      hasta: undefined
    }
  }
  
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range);
  }

  handleResetClick = () => {
    this.setState(this.getInitialState());
  }
  
  render(){
    const {desde, hasta } = this.state;
    const mods = {start: desde, end: hasta};
    return(
      <DayPicker
        className="Selectable"
        selectedDays={[desde, {desde, hasta}]}
        modifiers={mods}
        onDayClick={this.handleDayClick}
      />
    )
  }

}

export default ToolTip;
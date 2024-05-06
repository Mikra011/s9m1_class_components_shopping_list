import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor (props) {
    super()
    this.state = {
      item: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    e.preventDefault()
    this.setState({...this.state, item: e.target.value})
  };

  // class property to submit form
  onSubmit = e => {
    e.preventDefault()
    this.props.addItem(e, this.state.item)
    this.setState({...this.state, item: ''})
  }

  

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    )
  }
}

export default ListForm;
import React, { Component } from "react";

export default class AddCustomer extends Component {
  customerData = {
    id: null,
    name: "",
    mobile: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      customer: this.customerData,
      saved: false,
    };
  }

  handleInputChange = (e) => {
    this.setState((state) => {
      state.customer[e.target.name] = e.target.value;
    });
  };

  saveCustomer = () => {
    fetch("/api/v1/customers", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.customer),
    }).then(
      () => {
        alert("");
      },
      (err) => {
        alert("error");
        console.log(err);
      }
    );
  };

  newCustomer = () => {
    this.setState((state) => {
      state.saved = true;
    });
  };

  render() {
    return (
      <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              onChange={this.handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              required
              onChange={this.handleInputChange}
              name="mobile"
            />
          </div>

          <button onClick={this.saveCustomer} className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

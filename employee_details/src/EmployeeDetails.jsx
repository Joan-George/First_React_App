import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      designation: "",
      email: "",
      address: "",
      age: "",
    };
    this.nameChangeListener = this.nameChangeListener.bind(this);
    this.emailChangeListener = this.emailChangeListener.bind(this);
    this.designationChangeListener = this.designationChangeListener.bind(this);
    this.agechangeListener = this.agechangeListener.bind(this);
    this.addressChangeListener = this.addressChangeListener.bind(this);
    this.UploadListener = this.UploadListener.bind(this);
  }
  nameChangeListener(e) {
    this.setState({ name: e.target.value });
  }
  emailChangeListener(e) {
    this.setState({ email: e.target.value });
  }
  designationChangeListener(e) {
    this.setState({ designation: e.target.value });
  }
  agechangeListener(e) {
    this.setState({ age: e.target.value });
  }
  addressChangeListener(e) {
    this.setState({ address: e.target.value });
    e.preventDefault();
  }

  UploadListener(e) {
    alert(this.state.name);
    e.preventDefault();
  }
  render() {
    return (
      <div className="container py-5 ">
        <div className="row">
          <div className="jumbotron col-sm-6">
            <form action="" onSubmit={this.UploadListener} className="col-12">
              <h1>Employee Details</h1>
              <div>
                <label for="name" className="float-left">
                  Name:
                </label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.nameChangeListener}
                  className="form-control"
                  id="name"
                />
              </div>
              <div>
                <label for="email" className="float-left">
                  Email:
                </label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.emailChangeListener}
                  className="form-control"
                  id="email"
                />
              </div>
              <div>
                <label for="designation" className="float-left">
                  Designation:
                </label>
                <input
                  type="text"
                  value={this.state.designation}
                  onChange={this.designationChangeListener}
                  className="form-control"
                  id="designation"
                />
              </div>
              <div>
                <label for="age" className="float-left">
                  Age:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  onChange={this.agechangeListener}
                  value={this.state.age}
                />
              </div>
              <div>
                <label for="address" className="float-left">
                  Address:
                </label>
                <textarea
                  className="form-control"
                  value={this.state.address}
                  id="address"
                  onChange={this.addressChangeListener}
                ></textarea>
              </div>

              <div className="py-5">
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </div>
            </form>
          </div>

          <div className=" col-sm-6">
            <Details name={this.state.name} email={this.state.email} age={this.state.age} designation={this.state.designation} address={this.state.address}/>
          </div>
        </div>
      </div>
    );
  }
}

const Details = (props) =>{
    return(
    <div className="">
        <h1 className="border border-info text-info rounded" >Details</h1>
            <div className="text-left row">
            <div class=" col-sm-6">
            <label>Name:</label><br />
            <label>Email:</label><br />
            <label>Designation:</label><br />
            <label>Age:</label><br />
            <label>Address:</label><br />
            </div>
            
            <div className="col-sm-6">
            <label>{props.name}</label>
            <br />
            <label>{props.email}</label>
            <br />
            <label>{props.designation}</label>
            <br />
            <label>{props.age}</label>
            <br />
            <label>{props.address}</label>
            <br />
            </div>
        </div>
    </div>
    )
}

export default EmployeeDetails;

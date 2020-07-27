import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.getStudents();
  };

  getStudents = () => {
    axios.get(API_URL).then((res) =>
      this.setState({
        students: res.data.sort((a, b) => a.name.localeCompare(b.name)),
      })
    );
  };

  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

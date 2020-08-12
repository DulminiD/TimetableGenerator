import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import * as firebase from 'firebase'

class Lecturer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      empID: '',
      faculty: '',
      department: '',
      level: '',
      rank: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleempID = this.handleempID.bind(this)
    this.handlefaculty = this.handlefaculty.bind(this)
    this.handledepartment = this.handledepartment.bind(this)
    this.handleLevel = this.handleLevel.bind(this)
  }

  handleName(event) {
    this.setState({
      Name: event.target.value
    })
  }

  handleempID(event) {
    this.setState({
      empID: event.target.value
    })
  }

  handlefaculty(event) {
    this.setState({
      faculty: event.target.value
    })
  }

  handledepartment(event) {
    this.setState({
      department: event.target.value
    })
  }

  handleLevel(event) {
    this.setState({
      level: event.target.value,
      rank: event.target.value + '.' + this.state.empID
    })
  }

  handleSubmit() {
    console.log(this.state.Name)
    console.log(this.state.empID)
    console.log(this.state.faculty)
    console.log(this.state.department)
    console.log(this.state.level)
    console.log(this.state.rank)
    console.log('kalaaa')

    firebase.database().ref('users/' + '102').set({
      username: 'name',
      email: 'email',
      profile_picture: 'imageUrl'
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="8">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder={this.state.Name} onChange={this.handleName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmpID">
            <Form.Label column sm="8">
              Employee ID
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder={this.state.empID} onChange={this.handleempID} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextFaculty" onChange={this.handlefaculty}>
            <Form.Label column sm="8">
              Faculty
            </Form.Label>
            <Col sm="10">
              <Form.Control as="select" placeholder={this.state.faculty}>
                <option>Faculty of Computing</option>
                <option>Faculty of Engineering</option>
                <option>Faculty of Business</option>
                <option>Faculty of Humanities and Security</option>
                <option>School of Architecture</option>
                <option>Faculty of Graduate Studies and Research</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextDepartment">
            <Form.Label column sm="8">
              Department
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder={this.state.department} onChange={this.handledepartment} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextLevel" onChange={this.handleLevel}>
            <Form.Label column sm="8">
              Level
            </Form.Label>
            <Col sm="10">
              <Form.Control as="select" placeholder={this.state.level}>
                <option>Professor</option>
                <option>Assistant Professor</option>
                <option>Senior Lecturer(HG)</option>
                <option>Senior Lecturer</option>
                <option>Lecturer</option>
                <option>Assistant Lecturer</option>
                <option>Instructor</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextRank">
            <Form.Label column sm="8">
              Rank
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder={this.state.rank} onChange={this.handleRank} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlainButton">
            <Button type="submit" className='btn' style={{ 'background-color': '#888844', color: '#fff' }} size="lg" block onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default Lecturer

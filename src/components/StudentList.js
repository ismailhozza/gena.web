import React from "react"
import { List } from 'semantic-ui-react'

import studentsService from "../services/students"

import Student from "./Student"

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        console.log("didMount")
        if(this.props.user.token) {
            studentsService.getAll(this.props.user.token).then(students => this.setState({students}))
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <List celled>
                {this.state.students.map((student) =>
                    <Student
                        student={student} key={student.id}
                    />
                )}
            </List>
        )
    }
}

export default StudentList
import React from "react"
import { List } from 'semantic-ui-react'
import coursesService from "../services/courses"
import Course from "./Course"

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        console.log("didMount")
        if(this.props.user.token) {
            coursesService.getAll(this.props.user.token).then(courses => this.setState({courses}))
        }
    }

    render() {
        return (
            <List celled>
                {this.state.courses.map((course) =>
                    <Course
                        course={course} key={course.id}
                    />
                )}
            </List>
        )
    }
}

export default CourseList
import React from "react"
import { List } from 'semantic-ui-react'

import Course from "./Course"

const courses = [
    {
        id: 1,
        name: "Frontend HTML, CSS and JavaScript",
        description: "Frontend technologies"
    },
    {
        id: 2,
        name: "Backend Node.js",
        description: "Backend programming with Node.js"
    }
]

class CourseList extends React.Component {
    render() {
        return (
            <List celled>
                {courses.map((course) =>
                    <Course
                        course={course}
                    />
                )}
            </List>
        )
    }
}

export default CourseList
import React from "react"
import { List } from 'semantic-ui-react'

const Course = ({ course }) => {
    return (
        <List.Item>
            <List.Content>
                <List.Header as="a">{course.name}</List.Header>
                An excellent companion
            </List.Content>
        </List.Item>
    )
}

export default Course
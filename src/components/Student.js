import React from "react"
import { Image, List } from 'semantic-ui-react'

const Student = ({ student }) => {
    const imgUrl = student.gender == 'f' ? '/images/girl.jpg' : '/images/boy.jpg';
    return (
        <List.Item>
            <Image avatar src={imgUrl} />
            <List.Content>
                <List.Header as="a">{student.name}</List.Header>
                An excellent companion
        </List.Content>
        </List.Item>
    )
}

export default Student
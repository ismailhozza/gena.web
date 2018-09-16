import React from "react"
import { List } from 'semantic-ui-react'
// import { connect } from "react-redux"

import Student from "./Student"

const students = [
    {
        id: 1,
        name: "Ayub",
        gender: "m"
    },
    {
        id: 1,
        name: "Ugbaad",
        gender: "f"
    }
]

class StudentList extends React.Component {
    render() {
        return (
            <List celled>
                {students.map((student) =>
                    <Student
                        student={student}
                    />
                )}
            </List>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         notes: state.notes,
//         filter: state.filter
//     }
// }

// const ConnectedNoteList = connect(
//     mapStateToProps,
//     {
//         importanceToggling
//     }
// )(NoteList)

export default StudentList
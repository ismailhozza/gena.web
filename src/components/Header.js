import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} />
                    <Menu.Item as={Link} to="/students" name='students' active={activeItem === 'students'} />
                    <Menu.Item as={Link} to="/courses" name='courses' active={activeItem === 'courses'} />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='logout'
                            as={Link}
                            to="/logout"
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

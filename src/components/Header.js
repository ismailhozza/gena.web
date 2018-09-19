import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = (props) => {
    const authed = props.isAuthed;
    const path = props.location.pathname;
    const handleLogout = props.handleLogout;

    return (
        authed ?
        <div>
            <Menu pointing secondary>
                <Menu.Item as={Link} to="/" name='home' active={path === '/home'} />
                <Menu.Item as={Link} to="/students" name='students' active={path === '/students'} />
                <Menu.Item as={Link} to="/courses" name='courses' active={path === '/courses'} />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='logout'
                        as={Link}
                        to="/logout"
                        onClick={handleLogout}
                    />
                </Menu.Menu>
            </Menu>
        </div> : null
    )
}

export default Header;
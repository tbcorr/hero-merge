import React from 'react';
import { Link } from 'react-router'

const Nav = (props) => {

    return (
        <nav>
            <ul>
                <li><Link to="/heros">Heros</Link></li>
                <li><Link to="/create-hero">Create Hero</Link></li>
                <li><Link to="/edit-hero">Edit Hero</Link></li>
                <li><Link to="/merge-hero">Merge Hero</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
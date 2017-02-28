import React from 'react';

export default class EditHeroPage extends React.Component {

    render() {

        return (
            <div>
                <h1>Edit Hero Page</h1>
                { this.props.children }
            </div>
        );
    }
}
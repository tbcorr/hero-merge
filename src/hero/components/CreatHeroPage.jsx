import React from 'react';
import { EditHero } from 'hero';

export default class CreateHeroPage extends React.Component {

    render() {

        return (
            <div>
                <h1>Create Hero Page</h1>
                <EditHero />
            </div>
        );
    }
}
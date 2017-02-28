import React from 'react';
import { SingleHero } from 'hero';

const HeroList = (props) => {

    return (
        <div>
            {props.heros.map((hero) => {
                return ([
                    <SingleHero hero={hero} />,
                    <hr />
                ]);
            })}
        </div>
    );
};

export default HeroList;
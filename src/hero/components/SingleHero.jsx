import React from 'react';

const SingleHero = (props) => {

    if(!props.hero) { 
        return null;
    }

    return (
        <div>
            <ul>
                <li><strong>Real Name:</strong> { props.hero.real_name }</li>
                <li><strong>Hero Name:</strong> { props.hero.hero_name }</li>
                <li><strong>Gender</strong> { props.hero.gender }</li>
                <li>
                    <strong>Attributes</strong>
                    <ul>
                        <li><strong>Intelligence</strong> { props.hero.attributes['intelligence'] } points</li>
                        <li><strong>Strength</strong> { props.hero.attributes['intelligence'] } points</li>
                        <li><strong>Speed</strong> { props.hero.attributes['speed'] } points</li>
                        <li><strong>Durability</strong> { props.hero.attributes['durability'] } points</li>
                        <li><strong>Power</strong> { props.hero.attributes['power'] } points</li>
                    </ul>
                </li>
                <li>
                    <strong>Powers</strong>
                    <ul>
                        { props.hero.powers.map((power) => {
                            return <li>{ power }</li>
                        })}
                    </ul>
                </li>
                <li>
                    <strong>Weaknesses</strong>
                    <ul>
                        { props.hero.weaknesses.map((weakness) => {
                            return <li>{ weakness }</li>
                        })}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SingleHero;
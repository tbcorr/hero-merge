import React from 'react';

const MergeHero = (props) => {

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="real-name"><strong>Real Name: </strong></label>
                    <input id="real-name" type="text"></input>
                </div>
                <div>
                    <label htmlFor="hero-name"><strong>Hero Name: </strong></label>
                    <input id="hero-name" type="text"></input>
                </div>
                <div>
                    <fieldset>
                        <legend><strong>Attributes</strong></legend>
                        <ul>
                            <li>
                                <strong>Intelligence</strong>
                                <label htmlFor="hero-intelligence"><strong>Select Hero</strong></label>
                                <select id="hero-intelligence">
                                    <option value="0">Select Hero</option>
                                    { props.heros.map((hero) => {
                                        return <option value={ hero.id }>{ hero.hero_name }</option>
                                    })}
                                </select>
                                <strong>Points</strong>
                            </li>
                            <li>
                                <strong>Strength</strong>
                                <label htmlFor="hero-strength"><strong>Select Hero</strong></label>
                                <select id="hero-strength">
                                    <option value="0">Select Hero</option>
                                    { props.heros.map((hero) => {
                                        return <option value={ hero.id }>{ hero.hero_name }</option>
                                    })}
                                </select>
                                <strong>Points</strong>
                            </li>
                            <li>
                                <strong>Speed</strong>
                                <label htmlFor="hero-speed"><strong>Select Hero</strong></label>
                                <select id="hero-speed">
                                    <option value="0">Select Hero</option>
                                    { props.heros.map((hero) => {
                                        return <option value={ hero.id }>{ hero.hero_name }</option>
                                    })}
                                </select>
                                <strong>Points</strong>
                            </li>
                            <li>
                                <strong>Durability</strong>
                                <label htmlFor="hero-durability"><strong>Select Hero</strong></label>
                                <select id="hero-durability">
                                    <option value="0">Select Hero</option>
                                    { props.heros.map((hero) => {
                                        return <option value={ hero.id }>{ hero.hero_name }</option>
                                    })}
                                </select>
                                <strong>Points</strong>
                            </li>
                            <li>
                                <strong>Power</strong>
                                <label htmlFor="hero-power"><strong>Select Hero</strong></label>
                                <select id="hero-power">
                                    <option value="0">Select Hero</option>
                                    { props.heros.map((hero) => {
                                        return <option value={ hero.id }>{ hero.hero_name }</option>
                                    })}
                                </select>
                                <strong>Points</strong>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend><strong>Powers</strong></legend>
                        <select id="hero-power-1">
                            <option value="0">Select Power</option>
                            { props.powers.map((power) => {
                                return <option value={ power }>{ power }</option>
                            })}
                        </select>
                        <select id="hero-power-2">
                            <option value="0">Select Power</option>
                            { props.powers.map((power) => {
                                return <option value={ power }>{ power }</option>
                            })}
                        </select>
                        <select id="hero-power-3">
                            <option value="0">Select Power</option>
                            { props.powers.map((power) => {
                                return <option value={ power }>{ power }</option>
                            })}
                        </select>
                        <select id="hero-power-4">
                            <option value="0">Select Power</option>
                            { props.powers.map((power) => {
                                return <option value={ power }>{ power }</option>
                            })}
                        </select>
                        <select id="hero-power-5">
                            <option value="0">Select Power</option>
                            { props.powers.map((power) => {
                                return <option value={ power }>{ power }</option>
                            })}
                        </select>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default MergeHero;
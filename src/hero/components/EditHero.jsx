import React from 'react';

const EditHero = (props) => {

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
                        <div>
                            <label htmlFor="intelligence"><strong>Intelligence</strong></label>
                            <input id="intelligence" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="strength"><strong>Strength</strong></label>
                            <input id="strength" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="speed"><strong>Speed</strong></label>
                            <input id="speed" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="durability"><strong>Durability</strong></label>
                            <input id="durability" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="power"><strong>Power</strong></label>
                            <input id="power" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="combat"><strong>Combat</strong></label>
                            <input id="combat" type="number"/>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend><strong>Powers</strong></legend>
                        <div>
                            <label htmlFor="intelligence"><strong>Intelligence</strong></label>
                            <input id="intelligence" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="strength"><strong>Strength</strong></label>
                            <input id="strength" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="speed"><strong>Speed</strong></label>
                            <input id="speed" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="durability"><strong>Durability</strong></label>
                            <input id="durability" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="power"><strong>Power</strong></label>
                            <input id="power" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="combat"><strong>Combat</strong></label>
                            <input id="combat" type="number"/>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <label htmlFor="powers"><strong>Powers</strong></label><br />
                    <textarea id="powers"></textarea>
                </div>
                <div>
                    <label htmlFor="weaknesses"><strong>Weaknesses</strong></label><br />
                    <textarea id="weaknesses"></textarea>
                </div>
                <button id="submit" type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditHero;
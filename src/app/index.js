import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';
import { SingleHero, CreateHeroPage, EditHeroPage, EditHero, MergeHeroPage, HerosPage } from 'hero';

export default function app() {

    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="heros" component={HerosPage}>
                    <Route path="/heros/:heroId" component={SingleHero} />
                </Route>
                <Route path="create-hero" component={CreateHeroPage} />
                <Route path="edit-hero" component={EditHeroPage}>
                    <Route path="/edit-hero/:heroId" component={EditHero} />
                </Route>
                <Route path="merge-hero" component={MergeHeroPage}/>
            </Route>
        </Router>,
        document.getElementById('root'));
}
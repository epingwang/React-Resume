/**
 * Created by wangyiping1 on 16/10/13.
 */
import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import ResumeData from '../resource/resume.json';
import MainPage from '../page/MainPage';

class ResumeRoute extends React.Component {
    render() {
        var languages = ResumeData.languages;
        var routes = [];
        for (var route in languages) {

        }
        return(
            <Router history={browserHistory}>
                <Route path="/">
                    <IndexRoute component={MainPage}/>
                    <Route path=":language" component={MainPage}/>
                </Route>
            </Router>
        )
    }
}

export default ResumeRoute;

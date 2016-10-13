/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import DateComponent from './DateComponent';
import ReactMarkdown from 'react-remarkable';
import './common.css';
import './WorkExperienceItem.css';
import './markdown.css';
/*
 * item结构:
 * {
 *     title: 'CEO/President',
 *     company: 'Pied Piper',
 *     companyUrl: 'piedpiper.com',
 *     from: 'unix时间戳*1000',
 *     to: 'unix时间戳*1000',
 *     description: 'MarkDown'
 * }
 */
class WorkExperienceItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'items': props.items
        }
    }

    render() {
        return(
            <ul className="list-unstyled clear-margin">
                {this.state.items.map(function (item) {
                    return(
                        <li key={item.company} className="card-nested">
                            <p className="clear-margin">
                                <strong>{item.title}</strong>{item.title?', ':''}<a href={item.companyUrl}>{item.company}</a>
                            </p>
                            <DateComponent from={item.from} to={item.to}/>
                            <div className="markdown-body">
                                <ReactMarkdown source={item.description}/>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default WorkExperienceItem;

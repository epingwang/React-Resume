/**
 * Created by wangyiping1 on 16/9/18.
 */
import React from 'react';
import DateComponent from './DateComponent';
import './common.css';

/*
 * {
 *     school: 'some school',
 *     degree: '',
 *     major: '',
 *     from:,
 *     to:
 * }
 */

class EducationItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items
        }
    }

    render() {
        return(
            <ul className="list-unstyled clear-margin">
                {this.state.items.map(function (item) {
                    return(
                        <li className="card-nested" key={item.school}>
                            <p className="clear-margin">{item.major + ', ' + item.degree + ', ' + item.school}</p>
                            <DateComponent from={item.from} to={item.to}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default EducationItem;

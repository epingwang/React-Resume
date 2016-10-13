/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import Tag from './Tag';
import './common.css';
import './SkillItem.css';

/*
 * item数据结构
 * {
 *     title: 'Web Development',
 *     tags: [
 *         'html',
 *         'javascript'
 *     ]
 * }
 */

class SkillItem extends React.Component {
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
                    var tags = item.tags.map(function (tag) {
                        return(<Tag text={tag} key={tag}/>)
                    });
                    return(
                        <li key={item.title} className="card-nested" style={{position: 'relative', marginBottom: '10px'}}>
                            <div className="skill-progress">
                                <div className="skill-progress-good"></div>
                            </div>
                            <div style={{
                                'display':'inline-block',
                                'left': '15px',
                                'position': 'relative'
                            }}>
                                <strong style={{
                                    'display': 'block',
                                    'marginBottom': '10px'
                                }}>{item.title}</strong>
                                {tags}
                            </div>

                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default SkillItem;

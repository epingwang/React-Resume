/**
 * Created by wangyiping1 on 16/9/18.
 */
import React from 'react';
import './Tag.css'

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': props.text
        };
    }

    render() {
        return(
            <span className="tag">
                {this.state.text}
            </span>
        );
    }
}

export default Tag;

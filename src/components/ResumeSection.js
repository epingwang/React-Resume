/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import './ResumeSection.css';

class ResumeSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'icon': props.iconSrc,
            'title': props.title,
            'subComponent': props.subComponent
        }
    }

    render() {
        return(
            <div className="resume-section">
                <div className="icon">
                    <i className="iconfont iconfont-large">{this.state.icon}</i>
                </div>
                <div className="content">
                    <h3 style={{'textAlign': 'left', 'marginBottom': '5px'}}>{this.props.title}</h3>
                    {this.state.subComponent}
                </div>
            </div>
        );
    }
}

export default ResumeSection;

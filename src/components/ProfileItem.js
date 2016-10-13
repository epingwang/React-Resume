/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import Icon from 'antd/lib/icon';
import './ProfileItem.css';
import './common.css';

class ProfileItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'iconType': props.iconType,
            'iconSrc': props.iconSrc,
            'text': props.text,
            'link': props.link
        }
    }

    render() {
        var iconElement = null;
        if (this.state.iconType) {
            iconElement = <Icon type={this.state.iconType} id="icon-element"/>;
        }
        else {
            iconElement = <img src={this.state.iconSrc}/>;
        }
        var textElement = null;
        if (this.state.link) {
            textElement = <a href={this.state.link}>{this.state.text}</a>;
        }
        else {
            textElement = <span id="profile-text">{this.state.text}</span>;
        }
        return (
            <div className="profile-item-container center-block">
                {iconElement}
                {textElement}
            </div>
        )
    }
}

export default ProfileItem;

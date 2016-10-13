/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import AvatarPlaceholder from '../resource/avatar_placeholder.png';
import './ProfileAvatar.css';
import './common.css';

class ProfileAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'imageSource': props.imageSource || AvatarPlaceholder
        };
    }

    render() {
        return(
            <div id="profile-avatar-container">
                <img src={this.state.imageSource} id="profile-avatar-image" className="center-block rounded-rect"/>
            </div>
        );
    }
}

export default ProfileAvatar;

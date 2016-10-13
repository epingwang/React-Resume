/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import {Card, Icon} from 'antd';
import './ProfileCard.css';
import ProfileAvatar from './ProfileAvatar';
import './common.css';
import ProfileItem from './ProfileItem';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'name': props.name,
            'title': props.title,
            'mobile': props.phone,
            'location': props.location,
            'email': props.email,
            'homepage': props.homepage,
            'language': props.language,
            'avatarSrc': props.avatarSrc,
            'github': props.github
        }
    }

    handleGithubClick(e) {
        e.preventDefault();
        window.location = this.state.github;
    }

    render() {
        return(
            <div id="card-container">
                <Card id="profile-card">
                    <ProfileAvatar imageSource={this.state.avatarSrc}/>
                    <h3 style={{
                        'marginTop': '20px',
                        'marginBottom': '10px'
                    }}>
                        {this.state.name}
                    </h3>
                    <h5 style={{
                        'marginTop': '10px',
                        'marginBottom': '10px'
                    }}>
                        {this.state.title}
                    </h5>
                    <hr/>
                    <ProfileItem iconType="environment" text={this.state.location}/>
                    <ProfileItem iconType="mobile" text={this.state.mobile}/>
                    <ProfileItem iconType="mail" text={this.state.email} link={this.state.email}/>
                    <ProfileItem iconType="home" text={this.state.homepage} link={this.state.homepage}/>
                    <ProfileItem iconType="message" text={this.state.language}/>
                    <hr/>
                    <div className="center-block" style={{
                        'marginTop': '20px'
                    }}>
                        <Icon type="github" style={{
                            'textAlignment': 'center',
                            'display': 'block',
                            'fontSize': '2em'
                        }} onClick={this.handleGithubClick.bind(this)}/>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ProfileCard;

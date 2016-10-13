/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import {Row, Col, Affix} from 'antd';
import ProfileCard from '../components/ProfileCard';
import ResumePage from './ResumePage';
import Footer from '../components/Footer';
import ResumeData from '../resource/resume.json';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        var route = props.params.language;
        var language = ResumeData.languages[route] || ResumeData.languages.default;
        var resume = ResumeData.resume[language];
        this.state = {
            resume: resume,
            language: language
        };
    }

    render() {
        var profileCard = <ProfileCard name={this.state.resume.name}
                                       title={this.state.resume.description}
                                       phone={this.state.resume.phone}
                                       location={this.state.resume.location}
                                       email={this.state.resume.email}
                                       homepage={this.state.resume.homepage}
                                       language={this.state.resume.language}
                                       avatarSrc={this.state.resume.avatarSrc}
                                       github={this.state.resume.github}/>;
        var profileContainer = screen.width>768?<Affix>{profileCard}</Affix>:profileCard;
        return(
            <Row>
                <Col className="gutter-row" md={6} sm={8}>
                    {profileContainer}
                </Col>
                <Col className="gutter-row" md={18} sm={16}>
                    <ResumePage resume={this.state.resume} language={this.state.language}/>
                    <Footer copyright="Eping Wang"/>
                </Col>
            </Row>
        );
    }
}

export default MainPage;

/**
 * Created by wangyiping1 on 16/9/17.
 */
import React from 'react';
import '../components/common.css';
import {Card} from 'antd';
import ResumeSection from '../components/ResumeSection';
import WorkExperienceItem from '../components/WorkExperienceItem';
import SkillItem from '../components/SkillItem';
import EducationItem from '../components/EducationItem';
import Localization from '../utils/Localization';

class ResumePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resume: props.resume,
            language: props.language
        };
    }

    render() {
        // var workExperienceItems = [
        //     {
        //         title: 'CEO/President',
        //         company: 'Pied Piper',
        //         companyUrl: 'http://piedpiper.com',
        //         from: 1234567890,
        //         to: 'Today',
        //         description: '# This is a header\n\nAnd this is a paragraph'
        //     }
        // ];
        var workExperienceItems = this.state.resume.work_experience;
        var projectItems = [];
        for (var i = 0; i < this.state.resume.personal_projects.length; i++) {
            var item = this.state.resume.personal_projects[i];
            projectItems.push({
                company: item.project,
                companyUrl: item.url,
                from: item.from,
                to: item.to,
                description: item.description
            });
        }

        var skills = this.state.resume.skills;

        var education = this.state.resume.education;

        var workExperienceItem = <WorkExperienceItem items={workExperienceItems}/>;
        var projectItem = <WorkExperienceItem items={projectItems}/>;
        var skillItem = <SkillItem items={skills}/>;
        var educationItem = <EducationItem items={education}/>;
        return(
            <div id="card-container" style={{paddingLeft: '0px'}}>
                <Card>
                    <ResumeSection title={Localization.getLocalString("WORK EXPERIENCE", this.state.language)} subComponent={workExperienceItem} iconSrc="&#xe602;"/>
                    <ResumeSection title={Localization.getLocalString("PERSONAL PROJECTS", this.state.language)} subComponent={projectItem} iconSrc="&#xe601;"/>
                    <ResumeSection title={Localization.getLocalString("SKILL", this.state.language)} subComponent={skillItem} iconSrc="&#xe604;"/>
                    <ResumeSection title={Localization.getLocalString("EDUCATION", this.state.language)} subComponent={educationItem} iconSrc="&#xe603;"/>
                </Card>
            </div>
        );
    }
}

export default ResumePage;

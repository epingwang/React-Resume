/**
 * Created by wangyiping1 on 16/9/19.
 */
import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copyright: props.copyright
        };
    }
    render() {
        var date = new Date();
        return(
            <div className="footer-container">
                <p>Copyright © {date.getFullYear()} - {this.state.copyright} - Powered by
                    <a href="https://github.com/epingwang/React-Resume" style={{
                        marginLeft: '5px'
                    }}>
                        React Resume
                    </a>
                </p>
            </div>
        );
    }
}

export default Footer;

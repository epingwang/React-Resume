/**
 * Created by wangyiping1 on 16/9/18.
 */
import React from 'react';
import './common.css';

class DateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            from: props.from,
            to: props.to
        }
    }

    render() {

        var from = new Date(this.state.from*1000);
        var fromStr = from.toLocaleDateString();
        var toStr = 'Now';
        var to = new Date();
        if (typeof(this.state.to) === "number") {
            to = new Date(this.state.to*1000);
            toStr = to.toLocaleDateString();
        }
        if (typeof(this.state.to) === "string") {
            toStr = this.state.to;
        }
        var yearScale = to.getYear() - from.getYear();
        if ((to.getMonth() - from.getMonth()) < 0) {
            yearScale -= 1;
        }
        yearScale = Math.max(yearScale, 0);
        var yearStr = '';
        if (yearScale > 0) {
            yearStr = yearScale.toString() + ' ' + (yearScale>1?'years':'year');
        }

        var monthScale = (to.getMonth() - from.getMonth() + 12) % 12;
        if ((to.getDate() - from.getDate()) < 0) {
            monthScale += 1;
        }
        var monthStr = '';
        if (monthScale > 0) {
            monthStr = monthScale.toString() + ' ' + (monthScale>1?'months':'month');
        }

        return(
            <p className="clear-margin text-muted">
                <small className="space-right">
                    {fromStr+' - '+toStr + ' '}
                    <i className="iconfont" style={{
                        margin: '0px 5px'
                    }}>&#xe600;</i>
                    {yearStr + ' ' + monthStr}
                </small>
            </p>
        );
    }
}

export default DateComponent;

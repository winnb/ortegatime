// React
import React from "react";
import "../styles/timer.scss";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString(),
        };
      }

componentDidMount() {
    this.intervalID = setInterval(
        () => this.tick(),
        1000
    );
}

componentWillUnmount() {
    clearInterval(this.intervalID);
}

tick() {
    this.setState({
        time: new Date().toLocaleString()
    });
    // Not a weekend day
    if (new Date().toDateString().substr(0,3) !== "Sat" && new Date().toDateString().substr(0,3) !== "Sun") {
        // Before any class
        if (new Date().getHours()<7) {
            document.getElementById("period").innerText = "before school";
            document.getElementById("time-block").innerText = "Period 0 starts at 7:00am!";
        }
        // 7-8am Zero Period
        if (new Date().getHours()===7) {
            document.getElementById("period").innerText = "Period 0";
            document.getElementById("time-block").innerText = "7:00am-8:00am";
        }
        // 8-8:30am Office Hours
        if (new Date().getHours()===8 && new Date().getMinutes()<30) {
            document.getElementById("period").innerText = "Office Hours";
            document.getElementById("time-block").innerText = "8:00am-8:30am";
        }
        // Mon and Thur have same schedule
        if (new Date().toDateString().substr(0,3) === "Mon" || new Date().toDateString().substr(0,3) === "Thu") {
            // 1st Period 8:30am-9:50am
            if ((new Date().getHours()===8 && new Date().getMinutes()>29) || (new Date().getHours()===9 && new Date().getMinutes()>51) ) {
                document.getElementById("period").innerText = "Period 1";
                document.getElementById("time-block").innerText = "8:30am-9:50am";
            }
            // Passing Period 9:50am-10:00am
            if (new Date().getHours()===9 && new Date().getMinutes()>50) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 3 starts at 10:00am";
            }
            // 3rd Period 10:00am-11:20am
            if (new Date().getHours()===10 || (new Date().getHours()===11 && new Date().getMinutes()<21) ) {
                document.getElementById("period").innerText = "Period 3";
                document.getElementById("time-block").innerText = "10:00am-11:20am";
            }
            // Passing Period 11:20am-11:30am
            if (new Date().getHours()===11 && new Date().getMinutes()>20 && new Date().getMinutes()<30) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 5 starts at 11:30am";
            }
            // 5th Period 11:30am-12:50pm
            if ((new Date().getHours()===11 && new Date().getMinutes()>29) || (new Date().getHours()===12 && new Date().getMinutes()<51) ) {
                document.getElementById("period").innerText = "Period 5";
                document.getElementById("time-block").innerText = "11:30am-12:50am";
            }
            // Lunch Break 12:50pm-1:50pm
            if ((new Date().getHours()===12 && new Date().getMinutes()>50) || (new Date().getHours()===13 && new Date().getMinutes()<51) ) {
                document.getElementById("period").innerText = "Lunch Break";
                document.getElementById("time-block").innerText = "12:50am-1:50pm";
            }
            // Office Hours 1:50pm-2:45pm
            if ((new Date().getHours()===13 && new Date().getMinutes()>50) || (new Date().getHours()===14 && new Date().getMinutes()<46) ) {
                document.getElementById("period").innerText = "Office Hours";
                document.getElementById("time-block").innerText = "1:50pm-2:45pm";
            }
            // Not a monday
            if (new Date().toDateString().substr(0,3) !== "Mon") {
                // 7th/8th Period 2:45pm-4:00pm
                if ((new Date().getHours()===14 && new Date().getMinutes()>45) || new Date().getHours()===15) {
                    document.getElementById("period").innerText = "Period 7";
                    document.getElementById("time-block").innerText = "2:45pm-4:00pm";
                }
                // School over
                if (new Date().getHours()>14) {
                    document.getElementById("period").innerText = "after school";
                    document.getElementById("time-block").innerText = "past 4:00pm";
                }
            }
            else
                if ((new Date().getHours()===14 && new Date().getMinutes()>45) || new Date().getHours()>14) {
                    document.getElementById("period").innerText = "after school";
                    document.getElementById("time-block").innerText = "past 4:00pm";
                }
        }
        // Tues and Fri have same schedule
        else if (new Date().toDateString().substr(0,3) === "Tue" || new Date().toDateString().substr(0,3) === "Fri") {
            // 2nd Period 8:30-9:50am
            if ((new Date().getHours()===8 && new Date().getMinutes()>29) || (new Date().getHours()===9 && new Date().getMinutes()>51) ) {
                document.getElementById("period").innerText = "Period 2";
                document.getElementById("time-block").innerText = "8:30am-9:50am";
            }
            // Passing Period 9:50am-10:00am
            if (new Date().getHours()===9 && new Date().getMinutes()>50) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 4 starts at 10:00am";
            }
            // 4th Period 10:00am-11:20am
            if (new Date().getHours()===10 || (new Date().getHours()===11 && new Date().getMinutes()<21) ) {
                document.getElementById("period").innerText = "Period 4";
                document.getElementById("time-block").innerText = "10:00am-11:20am";
            }
            // Passing Period 11:20am-11:30am
            if (new Date().getHours()===11 && new Date().getMinutes()>20 && new Date().getMinutes()<30) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 6 starts at 11:30am";
            }
            // 6th Period 11:30am-12:50pm
            if ((new Date().getHours()===11 && new Date().getMinutes()>29) || (new Date().getHours()===12 && new Date().getMinutes()<51) ) {
                document.getElementById("period").innerText = "Period 6";
                document.getElementById("time-block").innerText = "11:30am-12:50am";
            }
            // Lunch Break 12:50pm-1:50pm
            if ((new Date().getHours()===12 && new Date().getMinutes()>50) || (new Date().getHours()===13 && new Date().getMinutes()<51) ) {
                document.getElementById("period").innerText = "Lunch Break";
                document.getElementById("time-block").innerText = "12:50am-1:50pm";
            }
            // Office Hours 1:50pm-2:45pm
            if ((new Date().getHours()===13 && new Date().getMinutes()>50) || (new Date().getHours()===14 && new Date().getMinutes()<46) ) {
                document.getElementById("period").innerText = "Office Hours";
                document.getElementById("time-block").innerText = "1:50pm-2:45pm";
            }
            // 7th/8th Period
            if ((new Date().getHours()===14 && new Date().getMinutes()>45) || new Date().getHours()===15) {
                document.getElementById("period").innerText = "Period 8";
                document.getElementById("time-block").innerText = "2:45pm-4:00pm";
            }
            // School over
            if (new Date().getHours()>14) {
                document.getElementById("period").innerText = "after school";
                document.getElementById("time-block").innerText = "past 4:00pm";
            }                                                                                                                                          
        }
        // Wed schedule
        else if (new Date().toDateString().substr(0,3) === "Wed") {
            // 1st Period 8:30am-9:10am
            if ((new Date().getHours()===8 && new Date().getMinutes()>29) || (new Date().getHours()===9 && new Date().getMinutes()<11) ) {
                document.getElementById("period").innerText = "Period 1";
                document.getElementById("time-block").innerText = "8:30am-9:10am";
            }
            // Passing Period 9:10am-9:15am
            if (new Date().getHours()===9 && new Date().getMinutes()>10 && new Date().getMinutes()<15) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 2 starts at 9:15am";
            }
            // 2nd Period 9:15am-9:50am
            if (new Date().getHours()===9 && new Date().getMinutes()>14 && new Date().getMinutes()<51) {
                document.getElementById("period").innerText = "Period 2";
                document.getElementById("time-block").innerText = "9:15am-9:50am";
            }
            // Passing Period 9:50am-10:00am
            if (new Date().getHours()===9 && new Date().getMinutes()>50) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 3 starts at 10:00am";
            }
            // 3rd Period 10:00am-10:40am
            if (new Date().getHours()===10 && new Date().getMinutes()<40) {
                document.getElementById("period").innerText = "Period 3";
                document.getElementById("time-block").innerText = "10:00am-10:40am";
            }
            // Passing Period 10:40am-10:45am
            if (new Date().getHours()===10 && new Date().getMinutes()>40 && new Date().getMinutes()<45) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 4 starts at 10:45am";
            }
            // 4th Period 10:45am-11:20am
            if ((new Date().getHours()===10 && new Date().getMinutes()>44) || (new Date().getHours()===11 && new Date().getMinutes()<21) ) {
                document.getElementById("period").innerText = "Period 4";
                document.getElementById("time-block").innerText = "10:45am-11:20am";
            }
            // Passing Period 11:20am-11:30am
            if (new Date().getHours()===11 && new Date().getMinutes()>20 && new Date().getMinutes()<30) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 5 starts at 11:30am";
            }
            // 5th Period 11:30am-12:10pm
            if ((new Date().getHours()===11 && new Date().getMinutes()>29) || (new Date().getHours()===12 && new Date().getMinutes()<6) ) {
                document.getElementById("period").innerText = "Period 5";
                document.getElementById("time-block").innerText = "11:30am-12:10pm";
            }
            // Passing Period 12:10pm-12:15pm
            if (new Date().getHours()===12 && new Date().getMinutes()>5 && new Date().getMinutes()<15) {
                document.getElementById("period").innerText = "Passing Period";
                document.getElementById("time-block").innerText = "Period 6 starts at 12:15pm";
            }
            // 6th Period 12:15pm-12:50pm
            if (new Date().getHours()===12 && new Date().getMinutes()>14 && new Date().getMinutes()<51) {
                document.getElementById("period").innerText = "Period 6";
                document.getElementById("time-block").innerText = "12:15pm-12:50pm";
            }
            // Lunch Break 12:50pm-1:50pm
            if ((new Date().getHours()===12 && new Date().getMinutes()>50) || (new Date().getHours()===13 && new Date().getMinutes()<51) ) {
                document.getElementById("period").innerText = "Lunch Break";
                document.getElementById("time-block").innerText = "12:50am-1:50pm";
            }
            if ((new Date().getHours()===13 && new Date().getMinutes()>50) || (new Date().getHours()===14 && new Date().getMinutes()<46) ) {
                document.getElementById("period").innerText = "Office Hours";
                document.getElementById("time-block").innerText = "1:50pm-2:45pm";
            }
            // Not a monday
            if ((new Date().getHours()===14 && new Date().getMinutes()>45) || new Date().getHours()===15) {
                document.getElementById("period").innerText = "Period 7/8";
                document.getElementById("time-block").innerText = "2:45pm-4:00pm";
            }
            if (new Date().getHours()>14) {
                document.getElementById("period").innerText = "after school";
                document.getElementById("time-block").innerText = "past 4:00pm";
            }
        }
    }
    // Sat or Sun
    else {
        document.getElementById("period").innerText = "the weekend";
        document.getElementById("time-block").innerText = "See you soon!";
    }
}



render() {
  return (
    <div>
        <div className="clock">{this.state.time}</div>
        <div className="clock-block" id="period">It is currently...</div>
        <div className="clock-block" id="time-block"></div>
    </div>
    
  );
}
}
export default Timer;
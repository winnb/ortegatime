// React
import React from "react";
import "../styles/timer.scss";
//import Finals from "../media/finals.jpg";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          endHour: 0,
          endMinutes: 0
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
    var now = new Date();
    var timeLength = now.toLocaleTimeString().length;
    this.setState({ time: now.toDateString()+" "+now.toLocaleTimeString().substr(0,timeLength-6)+" "+now.toLocaleTimeString().substr(timeLength-2,timeLength) });
    
    if (!this.isFinals(now)) {
        this.weekday(now);
        this.weekend(now);  
    }
    else
        this.finals(now)
    
    this.countdown(now);
}

isFinals(now) {
    if (now.getMonth()===11 && now.getDate()==14 && now.getYear()===120)
        return true;
    else if (now.getMonth()===11 && now.getDate()==15 && now.getYear()===120)
        return true;
    else if (now.getMonth()===11 && now.getDate()==16 && now.getYear()===120)
        return true;
    else if (now.getMonth()===11 && now.getDate()==17 && now.getYear()===120)
        return true;
    else if (now.getMonth()===11 && now.getDate()==18 && now.getYear()===120)
        return true;
    else
        return false;
}

weekday(now) { // Mon-Fri
    if (now.toDateString().substr(0,3) !== "Sat" && now.toDateString().substr(0,3) !== "Sun") {
        this.morning(now);
        this.mondayThursday(now);
        this.tuesdayFriday(now);
        this.wednesday(now);
    }
}

weekend(now) { // Sat or Sun
    if (now.toDateString().substr(0,3) === "Sat" || now.toDateString().substr(0,3) === "Sun") {
        document.getElementById("period").innerText = "your weekend";
        document.getElementById("time-block").innerText = "See you soon!";
    }
}

morning(now) {
    // Before any class
    if (now.getHours()<7) {
        document.getElementById("period").innerText = "before school";
        document.getElementById("time-block").innerText = "Period 0 starts at 7:00am!";
        this.setState({endHour: 7, endMinutes: 0});
    }
    // 7-8am Zero Period
    if (now.getHours()===7) {
        document.getElementById("period").innerText = "Period 0";
        document.getElementById("time-block").innerText = "7:00am-8:00am";
        this.setState({endHour: 8, endMinutes: 0});
    }
    // 8-8:30am Office Hours
    if (now.getHours()===8 && now.getMinutes()<30) {
        document.getElementById("period").innerText = "Office Hours";
        document.getElementById("time-block").innerText = "8:00am-8:30am";
        this.setState({endHour: 8, endMinutes: 30});
    }
}

mondayThursday(now) {
    // Mon and Thur have same schedule
    if (now.toDateString().substr(0,3) === "Mon" || now.toDateString().substr(0,3) === "Thu") {
        // 1st Period 8:30am-9:50am
        if ((now.getHours()===8 && now.getMinutes()>29) || (now.getHours()===9 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Period 1";
            document.getElementById("time-block").innerText = "8:30am-9:50am";
            this.setState({endHour: 9, endMinutes: 50});
        }
        // Passing Period 9:50am-10:00am
        if (now.getHours()===9 && now.getMinutes()>49) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 3 starts at 10:00am";
            this.setState({endHour: 10, endMinutes: 0});
        }
        // 3rd Period 10:00am-11:20am
        if (now.getHours()===10 || (now.getHours()===11 && now.getMinutes()<19) ) {
            document.getElementById("period").innerText = "Period 3";
            document.getElementById("time-block").innerText = "10:00am-11:20am";
            this.setState({endHour: 11, endMinutes: 20});
        }
        // Passing Period 11:20am-11:30am
        if (now.getHours()===11 && now.getMinutes()>19 && now.getMinutes()<30) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 5 starts at 11:30am";
            this.setState({endHour: 11, endMinutes: 30});
        }
        // 5th Period 11:30am-12:50pm
        if ((now.getHours()===11 && now.getMinutes()>29) || (now.getHours()===12 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Period 5";
            document.getElementById("time-block").innerText = "11:30am-12:50am";
            this.setState({endHour: 12, endMinutes: 50});
        }
        // Lunch Break 12:50pm-1:50pm
        if ((now.getHours()===12 && now.getMinutes()>49) || (now.getHours()===13 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Lunch Break";
            document.getElementById("time-block").innerText = "12:50am-1:50pm";
            this.setState({endHour: 13, endMinutes: 50});
        }
        // Office Hours 1:50pm-2:45pm
        if ((now.getHours()===13 && now.getMinutes()>49) || (now.getHours()===14 && now.getMinutes()<45) ) {
            document.getElementById("period").innerText = "Office Hours";
            document.getElementById("time-block").innerText = "1:50pm-2:45pm";
            this.setState({endHour: 14, endMinutes: 45});
        }
        // Not a monday
        if (now.toDateString().substr(0,3) !== "Mon") {
            // 7th/8th Period 2:45pm-4:00pm
            if ((now.getHours()===14 && now.getMinutes()>44) || now.getHours()===15) {
                document.getElementById("period").innerText = "Period 7";
                document.getElementById("time-block").innerText = "2:45pm-4:00pm";
                this.setState({endHour: 16, endMinutes: 0});
            }
            // School over
            if (now.getHours()>14) {
                document.getElementById("period").innerText = "After School";
                document.getElementById("time-block").innerText = "Currently Past 4:00pm";
                this.setState({endHour: 99, endMinutes: 0});
            }
        }
        else
            if ((now.getHours()===14 && now.getMinutes()>44) || now.getHours()>14) {
                document.getElementById("period").innerText = "After School";
                document.getElementById("time-block").innerText = "Currently Past 4:00pm";
                this.setState({endHour: 99, endMinutes: 0});
            }
    }
}

tuesdayFriday(now) {
    // Tues and Fri have same schedule
    if (now.toDateString().substr(0,3) === "Tue" || now.toDateString().substr(0,3) === "Fri") {
        // 2nd Period 8:30-9:50am
        if ((now.getHours()===8 && now.getMinutes()>29) || (now.getHours()===9 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Period 2";
            document.getElementById("time-block").innerText = "8:30am-9:50am";
            this.setState({endHour: 9, endMinutes: 50});
        }
        // Passing Period 9:50am-10:00am
        if (now.getHours()===9 && now.getMinutes()>49) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 4 starts at 10:00am";
            this.setState({endHour: 10, endMinutes: 0});
        }
        // 4th Period 10:00am-11:20am
        if (now.getHours()===10 || (now.getHours()===11 && now.getMinutes()<20) ) {
            document.getElementById("period").innerText = "Period 4";
            document.getElementById("time-block").innerText = "10:00am-11:20am";
            this.setState({endHour: 11, endMinutes: 20});
        }
        // Passing Period 11:20am-11:30am
        if (now.getHours()===11 && now.getMinutes()>19 && now.getMinutes()<30) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 6 starts at 11:30am";
            this.setState({endHour: 11, endMinutes: 30});
        }
        // 6th Period 11:30am-12:50pm
        if ((now.getHours()===11 && now.getMinutes()>29) || (now.getHours()===12 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Period 6";
            document.getElementById("time-block").innerText = "11:30am-12:50am";
            this.setState({endHour: 15, endMinutes: 50});
        }
        // Lunch Break 12:50pm-1:50pm
        if ((now.getHours()===12 && now.getMinutes()>49) || (now.getHours()===13 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Lunch Break";
            document.getElementById("time-block").innerText = "12:50am-1:50pm";
            this.setState({endHour: 13, endMinutes: 50});
        }
        // Office Hours 1:50pm-2:45pm
        if ((now.getHours()===13 && now.getMinutes()>49) || (now.getHours()===14 && now.getMinutes()<45) ) {
            document.getElementById("period").innerText = "Office Hours";
            document.getElementById("time-block").innerText = "1:50pm-2:45pm";
            this.setState({endHour: 14, endMinutes: 45});
        }
        // 7th/8th Period
        if ((now.getHours()===14 && now.getMinutes()>44) || now.getHours()===15) {
            document.getElementById("period").innerText = "Period 8";
            document.getElementById("time-block").innerText = "2:45pm-4:00pm";
            this.setState({endHour: 16, endMinutes: 0});
        }
        // School over
        if (now.getHours()>14) {
            document.getElementById("period").innerText = "After School";
            document.getElementById("time-block").innerText = "Currently Past 4:00pm";
            this.setState({endHour: 99, endMinutes: 0});
        }                                                                                                                                          
    }
}

wednesday(now) {
    // Wed schedule
    if (now.toDateString().substr(0,3) === "Wed") {
        // 1st Period 8:30am-9:10am
        if ((now.getHours()===8 && now.getMinutes()>29) || (now.getHours()===9 && now.getMinutes()<10) ) {
            document.getElementById("period").innerText = "Period 1";
            document.getElementById("time-block").innerText = "8:30am-9:10am";
            this.setState({endHour: 9, endMinutes: 10});
        }
        // Passing Period 9:10am-9:15am
        if (now.getHours()===9 && now.getMinutes()>9 && now.getMinutes()<15) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 2 starts at 9:15am";
            this.setState({endHour: 9, endMinutes: 15});
        }
        // 2nd Period 9:15am-9:50am
        if (now.getHours()===9 && now.getMinutes()>14 && now.getMinutes()<50) {
            document.getElementById("period").innerText = "Period 2";
            document.getElementById("time-block").innerText = "9:15am-9:50am";
            this.setState({endHour: 9, endMinutes: 50});
        }
        // Passing Period 9:50am-10:00am
        if (now.getHours()===9 && now.getMinutes()>49) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 3 starts at 10:00am";
            this.setState({endHour: 10, endMinutes: 0});
        }
        // 3rd Period 10:00am-10:40am
        if (now.getHours()===10 && now.getMinutes()<40) {
            document.getElementById("period").innerText = "Period 3";
            document.getElementById("time-block").innerText = "10:00am-10:40am";
            this.setState({endHour: 10, endMinutes: 40});
        }
        // Passing Period 10:40am-10:45am
        if (now.getHours()===10 && now.getMinutes()>39 && now.getMinutes()<45) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 4 starts at 10:45am";
            this.setState({endHour: 10, endMinutes: 45});
        }
        // 4th Period 10:45am-11:20am
        if ((now.getHours()===10 && now.getMinutes()>44) || (now.getHours()===11 && now.getMinutes()<20) ) {
            document.getElementById("period").innerText = "Period 4";
            document.getElementById("time-block").innerText = "10:45am-11:20am";
            this.setState({endHour: 11, endMinutes: 20});
        }
        // Passing Period 11:20am-11:30am
        if (now.getHours()===11 && now.getMinutes()>20 && now.getMinutes()<30) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 5 starts at 11:30am";
            this.setState({endHour: 11, endMinutes: 30});
        }
        // 5th Period 11:30am-12:10pm
        if ((now.getHours()===11 && now.getMinutes()>29) || (now.getHours()===12 && now.getMinutes()<10) ) {
            document.getElementById("period").innerText = "Period 5";
            document.getElementById("time-block").innerText = "11:30am-12:10pm";
            this.setState({endHour: 12, endMinutes: 10});
        }
        // Passing Period 12:10pm-12:15pm
        if (now.getHours()===12 && now.getMinutes()>9 && now.getMinutes()<15) {
            document.getElementById("period").innerText = "Passing Period";
            document.getElementById("time-block").innerText = "Period 6 starts at 12:15pm";
            this.setState({endHour: 12, endMinutes: 15});
        }
        // 6th Period 12:15pm-12:50pm
        if (now.getHours()===12 && now.getMinutes()>14 && now.getMinutes()<50) {
            document.getElementById("period").innerText = "Period 6";
            document.getElementById("time-block").innerText = "12:15pm-12:50pm";
            this.setState({endHour: 12, endMinutes: 50});
        }
        // Lunch Break 12:50pm-1:50pm
        if ((now.getHours()===12 && now.getMinutes()>49) || (now.getHours()===13 && now.getMinutes()<50) ) {
            document.getElementById("period").innerText = "Lunch Break";
            document.getElementById("time-block").innerText = "12:50am-1:50pm";
            this.setState({endHour: 13, endMinutes: 50});
        }
        if ((now.getHours()===13 && now.getMinutes()>49) || (now.getHours()===14 && now.getMinutes()<45) ) {
            document.getElementById("period").innerText = "Office Hours";
            document.getElementById("time-block").innerText = "1:50pm-2:45pm";
            this.setState({endHour: 14, endMinutes: 45});
        }
        // Not a monday
        if ((now.getHours()===14 && now.getMinutes()>44) || now.getHours()===15) {
            document.getElementById("period").innerText = "Period 7/8";
            document.getElementById("time-block").innerText = "2:45pm-4:00pm";
            this.setState({endHour: 16, endMinutes: 0});
        }
        if (now.getHours()>14) {
            document.getElementById("period").innerText = "After School";
            document.getElementById("time-block").innerText = "Currently Past 4:00pm";
            this.setState({endHour: 99, endMinutes: 0});
        }
    }
}

finals(now) {
    // Monday finals schedule same as normal wednesday
    if (now.getMonth()===11 && now.getDate()==14 && now.getYear()===120)
        this.finalsMonday(now);
    else if (now.getMonth()===11 && now.getDate()==15 && now.getYear()===120)
        this.finalsTuesday(now);
    else if (now.getMonth()===11 && now.getDate()==16 && now.getYear()===120)
        this.finalsWednesday(now);
    else if (now.getMonth()===11 && now.getDate()==17 && now.getYear()===120)
        this.finalsThursday(now);
    else if (now.getMonth()===11 && now.getDate()==18 && now.getYear()===120)
        this.finalsFriday(now);
    else
        document.getElementById("finals-block").style.display = "None";
}

finalsMonday(now) {
    // 1st Period 8:30am-9:10am
    if ((now.getHours()===8 && now.getMinutes()>29) || (now.getHours()===9 && now.getMinutes()<10) ) {
        document.getElementById("period").innerText = "Period 1";
        document.getElementById("time-block").innerText = "8:30am-9:10am";
        this.setState({endHour: 9, endMinutes: 10});
    }
    // Passing Period 9:10am-9:15am
    if (now.getHours()===9 && now.getMinutes()>9 && now.getMinutes()<15) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 2 starts at 9:15am";
        this.setState({endHour: 9, endMinutes: 15});
    }
    // 2nd Period 9:15am-9:50am
    if (now.getHours()===9 && now.getMinutes()>14 && now.getMinutes()<50) {
        document.getElementById("period").innerText = "Period 2";
        document.getElementById("time-block").innerText = "9:15am-9:50am";
        this.setState({endHour: 9, endMinutes: 50});
    }
    // Passing Period 9:50am-10:00am
    if (now.getHours()===9 && now.getMinutes()>49) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 3 starts at 10:00am";
        this.setState({endHour: 10, endMinutes: 0});
    }
    // 3rd Period 10:00am-10:40am
    if (now.getHours()===10 && now.getMinutes()<40) {
        document.getElementById("period").innerText = "Period 3";
        document.getElementById("time-block").innerText = "10:00am-10:40am";
        this.setState({endHour: 10, endMinutes: 40});
    }
    // Passing Period 10:40am-10:45am
    if (now.getHours()===10 && now.getMinutes()>39 && now.getMinutes()<45) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 4 starts at 10:45am";
        this.setState({endHour: 10, endMinutes: 45});
    }
    // 4th Period 10:45am-11:20am
    if ((now.getHours()===10 && now.getMinutes()>44) || (now.getHours()===11 && now.getMinutes()<20) ) {
        document.getElementById("period").innerText = "Period 4";
        document.getElementById("time-block").innerText = "10:45am-11:20am";
        this.setState({endHour: 11, endMinutes: 20});
    }
    // Passing Period 11:20am-11:30am
    if (now.getHours()===11 && now.getMinutes()>20 && now.getMinutes()<30) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 5 starts at 11:30am";
        this.setState({endHour: 11, endMinutes: 30});
    }
    // 5th Period 11:30am-12:10pm
    if ((now.getHours()===11 && now.getMinutes()>29) || (now.getHours()===12 && now.getMinutes()<10) ) {
        document.getElementById("period").innerText = "Period 5";
        document.getElementById("time-block").innerText = "11:30am-12:10pm";
        this.setState({endHour: 12, endMinutes: 10});
    }
    // Passing Period 12:10pm-12:15pm
    if (now.getHours()===12 && now.getMinutes()>9 && now.getMinutes()<15) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 6 starts at 12:15pm";
        this.setState({endHour: 12, endMinutes: 15});
    }
    // 6th Period 12:15pm-12:50pm
    if (now.getHours()===12 && now.getMinutes()>14 && now.getMinutes()<50) {
        document.getElementById("period").innerText = "Period 6";
        document.getElementById("time-block").innerText = "12:15pm-12:50pm";
        this.setState({endHour: 12, endMinutes: 50});
    }
    // Lunch Break 12:50pm-1:50pm
    if ((now.getHours()===12 && now.getMinutes()>49) || (now.getHours()===13 && now.getMinutes()<50) ) {
        document.getElementById("period").innerText = "Lunch Break";
        document.getElementById("time-block").innerText = "12:50am-1:50pm";
        this.setState({endHour: 13, endMinutes: 50});
    }
    if ((now.getHours()===13 && now.getMinutes()>49) || (now.getHours()===14 && now.getMinutes()<45) ) {
        document.getElementById("period").innerText = "Office Hours";
        document.getElementById("time-block").innerText = "1:50pm-2:45pm";
        this.setState({endHour: 14, endMinutes: 45});
    }
    // Not a monday
    if ((now.getHours()===14 && now.getMinutes()>44) || now.getHours()===15) {
        document.getElementById("period").innerText = "Period 7/8";
        document.getElementById("time-block").innerText = "2:45pm-4:00pm";
        this.setState({endHour: 16, endMinutes: 0});
    }
    if (now.getHours()>14) {
        document.getElementById("period").innerText = "After School";
        document.getElementById("time-block").innerText = "Currently Past 4:00pm";
        this.setState({endHour: 99, endMinutes: 0});
    }
}

finalsTuesday(now) {
    // Before finals
    if (now.getHours()===8 && now.getMinutes()<30 || now.getHours()<8) {
        document.getElementById("period").innerText = "Before Finals";
        document.getElementById("time-block").innerText = "Period 6 Final starts at 8:30am";
        this.setState({endHour: 8, endMinutes: 30});
    }
    // 6th Period Final 8:30am-10:30am
    if ((now.getHours()===8 && now.getMinutes()>29) || now.getHours()===9 || (now.getHours()===10 && now.getMinutes()<30) ) {
        document.getElementById("period").innerText = "Period 6 Final Exam";
        document.getElementById("time-block").innerText = "8:30am-10:30am";
        this.setState({endHour: 10, endMinutes: 30});
    }
    // Passing Period 10:30am-10:50am
    if (now.getHours()===10 && now.getMinutes()>29 && now.getMinutes()<50) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 5 Final starts at 10:50am";
        this.setState({endHour: 10, endMinutes: 50});
    }
    // 5th Period Final 10:50am-12:50pm
    if ( (now.getHours()===10 && now.getMinutes()>49) || now.getHours()===11 || (now.getHours()===12 && now.getMinutes()<50) ) {
        document.getElementById("period").innerText = "Period 5 Final Exam";
        document.getElementById("time-block").innerText = "10:50am-12:50pm";
        this.setState({endHour: 12, endMinutes: 50});
    }
    // After finals
    if (now.getHours()===12 && now.getMinutes()>49 || now.getHours()>12) {
        document.getElementById("period").innerText = "After Finals";
        document.getElementById("time-block").innerText = "Period 4 Final starts at 8:30am tomorrow";
        this.setState({endHour: 23, endMinutes: 59});
    }
}

finalsWednesday(now) {
    // Before finals
    if (now.getHours()===8 && now.getMinutes()<30 || now.getHours()<8) {
        document.getElementById("period").innerText = "Before Finals";
        document.getElementById("time-block").innerText = "Period 4 Final starts at 8:30am";
        this.setState({endHour: 8, endMinutes: 30});
    }
    // 4th Period Final 8:30am-10:30am
    if ((now.getHours()===8 && now.getMinutes()>29) || now.getHours()===9 || (now.getHours()===10 && now.getMinutes()<30) ) {
        document.getElementById("period").innerText = "Period 4 Final Exam";
        document.getElementById("time-block").innerText = "8:30am-10:30am";
        this.setState({endHour: 10, endMinutes: 30});
    }
    // Passing Period 10:30am-10:50am
    if (now.getHours()===10 && now.getMinutes()>29 && now.getMinutes()<50) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 3 Final starts at 10:50am";
        this.setState({endHour: 10, endMinutes: 50});
    }
    // 3rd Period Final 10:50am-12:50pm
    if ( (now.getHours()===10 && now.getMinutes()>49) || now.getHours()===11 || (now.getHours()===12 && now.getMinutes()<50) ) {
        document.getElementById("period").innerText = "Period 3 Final Exam";
        document.getElementById("time-block").innerText = "10:50am-12:50pm";
        this.setState({endHour: 12, endMinutes: 50});
    }
    // After finals
    if (now.getHours()===12 && now.getMinutes()>49 || now.getHours()>12) {
        document.getElementById("period").innerText = "After Finals";
        document.getElementById("time-block").innerText = "Period 2 Final starts at 8:30am tomorrow";
        this.setState({endHour: 23, endMinutes: 59});
    }
}

finalsThursday(now) {
    // Before finals
    if (now.getHours()===8 && now.getMinutes()<30 || now.getHours()<8) {
        document.getElementById("period").innerText = "Before Finals";
        document.getElementById("time-block").innerText = "Period 2 Final starts at 8:30am";
        this.setState({endHour: 8, endMinutes: 30});
    }
    // 2nd Period Final 8:30am-10:30am
    if ((now.getHours()===8 && now.getMinutes()>29) || now.getHours()===9 || (now.getHours()===10 && now.getMinutes()<30) ) {
        document.getElementById("period").innerText = "Period 2 Final Exam";
        document.getElementById("time-block").innerText = "8:30am-10:30am";
        this.setState({endHour: 10, endMinutes: 30});
    }
    // Passing Period 10:30am-10:50am
    if (now.getHours()===10 && now.getMinutes()>29 && now.getMinutes()<50) {
        document.getElementById("period").innerText = "Passing Period";
        document.getElementById("time-block").innerText = "Period 1 Final starts at 10:50am";
        this.setState({endHour: 10, endMinutes: 50});
    }
    // 1st Period Final 10:50am-12:50pm
    if ( (now.getHours()===10 && now.getMinutes()>49) || now.getHours()===11 || (now.getHours()===12 && now.getMinutes()<50) ) {
        document.getElementById("period").innerText = "Period 1 Final Exam";
        document.getElementById("time-block").innerText = "10:50am-12:50pm";
        this.setState({endHour: 12, endMinutes: 50});
    }
    // After finals
    if (now.getHours()===12 && now.getMinutes()>49 || now.getHours()>12) {
        document.getElementById("period").innerText = "After Finals";
        document.getElementById("time-block").innerText = "Congratulations, You are done with finals!";
        this.setState({endHour: 23, endMinutes: 59});
    }
}

finalsFriday(now) {
    // After all finals
    document.getElementById("period").innerText = "After Finals";
    document.getElementById("time-block").innerText = "No school today. Enjoy your break!";
    this.setState({endHour: 23, endMinutes: 59});
}

countdown(now) {
    // Countdown
    var periodEnd = new Date();
    periodEnd.setHours(this.state.endHour);
    periodEnd.setMinutes(this.state.endMinutes);
    periodEnd.setSeconds(0);
    var minutes = 99;
    if (periodEnd.getHours() === now.getHours())
        minutes = periodEnd.getMinutes()-now.getMinutes()-1;
    else if (periodEnd.getHours() === now.getHours()+1)
        minutes = periodEnd.getMinutes()-now.getMinutes()-1+60;
    var seconds = 60-now.getSeconds()-periodEnd.getSeconds();
    if (seconds < 10)
        seconds = "0"+seconds.toString();
    document.getElementById("countdown").innerText = minutes+":"+seconds+" until end of period";
    // Adjust to reveal countdown
    if (minutes<120)
        document.getElementById("countdown").style.display = "flex";
    else
        document.getElementById("countdown").style.display = "none";
}

countdownColor(now) { // Not sure how useful this is
    if (now.getSeconds()%2==0)
        document.getElementById("countdown").style.backgroundColor = "rgba(255, 30, 30, 0.75)";
    else if (now.getSeconds()%2==1)
        document.getElementById("countdown").style.backgroundColor = "rgba(220, 40, 40, 0.75)";
}

render() {
  return (
    <div id="timer-elements" align="center">
        <div className="clock-div">
            <span id="current">{this.state.time}</span>
            <div id="period"></div>
            <div id="time-block"></div>
            <div id="countdown"></div>
        </div>
        {/* <div id="finals-block">
            <div id="finals-week">Finals Week</div>
            <img id="finals" src={Finals} alt="Finals schedule fall 2020"></img>
        </div> */}
    </div>
  );
}
}
export default Timer;
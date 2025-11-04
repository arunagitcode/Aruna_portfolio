import React from "react";
import ReactDOM from "react-dom/client";
import "./time.css";

class Time extends React.Component {
    render() {
      
    // const fetchdate = () => {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
    // };

    // setTimeout(fetchdate, 1000);

    const msg =
      hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Night";

    const color =
      msg === "Good Morning"
        ? "red"
        : msg === "Good Afternoon"
        ? "orange"
        : "black";

    return (
      <div className="container">
        <div className="small_container">
          <h1>Hello</h1>
          <h1>
            <span style={{ color }}>{msg}</span>
          </h1>
          <p className="time_cont">
            {hour}:{min}:{sec}
          </p>
        </div>
      </div>
    );
  }
}

export default Time;

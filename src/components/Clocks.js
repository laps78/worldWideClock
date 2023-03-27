import { useState, useEffect } from 'react';
import timezones from './timezones';
import displayClockOnCanvas from '../scripts/displayClockOnCanvas';

function Clocks({ id, name, timezone, deleteClocks }) {
  const [timeString, setTimeString] = useState('');
  const [timeElements, setTimeElements] = useState('');
  
  const Clock = ({ hours, minutes, seconds }) => {
    const [time, setTime] = useState({ hours, minutes, seconds });
  
    return (
      <div>
        <svg width="300" height="300">
          <circle
            r="145"
            cx="150"
            cy="150"
            fill="white"
            stroke="black"
            stroke-width="3"
          />
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="60"
            stroke="black"
            stroke-width="4"
            transform={`rotate(${time.hours * 30} 150 150)`}
          />
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="50"
            stroke="black"
            stroke-width="3"
            transform={`rotate(${time.minutes * 6} 150 150)`}
          />
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="40"
            stroke="red"
            stroke-width="2"
            transform={`rotate(${time.seconds * 6} 150 150)`}
          />
        </svg>
      </div>
    );
  };
  

  let clockHandDegrees = {};
  const makeClocks = () => {
    const date = new Date();
    const targetTime = new Date(getTargetTime(date));
    const timeElements = getTimeElements(targetTime);
    setTimeElements(timeElements);
    setTimeString(getTimeString(targetTime));
    clockHandDegrees = calculateStartDegrees(getTimeElements(targetTime));
    // console.log(clockHandDegrees);
    // console.log(`rotate(${clockHandDegrees.hoursStartDegree}deg)`);
    // console.log(`rotate(${clockHandDegrees.minutesStartDegree}deg)`);
    // console.log(`rotate(${clockHandDegrees.secondsStartDegree}deg)`);
    if (document.getElementById(id)) displayClockOnCanvas(timeElements, id);
    return targetTime;
  }
  
  const getTargetTime = (date) => {
    const currentTimezoneOffsetMS = date.getTimezoneOffset() * 60 * 1000;
    const targetUTCOffetMS = timezones.find(tz => tz.name === timezone).UTC_offset * 60 * 1000;
    return date.getTime() + currentTimezoneOffsetMS + targetUTCOffetMS;
  }

  const getTimeString = (time) => {
    
    let hours = time.getHours();
    if (hours < 10) hours = `0${hours}`;

    let minutes = time.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;

    let seconds = time.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;

    return `${hours}:${minutes}:${seconds}`;
  }

  const getTimeElements = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    if (hours > 12) {
      hours -= 12;
    }
    return {
      hours,
      minutes,
      seconds,
    }
  }

  const canvasClock = () => <canvas className="clock__canvas" id={id} width="300px" height="300px"></canvas>;

  const calculateStartDegrees = ({hours, minutes, seconds}) => {
    const secondsStartDegree = 360 / 60 * seconds;
    const minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds;
    const hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;
    
    return {
      secondsStartDegree,
      minutesStartDegree,
      hoursStartDegree,
    }
  }

  useEffect(() => {
    const intervalID = window.setInterval(makeClocks, 1000);
    return () => {
      if (intervalID) window.clearInterval(intervalID);
    };
  }, []);

  const clockDeleteHandler = (evt) => {
    deleteClocks(evt.target.dataset.id);
  }

  const clockStrokes = () => {
    const strokes = [];
    const clockStroke = (n) => {
      if (n % 5 === 0) return <span key={`k${n}`} className={`clock__stroke clock__stroke--${n}`}></span>;
      return <span key={`k${n}`} className={`clock__stroke clock__stroke--small clock__stroke--${n}`}></span>;
    }
    
    const makeStrokes = () => {
      for (let i = 0; i <= 59; i += 1) {
        strokes.push(clockStroke(i + 1));
      }
      return [...strokes]
    }
    return makeStrokes();
  }

  const clocksCSS = () => {
    return (
      <time className="clock">
        {clockStrokes()}      
        <span className="clock__hand clock__hand--hour" style={{"--hours_current_degree": `${clockHandDegrees.hoursStartDegree}`}}></span>
        <span className="clock__hand clock__hand--minute" style={{ "transform": `rotate(${clockHandDegrees.minutesStartDegree}deg)`, }}></span>
        <span className="clock__hand clock__hand--second" style={{ "transform": `rotate(${clockHandDegrees.secondsStartDegree}deg)`, }}></span>
      </time>
    );
  }

  return (
    <div className="Clocks__container">
      <div className="Clocks__header">
        <h3 className="Clocks__title">{name}</h3>
        <div className="Clocks_delete_button" onClick={clockDeleteHandler} data-id={id} alt="Удалить эти часы">x</div>
      </div>
      <time className="time__string">{timeString}</time>
      {canvasClock()}
      {clocksCSS()}
      <hr />
      <Clock
        hours={timeElements.hours}
        minutes={timeElements.minutes}
        seconds={timeElements.seconds} />
    </div>
  );
};

export default Clocks;


import { useState, useEffect } from 'react';
import timezones from './timezones';
import displayClockOnCanvas from '../scripts/displayClockOnCanvas';

function Clocks({ id, name, timezone, deleteClocks }) {
  const [timeString, setTimeString] = useState('');
  let clockHandDegrees = {};
  const makeClocks = () => {
    const date = new Date();
    const targetTime = new Date(getTargetTime(date));
    const timeElements = getTimeElements(targetTime);
    setTimeString(getTimeString(targetTime));
    clockHandDegrees = calculateStartDegrees(getTimeElements(targetTime));
    // console.log(clockHandDegrees);
    console.log(`rotate(${clockHandDegrees.hoursStartDegree}deg)`);
    console.log(`rotate(${clockHandDegrees.minutesStartDegree}deg)`);
    console.log(`rotate(${clockHandDegrees.secondsStartDegree}deg)`);
    if (document.getElementById(id)) displayClockOnCanvas(timeElements, id);
    return targetTime;
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

  const getTargetTime = (date) => {
    const currentTimezoneOffsetMS = date.getTimezoneOffset() * 60 * 1000;
    const targetUTCOffetMS = timezones.find(tz => tz.name === timezone).UTC_offset * 60 * 1000;
    return date.getTime() + currentTimezoneOffsetMS + targetUTCOffetMS;
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
      console.log('interval cleared!');
    };
  }, []);

  const clockDeleteHandler = (evt) => {
    deleteClocks(evt.target.dataset.id);
  }

  const clocksCSS = () => {
    return (
      <time className="clock">
        <span className="clock__stroke clock__stroke--small clock__stroke--1"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--2"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--3"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--4"></span>
        <span className="clock__stroke clock__stroke--5"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--6"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--7"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--8"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--9"></span>
        <span className="clock__stroke clock__stroke--10"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--11"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--12"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--13"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--14"></span>
        <span className="clock__stroke clock__stroke--15"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--16"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--17"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--18"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--19"></span>
        <span className="clock__stroke clock__stroke--20"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--21"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--22"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--23"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--24"></span>
        <span className="clock__stroke clock__stroke--25"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--26"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--27"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--28"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--29"></span>
        <span className="clock__stroke clock__stroke--30"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--31"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--32"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--33"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--34"></span>
        <span className="clock__stroke clock__stroke--35"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--36"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--37"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--38"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--39"></span>
        <span className="clock__stroke clock__stroke--40"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--41"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--42"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--43"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--44"></span>
        <span className="clock__stroke clock__stroke--45"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--46"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--47"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--48"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--49"></span>
        <span className="clock__stroke clock__stroke--50"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--51"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--52"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--53"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--54"></span>
        <span className="clock__stroke clock__stroke--55"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--56"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--57"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--58"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--59"></span>
        <span className="clock__stroke clock__stroke--60"></span>
      
        <span className="clock__hand clock__hand--hour" style={{ transform: 'rotate(' + clockHandDegrees.hoursStartDegree + 'deg)' }}></span>
        <span className="clock__hand clock__hand--minute" style={{ transform: `rotate(${clockHandDegrees.minutesStartDegree}deg)` }}></span>
        <span className="clock__hand clock__hand--second" style={{ transform: `rotate(${clockHandDegrees.secondsStartDegree}deg)` }}></span>
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
    </div>
  );
};

export default Clocks;


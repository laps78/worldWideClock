import React, { useEffect } from 'react';
import timezones from './timezones';

function Clocks({ id, name, timezone, deleteClocks }) {

  const date = new Date();
  const currentTimezoneOffsetHours = date.getTimezoneOffset() / 60;
  const CurrentUTC = Date.UTC(date);

  console.log(CurrentUTC); // ЧТО ТУТ ЛЕЖИТ?
  console.log('currentOffset: ', currentTimezoneOffset);
  
  //TODO calculate targetDate!
  const calculatedOffset = () => {
    const targetTZ = timezones.find(tz => tz.name === timezone);
    const targetDate = null;
  }

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if((hours + currentTimezoneOffsetHours) > 24) {
    hours = 
  } 
  if((hours + currentTimezoneOffsetHours) < 0) {
    hours = 
  }
  if (hours > 12) {
    hours -= 12;
  }

  const secondsStartDegree = 360 / 60 * seconds;
  const minutesStartDegree = 360 / 60 *  minutes + 6 / 60 * seconds;
  const hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;
  
  const clockDeleteHandler = (evt) => {
    deleteClocks(evt.target.dataset.id);
  }

  return (
    <div className="Clocks__container">
      <div className="Clocks__header">
        <h3 className="Clocks__title">{name}</h3>
        <div className="Clocks_delete_button" onClick={clockDeleteHandler} data-id={id}>x</div>
      </div>
      <time className="time__string">{`${hours}:${minutes}:${seconds}`}</time>
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
      
        <span className="clock__hand clock__hand--hour" id={`${id}_hour`}></span>
        <span className="clock__hand clock__hand--minute" id={`${id}_minute`}></span>
        <span className="clock__hand clock__hand--second" id={`${id}_second`}></span>
      </time>
    </div>
  );
};

React.useEffect((id, hoursStartDegree, minutesStartDegree, secondsStartDegree) => {
  const hoursHand = document.querrySelector(`${id}_hour`);
  const minutesHand = document.querrySelector(`${id}_minute`);
  const secondsHand = document.querrySelector(`${id}_second`);

  hoursHand.style.transform = `rotate(${hoursStartDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesStartDegree}deg)`;
  secondsHand.style.transform = `rotate(${secondsStartDegree}deg)`;
}, []);

export default Clocks;


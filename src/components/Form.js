import React, { useState } from 'react';
import timezones from './timezones';
import { nanoid } from 'nanoid';

function Form({ changeState }) {
  const submitHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.name.value.length > 0) {
      const newValue = {
        name: evt.target.name.value,
        timezone: evt.target.timezone.value,
      };
      changeState(newValue);
    };
  };
  
  const makeItems = () => timezones.map((tz) => { return <option key={nanoid()} name={`${tz.name}`}>{tz.name}</option>});

  return (
    <form className="Form" onSubmit={submitHandler}>
      <div className="FormCol">
        <label htmlFor="name">Название</label>
        <input name="name" type="text" plaseholder="Введите название"></input>
      </div>
      <div className="FormCol">
        <label htmlFor="timezone">временная зона</label>
        <select name="timezone">
          { makeItems() }
        </select>
      </div>
      <button className="FormButton" type="submit">Добавить</button>
    </form>
  );
}

export default Form;
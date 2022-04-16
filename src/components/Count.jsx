/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import "./Count.scss";
import {
  setValue,
  setPeople,
  setActive,
  setCustomTip,
} from "../features/calc/calcSlice";

function Count() {
  const arrayOfTips = [5, 10, 15, 25, 50];
  const calc = useSelector((state) => state.calc);
  const dispatch = useDispatch();

  const submitValue = (e) => {
    dispatch(setValue(e.target.value));
  };

  const submitPeople = (e) => {
    dispatch(setPeople(e.target.value));
  };

  const createButtons = () => {
    const tips = [];
    for (let i = 0; i < 5; i++) {
      const changeActive = () => {
        dispatch(setActive(arrayOfTips[i]));
        dispatch(setCustomTip(""));
      };

      tips.push(
        <button
          key={i}
          onClick={changeActive}
          className={`${
            calc.active === arrayOfTips[i] ? "count__f-btn--active" : ""
          } count__f-btn`}
        >
          {arrayOfTips[i]}%
        </button>
      );
    }
    return tips;
  };

  const changeCurrentTip = (e) => {
    dispatch(setCustomTip(e.target.value));
    dispatch(setActive(e.target.value));
  };

  const checkLetters = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="count">
      <form className="count__bill" action="">
        <label htmlFor="">Bill</label>
        <input
          type="text"
          value={calc.bill}
          onChange={submitValue}
          placeholder="0"
          maxlength="5"
          onKeyPress={checkLetters}
        />
        <img className="count__dollar-icon" src={dollar} alt="dollar" />
      </form>
      <div className="count__buttons">
        <label className="count__select-tip" htmlFor="">
          Select Tip %
        </label>
        {createButtons()}
        <div className="test">
          <input
            onChange={changeCurrentTip}
            className="count__c-input"
            placeholder="Custom"
            maxlength="2"
            onKeyPress={checkLetters}
            value={calc.customTip}
          />
        </div>
      </div>
      <form className="count__people" action="">
        <label htmlFor="">Number of People</label>
        <span
          className={
            calc.bill > 0 && calc.active > 0 && !calc.people
              ? "count__span count__span--active"
              : "count__span"
          }
        >
          Can't be zero
        </span>

        <input
          className={
            calc.bill > 0 && calc.active > 0 && !calc.people
              ? "count__input count__input--active"
              : "count__input"
          }
          type="text"
          value={calc.people}
          onChange={submitPeople}
          placeholder="0"
          maxlength="5"
          onKeyPress={checkLetters}
        />
        <img className="count__person-icon" src={person} alt="person" />
      </form>
    </div>
  );
}

export default Count;

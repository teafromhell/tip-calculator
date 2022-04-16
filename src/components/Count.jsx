/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import "./Count.scss";

function Count({
  bill,
  people,
  active,
  setValue,
  setPeople,
  setActive,
  customTip,
  setCustomTip,
}) {
  const arrayOfTips = [5, 10, 15, 25, 50];

  const submitValue = (e) => {
    setValue(e.target.value);
  };

  const submitPeople = (e) => {
    setPeople(e.target.value);
  };

  const createButtons = () => {
    const tips = [];
    for (let i = 0; i < 5; i++) {
      const changeActive = () => {
        setActive(arrayOfTips[i]);
        setCustomTip("");
      };

      tips.push(
        <button
          key={i}
          onClick={changeActive}
          className={`${
            active === arrayOfTips[i] ? "count__f-btn--active" : ""
          } count__f-btn`}
        >
          {arrayOfTips[i]}%
        </button>
      );
    }
    return tips;
  };

  const changeCurrentTip = (e) => {
    setCustomTip(e.target.value);
    setActive(e.target.value);
  };

  const checkLetters = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
    if (e.target.value > 10000) {
      e.preventDefault();
    }
  };

  return (
    <div className="count">
      <form className="count__bill" action="">
        <label htmlFor="">Bill</label>
        {/* <span
          className={
            bill > 100000 ? "count__span count__span--active" : "count__span"
          }
        >
          {" "}
          1kk is a limit{" "}
        </span> */}
        <input
          type="text"
          value={bill}
          onChange={submitValue}
          placeholder="0"
          maxlength="7"
          onKeyPress={checkLetters}
        />
        <img className="count__dollar-icon" src={dollar} alt="dollar" />
      </form>
      <div className="count__buttons">
        <label className="count__select-tip" htmlFor="">
          Select Tip %
        </label>
        {createButtons()}
        <div className="test"><input
          value={customTip}
          onChange={changeCurrentTip}
          className="count__c-input"
          placeholder="Custom"
          maxlength="2"
          onKeyPress={checkLetters}
        /></div>
      </div>
      <form className="count__people" action="">
        <label htmlFor="">Number of People</label>
        <span
          className={
            bill > 0 && active > 0 && !people
              ? "count__span count__span--active"
              : "count__span"
          }
        >
          Can't be zero
        </span>

        <input
            className={
                bill > 0 && active > 0 && !people
                  ? "count__input count__input--active"
                  : "count__input"
              }
          type="text"
          value={people}
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

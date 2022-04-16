/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Result.scss";
import {
  setValue,
  setPeople,
  setActive,
  setCustomTip,
} from "../features/calc/calcSlice";

function Result() {
  const calc = useSelector((state) => state.calc);
  const dispatch = useDispatch();
  const [res, setRes] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    const tipPerson = (calc.bill * calc.active * 0.01) / calc.people;
    if (isNaN(tipPerson) || !isFinite(tipPerson)) {
      setRes("0.00");
    } else {
      setRes(tipPerson.toFixed(2));
    }
  }, [calc.bill, calc.active, calc.people]);

  useEffect(() => {
    const totalPay = (calc.bill * (1 + calc.active * 0.01)) / calc.people;
    if (isNaN(totalPay) || !isFinite(totalPay)) {
      setTotal("0.00");
    } else {
      setTotal(totalPay.toFixed(2));
    }
  }, [calc.bill, calc.active, calc.people]);

  const submitReset = () => {
    dispatch(setValue(""));
    dispatch(setPeople(""));
    dispatch(setActive(""));
    dispatch(setCustomTip(""));
  };
  return (
    <div className="result">
      <div className="result__amount" action="">
        <div className="result__left">
          <div>Tip Amount</div>

          <p>/ person</p>
          <div>Total</div>

          <p>/ person</p>
        </div>
        <div className="result__right">
          <div>${res}</div>
          <div>${total}</div>
        </div>
      </div>
      <button onClick={submitReset} className="result__reset-btn">
        RESET
      </button>
    </div>
  );
}

export default Result;

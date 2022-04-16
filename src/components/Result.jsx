/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Result.scss";

function Result({
  bill,
  people,
  active,
  setValue,
  setPeople,
  setActive,
  customTip,
  setCustomTip,
}) {
  // const [char, setChar] = useState({})
  // useEffect(()=>{

  //   setChar(JSON.parse(localStorage.getItem('all')))
  // },[all.people, all.bill, all.tip])
  // console.log(char)

  const [res, setRes] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    // if (customTip !== "") {
    //   active = customTip;
    // }
    const tipPerson = (bill * active * 0.01) / people;
    if (isNaN(tipPerson) || !isFinite(tipPerson)) {
      setRes("0.00");
    } else {
      setRes(tipPerson.toFixed(2));
    }
  }, [bill, active, people, customTip]);

  useEffect(() => {
    // if (customTip !== "") {
    //   active = customTip;
    // }
    const totalPay = (bill * (1 + active * 0.01)) / people;
    if (isNaN(totalPay) || !isFinite(totalPay)) {
      setTotal("0.00");
    } else {
      setTotal(totalPay.toFixed(2));
    }
  }, [bill, active, people, customTip]);

  const submitReset = () => {
    setValue("");
    setPeople("");
    setActive("");
    setCustomTip("");
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

import React, { useState } from "react";
import { Card } from 'react-bootstrap';

const initalState = {
  ulntGoal: '',
  monthlyULNTGoal: 0
};

const ProfitCalcCard = ({  }) => {
  const [state, setState] = useState(initalState);  
  const handleChange = e => {
    const {name, value} = e.target;
    if(name === "ulntGoal") {
      const monthlyULNTGoal = (value / 0.5) * 100;
      setState({...state, ...{ [name]: value }, monthlyULNTGoal });
    } else {
      setState({...state, ...{ [name]: value }});
    }
  }

  const numFormatter = (num) => {
    return (num.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { ulntGoal, monthlyULNTGoal } = state;
  return (
    <Card className="portfolioCard">
      <Card.Body>
        <Card.Title>Profit Calculator</Card.Title>
          <label>Monthly Goal:&emsp;  
            <input name="ulntGoal" type="number" value={ulntGoal} onChange={e => handleChange(e)} />ULNT
          </label>
          <div>Balance Required: ${numFormatter(monthlyULNTGoal)}</div>
      </Card.Body>
    </Card>
  );
}

export default ProfitCalcCard;
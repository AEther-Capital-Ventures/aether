import * as React from "react";
import { Card, Table } from 'react-bootstrap';


const RiskToleranceCard = ({ investmentProducts, PortfolioIndex, riskToleranceIndex }) => {
    const portfolio = investmentProducts[PortfolioIndex];
    const riskToleranceKey = Object.keys(portfolio.riskTolerance)[riskToleranceIndex];
    //const riskData = portfolio.riskTolerance[riskToleranceKey];
    const labelRisk = riskToleranceKey.replace(/(?<!^)([A-Z])/g, " $1").charAt(0).toUpperCase() + riskToleranceKey.replace(/(?<!^)([A-Z])/g, " $1").slice(1);
    return (
      <Card className="portfolioCard">
        <Card.Body>
          <Card.Title>{portfolio.title} - {labelRisk} Risk Tolerance</Card.Title>
          <Card.Text>{portfolio.description}</Card.Text>
          <Card.Text>Investments are locked for a minimum of three (3) months. Accrued interest of 0.5 ULNT per $100, along with inbound and outbound processing, occurs on the 1st of each month. Interest is calculated based on the active balance. After interest payments, all inbound and outbound transactions are processed.</Card.Text>
          <blockquote className="blockquote mb-0">{portfolio.paymentInfo}</blockquote>
        </Card.Body>
      </Card>
    );
}

export default RiskToleranceCard;
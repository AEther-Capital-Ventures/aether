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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
          <blockquote className="blockquote mb-0">{portfolio.paymentInfo}</blockquote>
        </Card.Body>
      </Card>
    );
}

export default RiskToleranceCard;
import React, { useState, Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Tab, Tabs, Button, Nav, Card, Table } from 'react-bootstrap';
import RiskToleranceCard from "../components/RiskToleranceCard";
import CryptoInvestCard from "../components/CryptoInvestCard copy";
import ProfitCalcCard from "../components/ProitCalcCard";


import Layout from "../components/layout";

const investmentProducts = [
  {
    id: "invest",
    title: "Growth Investment",
    description: "Funds are locked for first 2 years of account with a zero withdraw balance. Funds can be withdrawn up to the total amount of the withdraw balance. Widthdraw balance can be viewed in your account dashboard.",
    paymentInfo: "Minimum starting investment: $20",
    riskTolerance: {
      low: {
        LiquidityTolerance: "widthdraw balance 30% of 70%",
        liquidationPeriod: "24 months",
        LowYieldStable: "80%",
        HighYieldHighRisk: "0%",
        RealEstateRealAsset: "20%",
        EntrepreneurInvestment: "0%"
      },
      moderateLow: {
        LiquidityTolerance: "widthdraw balance 25% over 75%",
        liquidationPeriod: "24 months",
        LowYieldStable: "65%",
        HighYieldHighRisk: "10%",
        RealEstateRealAsset: "20%",
        EntrepreneurInvestment: "5%"
      },
      moderate: {
        LiquidityTolerance: "widthdraw balance 20% over 80%",
        liquidationPeriod: "36 months",
        LowYieldStable: "50%",
        HighYieldHighRisk: "20%",
        RealEstateRealAsset: "15%",
        EntrepreneurInvestment: "10%"
      },
      moderateHigh: {
        LiquidityTolerance: "widthdraw balance 10% over 90%",
        liquidationPeriod: "36 months",
        LowYieldStable: "35%",
        HighYieldHighRisk: "45%",
        RealEstateRealAsset: "10%",
        EntrepreneurInvestment: "15%"
      },
      High: {
        LiquidityTolerance: "widthdraw balance 5% over 95%",
        liquidationPeriod: "60 months",
        LowYieldStable: "20%",
        HighYieldHighRisk: "60%",
        RealEstateRealAsset: "5%",
        EntrepreneurInvestment: "15%"
      }
    }
  },
  {
    id: "tuition",
    title: "Education/Tuition Fund",
    description: "Funds are released to assigned person at age 18 years old. Payout is in monthly payments. Distrabutions are calculated base on average studen education requirements.",
    paymentInfo: "Minimum starting investment: $150",
    riskTolerance: {
      moderateLow: {
        LiquidityTolerance: "Monthly Payment at age 18",
        liquidationPeriod: "60 Months after age requirement",
        LowYieldStable: "65%",
        HighYieldHighRisk: "10%",
        RealEstateRealAsset: "20%",
        EntrepreneurInvestment: "5%"
      }
    }
  },
  {
    id: "retirement",
    title: "Retirement Fund",
    description: "Funds are released to assigned person at age 65 years old. Payout is in monthly payments. Distributions are calculated base on average human lifespan.",
    paymentInfo: "Minimum starting investment: $200",
    riskTolerance: {
      moderateLow: {
        LiquidityTolerance: "Monthly Payment at age 65",
        liquidationPeriod: "60 Months after age requirement",
        LowYieldStable: "65%",
        HighYieldHighRisk: "10%",
        RealEstateRealAsset: "20%",
        EntrepreneurInvestment: "5%"
      }
    }
  },
  {
    id: "cryptoincome",
    title: "Crypto Income Fund",
    description: "",
    paymentInfo: "Minimum starting investment: $100",
    riskTolerance: {
      base: {
        LiquidityTolerance: "Monthly Payment at age 65",
        liquidationPeriod: "60 Months after age requirement",
        LowYieldStable: "65%",
        HighYieldHighRisk: "10%",
        RealEstateRealAsset: "20%",
        EntrepreneurInvestment: "5%"
      }
    }
  }
];


const Index = ({ data, location }) => {
  const { site, allAccount } = useStaticQuery(graphql `
      query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
        allAccount {
          nodes {
            account {
              activeBalance
              createDate
              inboundBalance
              outboundBalance
            }
            firstName
            lastName
            phoneNumber
            emailAddress
            walletAddress
          }
        }
      }
    `);

  const [accountState, setAccountState] = useState({ formWalletAddress:null, data: null });
  const [PortfolioIndex, setPortfolioItem] = useState(0);
  const [riskToleranceIndex, setRiskTolerance] = useState(0);
  //const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteTitle = site.siteMetadata?.title || `Title`;

  const numFormatter = (num) => {
    return (num.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const encode = data => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ ...this.state })
    }).then(() => alert("Success!")).catch(error => alert(error));
    e.preventDefault();
  };

  const handleOnPortfolioSelect = (index) => {
    setPortfolioItem(index);
    setRiskTolerance(0);
  }

  const handleOnRiskSelect = (index) => {
    setRiskTolerance(index);
  }

  const keyStringFormater = (str) => str.replace(/(?<!^)([A-Z])/g, " $1").charAt(0).toUpperCase() + str.replace(/(?<!^)([A-Z])/g, " $1").slice(1);

  const getAccountData = () => {
    const accountIndex = allAccount.nodes.findIndex(e => e.walletAddress === accountState.formWalletAddress);
    console.log('test: ', allAccount.nodes);
    if(accountIndex === -1) {
      setAccountState({...accountState, data: false});
    } else {
      setAccountState({...accountState, data: allAccount.nodes[accountIndex]});
    }
  }

  const handleAccountWalletChange = (e) => {
    setAccountState({...accountState, formWalletAddress: e.target.value});
  }

  return (
    <Layout location={location} title={siteTitle}>
      <section id="about"> 
        <h1>About Us</h1> 
          <p>Æther Capital Ventures (ÆCV) is a pioneering financial hub hosted by a team of analysts, investors, traders, and world-class IT &amp; Real Estate professionals, bringing prime realty holdings, traditional investment vehicles, and blockchain technology together for an optimal membership-based investing experience. Our mission is to provide financial opportunities to investors and partners that would otherwise be elusive in the midst of ever-evolving technological & financial environments. Our business network is meant to serve its clients and members by making the collective expertise and technical knowledge of its Founding Team and Partners more accessible.</p>
      </section> 
      <section id="services">
        <h1>Our services</h1> 
        <Tabs defaultActiveKey="Cryptonyx" id="services-tabs" className="mb-3">
          <Tab eventKey="Cryptonyx" title="Cryptonyx">
            <h3>Cryptonyx</h3>
            <p>Money conversion service: USD-USDT & USDT-USD conversions at a flat 1% rate fee. Minimum Conversion amount: $100</p>
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                  <form name="Exchange" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="Exchange" />
                    <label>Email: <input type="email" name="email" /></label>
                    <label>Public wallet address: <input type="text" name="wallet" /></label>
                    <label>Conversion Type: 
                      <select name="type[]">
                        <option value="usd-usdt">USD &#x2192; USDT</option>
                        <option value="usdt-usd">USDT &#x2192; USD</option>
                      </select>
                    </label>
                    <label>Amount: <input type="number" min="100" step="any" name="amount"></input></label>
                    <Button variant="primary" type="submit">Send Order</Button>
                  </form>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Æther Investing" title="Æther Investing">
            <h3>Discover ÆCV:</h3>
            <p>Join Our Exclusive Investment Network!</p> 
            <ul>
              <li>Secure Your Future: contribute to your retirement today.</li>
              <li>Wealth Growth: Learn strategies to grow your wealth effectively.</li>
              <li>Insider Knowledge: Stay ahead with exclusive market insights.</li>
              <li>Expert Guidance: Access personalized reports from our team.</li>
              <li>Community Support: Network with like-minded individuals.</li>
              <li>Weekly Sessions.</li>
              <li>Daily Market Insights and Analysis.</li>
              <li>Private Community and Networking.</li>
            </ul>
            <p><b>Subscribe today for Exclusive Access!</b></p>
            <ul>
              <li>ÆCV innovates with optimization capabilities that make Real Estate asset management considerably more efficient by leveraging the security, speed, transparency and data availability of blockchain technology in order to make the most out of valuable Real Estate market opportunities through specialized strategic analysis and cutting-edge technological implementations.</li>
              <li>The user may define which Portfolio Option they would like to adhere to and track it over time on the platform.</li>
              <li>The ÆCV network's investment service provides clients, members and partners with an education/tuition fund; a retirement fund; and portfolio management solutions</li>
            </ul>
            <p className="subscript">If the client files a full account liqudation request, payout is distributed in monthly payments. See corresponding portfolio table in section "Full Account Liquidation". The full balance of the account will be equally distributed into the number of monthly payments and distributed on the first of each month. Once an account is put into Full Liquidation mode no further interest distributions will be applied to the portfolio. Early release of funds will encure a penalty fee calculated based on the portfolio, its risk tolerance and how long the account has been active. If liquidation is during a state where the account is in an early lock, fees will be larger.</p>
            <Container fluid>
              <Row>
                <Container>
                  <Row>
                    <Col sm={12} md={3} className="portfolioSelectionMenu">
                      <Nav variant="pills" className="flex-column" defaultActiveKey={0}>
                        <header>Portfolio Options</header>
                        {investmentProducts.map((elm, index) => <Nav.Link key={index} eventKey={index} onClick={() => handleOnPortfolioSelect(index)}>{elm.title}</Nav.Link>)}
                      </Nav>
                    </Col>
                    <Col sm={12} md={2} className="portfolioSelectionMenu">
                      <Nav variant="pills" className="flex-column" defaultActiveKey={0} activeKey={riskToleranceIndex}>
                        <header>Risk Tolerance</header>
                        {Object.keys(investmentProducts[PortfolioIndex].riskTolerance).map((risk, index) => (<Nav.Link key={index} eventKey={index} onClick={() => handleOnRiskSelect(index)}>{keyStringFormater(risk)}</Nav.Link>))}
                      </Nav>
                    </Col>
                    <Col sm={12} md={7}>
                      {investmentProducts[PortfolioIndex].id !== "cryptoincome" ? (
                        <RiskToleranceCard investmentProducts={investmentProducts} PortfolioIndex={PortfolioIndex} riskToleranceIndex={riskToleranceIndex} />
                      ) : (
                        <CryptoInvestCard investmentProducts={investmentProducts} PortfolioIndex={PortfolioIndex} riskToleranceIndex={riskToleranceIndex} />
                      )}
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                  <form name="Investing" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="Investing" />
                    <label>First Name: <input type="text" name="firstName" /></label>
                    <label>Last Name: <input type="text" name="lastName" /></label>
                    <label>Email: <input type="email" name="email" /></label>
                    <label>Phone: <input type="text" name="phone" /></label>
                    <label>Portfolio Option: <input type="text" name="Portfolio" value={investmentProducts[PortfolioIndex].title} disabled/></label>
                    <label>Risk Tolerance Option: <input type="text" name="RiskTolerance" value={keyStringFormater(Object.keys(investmentProducts[PortfolioIndex].riskTolerance)[riskToleranceIndex])} disabled/></label>
                    <label>MetaMask Wallet: <input type="text" name="WalletAddress" disabled={investmentProducts[PortfolioIndex].id !== "cryptoincome"}/></label>
                    <label>Monthly Payment amount: <input type="number" name="autoPayAmount" /></label>
                    <Button variant="primary"  type="submit">Send Portfolio Request</Button>
                  </form>
                </Col>
                {investmentProducts[PortfolioIndex].id === "cryptoincome" ? (
                <Col xs={12} md={6}>
                  <Card className="portfolioCard">
                    <Card.Body>
                      <Card.Title>Portfolio Viewer</Card.Title>
                      <label>MetaMask Wallet: 
                        <input value={accountState.formWalletAddress} onChange={e => handleAccountWalletChange(e)} />
                        <button onClick={getAccountData}>View Account</button>
                      </label>
                      {accountState.formWalletAddress !== null && accountState.data !== null ? (
                        <Fragment>
                          {accountState.data !== false ? (
                            <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td>Total Balance</td>
                                  <td colSpan={2}>${numFormatter(accountState.data.account.activeBalance+accountState.data.account.inboundBalance+accountState.data.account.outboundBalance)}</td>
                                </tr>
                                <tr>
                                  <td>Active Balance</td>
                                  <td colSpan={2}>${numFormatter(accountState.data.account.activeBalance)}</td>
                                </tr>
                                <tr>
                                  <td>ULNT Payout</td>
                                  <td colSpan={2}>{numFormatter((accountState.data.account.activeBalance/100)*0.5)}ULNT</td>
                                </tr>
                                <tr>
                                  <th>Processing</th>
                                  <th>Deposit</th>
                                  <th>Widthdraw</th>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>${numFormatter(accountState.data.account.inboundBalance)}</td>
                                  <td>${numFormatter(accountState.data.account.outboundBalance)}</td>
                                </tr>                               
                              </tbody>
                            </Table>
                          ):(
                            <div>Not an active account</div>
                          )}
                          <ProfitCalcCard />
                        </Fragment>
                      ):(
                        <div>
                          <span>Enter your public wallet address to view your account</span>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
                ): null}
              </Row>
            </Container>
            
          </Tab>
          <Tab eventKey="Spark Academy Training" title="Spark Academy Training">
            <h3>Spark Academy</h3>
            <p>Join us successfully navigating the fast moving technological world we find ourselves in. Our training program is meant for people who wish to invest in themselves to secure their financial future by becoming members and gain access to the best data sets. ÆCV provides you with vast financial opportunities and also take you from beginner to expert in the following fields: stock market trading, crypto trading, real estate and hard asset management and investing; and blockchain technologies.</p>
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                  <form name="Training" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="Training" />
                    <label>First Name: <input type="text" name="firstName" /></label>
                    <label>Last Name: <input type="text" name="lastName" /></label>
                    <label>Email: <input type="email" name="email" /></label>
                    <Button variant="primary"  type="submit">Send Training Request</Button>
                  </form>
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
        <hr/>
      </section>
      <section id="network">
        <h2>Our Network</h2> 
        <p>Join a community of like-minded individuals and professionals committed to financial success.</p>
      </section>
      <section id="news">
        <h2>Latest News</h2> 
        <p>Stay informed about market trends, economic updates, and our latest investment strategies.</p>
      </section>
      <section id="contact"> 
        <h2>Contact Us</h2> 
        <p>We'd love to hear from you! Reach out for general inquiries, membership info, partnership opportunities, our referral program and more. Start your journey with Æther Capital Ventures today!</p> 
      </section> 
    </Layout>
  );
}

export default Index
/*
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
*/
import * as React from "react";
import { useState } from 'react';
import { graphql } from "gatsby";
import { Container, Row, Col, Tab, Tabs, Button, Nav } from 'react-bootstrap';
import RiskToleranceCard from "../components/RiskToleranceCard";


import Layout from "../components/layout";

const investmentProducts = [
  {
    id: "invest",
    title: "Growth Investment",
    description: "",
    paymentInfo: "Min balance $20",
    riskTolerance: {
      low: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderateLow: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderate: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderateHigh: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      High: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      }
    }
  },
  {
    id: "tuition",
    title: "Education/Tuition Fund",
    description: "",
    paymentInfo: "Dynamic. No minimum.",
    riskTolerance: {
      low: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderateLow: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderate: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderateHigh: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      High: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      }
    }
  },
  {
    id: "retirement",
    title: "Retirement fund",
    description: "",
    paymentInfo: "Dynamic. No minimum.",
    riskTolerance: {
      low: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderateLow: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderate: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      moderateHigh: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      },
      High: {
        LowYieldStable: "Dynamic",
        HighYieldHighRisk: "Dynamic",
        RealEstateRealAsset: "Dynamic",
        EntrepreneurInvestment: "Dynamic"
      }
    }
  },
];


const Index = ({ data, location }) => {
  const [PortfolioIndex, setPortfolioItem] = useState(0);
  const [riskToleranceIndex, setRiskTolerance] = useState(0);
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const encode = data => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleOnPortfolioSelect = (index) => {
    setPortfolioItem(index);
  }

  const handleOnRiskSelect = (index) => {
    setRiskTolerance(index);
  }

  const keyStringFormater = (str) => str.replace(/(?<!^)([A-Z])/g, " $1").charAt(0).toUpperCase() + str.replace(/(?<!^)([A-Z])/g, " $1").slice(1);

  return (
    <Layout location={location} title={siteTitle}>
      <section id="about"> 
        <h1>About Us</h1> 
          <p>Æther Capital Ventures (ÆCV) is a pioneering financial hub hosted by a team of analysts, investors, traders, and world-class IT &amp; Real Estate professionals, bringing prime realty holdings, traditional investment vehicles, and blockchain technology together for an optimal membership-based investing experience. Our mission is to provide financial opportunities to investors and partners that would otherwise be elusive in the midst of an ever-evolving technological & financial environment. Our business network is meant to serve its clients and members by making the collective expertise and technical knowledge of its Founding Team and Partners accessible to all.</p>
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
              <li>ÆCV innovates with optimization capabilities that make Real Estate asset management considerably more efficient by leveraging the security, speed, transparency and availability of blockchain technology in order to make the most out of valuable Real Estate market opportunities through specialized strategic analysis and cutting-edge technological implementations.</li>
              <li>The user may define which Portfolio Option they would like to adhere to and track it over time on the platform.</li>
              <li>The ÆCV network's investment service provides clients, members and partners with portfolio management solutions; an education/tuition fund; and a retirement fund.</li>
            </ul>
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
                      <Nav variant="pills" className="flex-column" defaultActiveKey={0}>
                        <header>Risk Tolerance</header>
                        {Object.keys(investmentProducts[PortfolioIndex].riskTolerance).map((risk, index) => (<Nav.Link key={index} eventKey={index} onClick={() => handleOnRiskSelect(index)}>{keyStringFormater(risk)}</Nav.Link>))}
                      </Nav>
                    </Col>
                    <Col sm={12} md={7}>
                      <RiskToleranceCard investmentProducts={investmentProducts} PortfolioIndex={PortfolioIndex} riskToleranceIndex={riskToleranceIndex} />
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
                    <label>Portfolio Option: 
                      <select name="Portfolio[]">
                        {investmentProducts.map((elm, index) => <option key={index} value={elm.title}>{elm.title}</option>)}
                      </select>
                    </label>
                    <label>Risk Tolerance Option: 
                      <select name="RiskTolerance[]">
                        {Object.keys(investmentProducts[0].riskTolerance).map((elm, index) => <option key={index} value={keyStringFormater(elm)}>{keyStringFormater(elm)}</option>)}
                      </select>
                    </label>
                    <Button variant="primary"  type="submit">Send Portfolio Request</Button>
                  </form>
                </Col>
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
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
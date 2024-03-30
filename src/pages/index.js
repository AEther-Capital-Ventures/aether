import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Card, Tab, Tabs, Table, Button, Nav } from 'react-bootstrap';


import Layout from "../components/layout";

const investmentProducts = [
  {
    id: "base",
    title: "Base Portfolio",
    description: "",
    paymentInfo: "Dynamic Payment, Min balance $500",
    fundProps: {
      LowYieldStable: "Dynamic",
      HighYieldHighRisk: "Dynamic",
      RealEstateRealAsset: "Dynamic",
      EntrepreneurInvestment: "Dynamic"
    }
  },
  {
    id: "standard",
    title: "Standard Portfolio",
    description: "",
    paymentInfo: "$20 per month",
    fundProps: {
      LowYieldStable: "80%",
      HighYieldHighRisk: "5%",
      RealEstateRealAsset: "10%",
      EntrepreneurInvestment: "5%"
    }
  },
  {
    id: "premium",
    title: "Premium Portfolio",
    description: "",
    paymentInfo: "$100 per month",
    fundProps: {
      LowYieldStable: "60%",
      HighYieldHighRisk: "10%",
      RealEstateRealAsset: "20%",
      EntrepreneurInvestment: "10%"
    }
  },
  {
    id: "premiumP",
    title: "Premium+ Portfolio",
    description: "",
    paymentInfo: "$250 per month",
    fundProps: {
      LowYieldStable: "40%",
      HighYieldHighRisk: "20%",
      RealEstateRealAsset: "20%",
      EntrepreneurInvestment: "20%"
    }
  },
  {
    id: "executive",
    title: "Executive Portfolio",
    description: "",
    paymentInfo: "$800 per month",
    fundProps: {
      LowYieldStable: "25%",
      HighYieldHighRisk: "35%",
      RealEstateRealAsset: "20%",
      EntrepreneurInvestment: "20%"
    }
  },
  {
    id: "tuition",
    title: "Education/Tuition Fund",
    description: "",
    paymentInfo: "Dynamic. No minimum.",
    fundProps: {
      LowYieldStable: "80%",
      HighYieldHighRisk: "5%",
      RealEstateRealAsset: "15%",
      EntrepreneurInvestment: "0%"
    }
  },
  {
    id: "retirement",
    title: "Retirement fund",
    description: "",
    paymentInfo: "Dynamic. No minimum.",
    fundProps: {
      LowYieldStable: "80%",
      HighYieldHighRisk: "5%",
      RealEstateRealAsset: "15%",
      EntrepreneurInvestment: "0%"
    }
  },
];


const Index = ({ data, location }) => {
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
            <h3>Portfolio Options:</h3>
            <Container fluid>
              <Row>
              <Tab.Container id="left-tabs-example" defaultActiveKey={investmentProducts[0].id}>
                <Row>
                  <Col sm={12} md={3}>
                    <Nav variant="pills" className="flex-column">
                    {investmentProducts.map((elm, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={elm.id}>{elm.title}</Nav.Link>
                      </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={12} md={9}>
                    <Tab.Content>
                      {investmentProducts.map((elm, index) => (
                        <Tab.Pane key={index} eventKey={elm.id}>
                          <Card className="portfolioCard">
                            <Card.Body>
                              <Card.Title>{elm.title}</Card.Title>
                              <Card.Text>{elm.description}</Card.Text>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>%</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Low-Yield Stable Fund</td>
                                      <td>{elm.fundProps.LowYieldStable}</td>
                                    </tr>
                                    <tr>
                                      <td>High-Yield High-Risk Fund</td>
                                      <td>{elm.fundProps.HighYieldHighRisk}</td>
                                    </tr>
                                    <tr>
                                      <td>Real Estate-Hard Asset Fund</td>
                                      <td>{elm.fundProps.RealEstateRealAsset}</td>
                                    </tr>
                                    <tr>
                                      <td>Entrepreneur/Startup Fund</td>
                                      <td>{elm.fundProps.EntrepreneurInvestment}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                                <blockquote className="blockquote mb-0">{elm.paymentInfo}</blockquote>
                              </Card.Body>
                            </Card>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
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
                      <select name="Portfolio[]" multiple>
                        {investmentProducts.map((elm, index) => <option key={index} value={elm.id}>{elm.title}</option>)}
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
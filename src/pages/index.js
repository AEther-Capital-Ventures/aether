import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Card, Tab, Tabs, Table, Button } from 'react-bootstrap';


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
    paymentInfo: "",
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
    paymentInfo: "",
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
    paymentInfo: "",
    fundProps: {
      LowYieldStable: "25%",
      HighYieldHighRisk: "35%",
      RealEstateRealAsset: "20%",
      EntrepreneurInvestment: "20%"
    }
  }
];


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <section id="about"> 
        <h2>About Us</h2> 
          <p>Æther Capital Ventures (ÆCV) is a pioneering financial hub hosted by a team of analysts, investors, traders, and world-class IT &amp; Real Estate professionals, bringing prime realty holdings, traditional investment vehicles, and blockchain technology together for a clean, streamlined membership-based investing experience. Our mission is to provide financial opportunities to investors and partners that would otherwise be unavailable in the modern environment. Our business network serves its clients, members and partners by utilizing the collective expertise and technical knowledge its Founding Team.</p>
      </section> 
      <section id="services">
        <h1>Our services</h1> 
        <Tabs defaultActiveKey="Cryptonyx" id="services-tabs" className="mb-3">
          <Tab eventKey="Cryptonyx" title="Cryptonyx">
            <h2>Cryptonyx</h2>
            <p>Money conversion service: USD-USDT & USDT-USD conversions at a flat 1% rate fee. Min Conversion amount $100</p>
            <form name="Investing" method="POST" data-netlify="true">
              <label>Email: <input type="email" name="email" /></label>
              <label>public Wallet: <input type="text" name="wallet" /></label>
              <label>Conversion Type: 
                <select name="type[]">
                  <option value="usd-usdt">USD &#x2192; USDT</option>
                  <option value="usdt-usd">USDT &#x2192; USD</option>
                </select>
              </label>
              <label>Amount: <input type="number" min="100" step="any" name="amount"></input></label>
              <Button variant="primary" type="submit">Send Order</Button>
            </form>
          </Tab>
          <Tab eventKey="Æther Investing" title="Æther Investing">
            <h2>Invest with Confidence</h2> 
            <p>Investing with us is simple and secure. Our Ethereum-based smart contracts enable you to invest in our real estate investment pool directly from the Block Explorer.</p> 
            <h3>How It Works</h3> 
            <p>You put money into the fund and let it grow over time. While assets generate gains, the value of the fund increases giving more value per share. Your investment is managed seamlessly through our platform, and all transactions are always available for viewing directly from the blockchain and our publications. </p>
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
            <p>Subscribe today for Exclusive Access!</p>
            <ul>
              <li>ÆCV innovates with optimization capabilities that make Real Estate asset management considerably more efficient by leveraging the security, speed, transparency and availability of blockchain technology in order to make the most out of valuable Real Estate market opportunities through specialized & strategic analysis.</li>
              <li>The user may define which Investment Tier they would like to adhere to, and track it over time on the platform.</li>
              <li>The network provides clients, members and partners with portfolio management solutions; education/tuition fund for parents looking to save money for their children's education; and a retirement fund.</li>
            </ul>
            <h2>Portfolio Options:</h2>
            <Container fluid>
              <Row>
                {investmentProducts.map((elm, index) => (
                  <Col key={index} xs={5}>
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
                              <td>Real Estate, Real Asset Investment Fund</td>
                              <td>{elm.fundProps.RealEstateRealAsset}</td>
                            </tr>
                            <tr>
                              <td>Entrepreneur Investment Fund</td>
                              <td>{elm.fundProps.EntrepreneurInvestment}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <blockquote className="blockquote mb-0">{elm.paymentInfo}</blockquote>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
            <form name="Investing" method="POST" data-netlify="true">
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
          </Tab>
          <Tab eventKey="Spark Academy Training" title="Spark Academy Training">
            <p>Don't get left behind in a fast moving technological world. Our training program is meant for people who wish to invest in themselves to secure their financial future by becoming members and gain access to the best data sets. ÆCV provides you with vast financial opportunities and also take you from beginner to expert in the following fields: stock market trading, crypto trading, real estate and hard asset management and investing; and blockchain technologies.</p>
            <h2>Our Network</h2> 
            <p>Join a community of like-minded individuals and professionals committed to financial success.</p>
            <h2>Latest News</h2> 
            <p>Stay informed about market trends, economic updates, and our latest investment strategies.</p> 
            <form name="SparkAcademyTraining" method="POST" data-netlify="true">
              <label>First Name: <input type="text" name="firstName" /></label>
              <label>Last Name: <input type="text" name="lastName" /></label>
              <label>Email: <input type="email" name="email" /></label>
              <Button variant="primary"  type="submit">Send Training Request</Button>
            </form>
          </Tab>
        </Tabs>
        <hr/>
      </section>
      <section id="contact"> 
        <h2>Contact Us</h2> 
        <p>We'd love to hear from you! Reach out for general inquiries, membership info, partnership opportunities, our referral program and more. Start your journey with Æther Capital Ventures today!</p> 
        <p><a href="mailto:contact@aethercapitalventures.com">Contact us</a></p> 
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
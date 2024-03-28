import * as React from "react";
import { graphql } from "gatsby";
import { Tab, Tabs } from 'react-bootstrap/Tab';


import Layout from "../components/layout";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <section id="about"> 
        <h2>About Us</h2> 
          <p>Æther Capital Ventures (ÆCV) is a pioneering financial hub hosted by a team of analysts, investors, traders, and world-class IT &amp; Real Estate professionals, bringing prime realty holdings, traditional investment vehicles, and blockchain technology together for a clean, streamlined membership-based investing experience. Our mission is to provide financial opportunities to investors and partners that would otherwise be unavailable in the modern environment. Our business network serves its clients, members and partners by utilizing the collective expertise and technical knowledge its Founding Team.</p>
      </section> 
      <section id="services"> 
        <h2>Our services</h2> 
        <ul>
          <li>
            <h1>Cryptonyx</h1>
              <p>Money conversion service: USD-USDT & USDT-USD conversions at a flat 1% rate fee.</p>
          </li>
          <li>
            <h1>Æther Investing</h1>
            <p>This is a brief description of the general investment strategy of the company as well as a summary of its technical innovations in the area of Real Estate:</p>
            <p>ÆCV innovates with optimization capabilities that make Real Estate asset management considerably more efficient by leveraging the security, speed, transparency and availability of blockchain technology in order to make the most out of valuable Real Estate market opportunities through specialized & strategic analysis.</p>
            <p>The user may define which Investment Tier they would like to adhere to, and track it over time on the platform.</p>
            <p>The network provides clients, members and partners with portfolio management solutions; education/tuition fund for parents looking to save money for their children's education; and a retirement fund.</p> 
            <h2>Base Portfolio</h2>
            <p></p>
            <table>
              <tr>
                <td>Low-Yield Stable Fund</td>
                <td>Dynamic</td>
              </tr>
              <tr>
                <td>High-Yield High-Risk Fund</td>
                <td>Dynamic</td>
              </tr>
              <tr>
                <td>Real Estate, Real Asset Investment Fund</td>
                <td>Dynamic</td>
              </tr>
              <tr>
                <td>Entrepreneur Investment Fund</td>
                <td>Dynamic</td>
              </tr>
            </table>
            <h2>Standard Portfolio</h2>
            <p></p>
            <table>
              <tr>
                <td>Low-Yield Stable Fund</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>High-Yield High-Risk Fund</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Real Estate, Real Asset Investment Fund</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Entrepreneur Investment Fund</td>
                <td>5%</td>
                </tr>
            </table>
            <h2>Premium Portfolio</h2>
            <p></p>
            <table>
              <tr>
                <td>Low-Yield Stable Fund</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>High-Yield High-Risk Fund</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Real Estate, Real Asset Investment Fund</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Entrepreneur Investment Fund</td>
                <td>10%</td>
              </tr>
            </table>
            <h2>Premium+ Portfolio</h2>
            <p></p>
            <table>
              <tr>
                <td>Low-Yield Stable Fund</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>High-Yield High-Risk Fund</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Real Estate, Real Asset Investment Fund</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Entrepreneur Investment Fund</td>
                <td>20%</td>
              </tr>
            </table>
            <h2>Executive Portfolio</h2>
            <p></p>
            <table>
              <tr>
                <td>Low-Yield Stable Fund</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>High-Yield High-Risk Fund</td>
                <td>35%</td>
              </tr>
              <tr>
                <td>Real Estate, Real Asset Investment Fund</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Entrepreneur Investment Fund</td>
                <td>20%</td>
              </tr>
            </table>
          </li>
          <li>
            <h1>Spark Academy Training</h1>
              <p>Don't get left behind in a fast moving technological world. Our training program is meant for people who wish to invest in themselves to secure their financial future by becoming members and gain access to the best data sets. ÆCV provides you with vast financial opportunities and also take you from beginner to expert in the following fields: stock market trading, crypto trading, real estate and hard asset management and investing; and blockchain technologies.</p>
          </li>
        </ul>
      </section>
      <section id="invest"> 
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
        <p><a href="mailto:contact@aethercapitalventures.com">Join us!</a></p> 
      </section> 
      <section id="news"> 
        <h2>Latest News</h2> 
        <p>Stay informed about market trends, economic updates, and our latest investment strategies.</p> 
      </section> 
      <section id="network"> 
        <h2>Our Network</h2> 
        <p>Join a community of like-minded individuals and professionals committed to financial success.</p> 
      </section> 
      <section id="contact"> 
        <h2>Contact Us</h2> 
        <p>We'd love to hear from you! Reach out for general inquiries, membership info, partnership opportunities, our referral program and more. Start your journey with Æther Capital Ventures today!</p> 
        <p>Contact us: contact@aethercapitalventures.com</p> 
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
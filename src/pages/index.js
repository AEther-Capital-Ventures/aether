import * as React from "react";
import { graphql } from "gatsby";


import Layout from "../components/layout";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <section id="about"> 
        <h2>About Us</h2> 
        <p>Æther Capital Ventures (ÆCV) is a pioneering financial hub hosted by a team of analysts, investors, traders, and world-class IT &amp; Real Estate professionals bringing prime realty holdings and blockchain technology together for a more streamlined membership-based investing experience. Our mission is to make Real Estate investments more accessible by leveraging the security and transparency of blockchain technology in order to make the most out of valuable Real Estate market opportunities through specialized analysis.</p> 
      </section> 
      <section id="invest"> 
        <h2>Invest with Confidence</h2> 
        <p>Investing with us is simple and secure. Our Ethereum-based smart contracts enable you to invest in our real estate investment pool directly from the Block Explorer.</p> 
        <h3>How It Works</h3> 
        <p>You put Ethereum into the real estate investment pool and let it grow over time. While assets generate gains, the value of the pool increases giving more value per share. Your investment is managed seamlessly through our platform, and all transactions are always available for viewing directly from the blockchain. </p>
        <h3>Discover ÆCV:</h3> 
        <p>Join Our Exclusive Investment Network!</p> 
        <ul>
          <li>Secure Your Future: Start planning your retirement today.</li>
          <li>Wealth Growth: Learn strategies to grow your wealth effectively.</li>
          <li>Insider Knowledge: Stay ahead with exclusive market insights.</li>
          <li>Expert Guidance: Access personalized reports from our team.</li>
          <li>Community Support: Network with like-minded individuals.</li>
          <li>Weekly Sessions</li>
          <li>Daily Market Insights and Analysis</li>
          <li>Private Community and Networking</li>
        </ul>
        <p>0.1 ETH one time fee + $20 (paid in Eth) per month for Membership Access.</p>
        <p>Secure Your Seat Today! <a href="mailto:cdanielmejia33@gmail.com">Order Today!</a></p> 
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
        <p>Contact Us: cdanielmejia33@gmail.com</p> 
      </section> 
    </Layout>
  )
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
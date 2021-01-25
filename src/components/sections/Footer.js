import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../Layout"
import { H3, P, HeaderGroup } from "../styles/TextStyles"

const Footer = () => {
  return (
    <Layout>
      <FooterContainer>
        <FooterGroup>
          <FooterLogo>
            <Link to="https://fieldproapp.com/">
              <img
                src={require("../../../static/images/optimetriks-logo.png")}
              />
            </Link>
          </FooterLogo>
          <LinkGroup>
            <H3>Product</H3>
            <Link to="https://fieldproapp.com/index">Home</Link>
            <Link to="https://fieldproapp.com/sales">Sales</Link>
            <Link to="https://fieldproapp.com/retail">Retail Execution</Link>
            <Link to="https://fieldproapp.com/app">Mobile App</Link>
            <Link to="https://fieldproapp.com/analytics">BI & Analytics</Link>
            <Link to="https://fieldproapp.com/pricing">Pricing</Link>
          </LinkGroup>
          <LinkGroup>
            <H3>Resources</H3>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="https://fieldproapp.com/support/">Support</Link>
            <Link to="https://help.fieldproapp.com/">Knowledge Base</Link>
            <Link to="https://fieldproapp.com/terms">Terms and Conditions</Link>
          </LinkGroup>
          <LinkGroup>
            <H3>Company</H3>
            <Link to="https://fieldproapp.com/about">About Us</Link>
            <Link to="/">Blog</Link>
            <Link to="https://fieldproapp.com/contact">Contact Us</Link>
            <Link to="https://optimetriks.factorialhr.com/">Careers</Link>
          </LinkGroup>
          <LinkGroup>
            <H3>Social</H3>
            <Link to="https://www.linkedin.com/company/optimetriks">
              LinkedIn
            </Link>
            <Link to="https://www.facebook.com/fieldproapp">Facebook</Link>
            <Link to="https://twitter.com/optimetriks">Twitter</Link>
            <Link to="https://www.youtube.com/channel/UC3lznqy3g-OCcUvci_FkVzg">
              YouTube
            </Link>
            <Link to="https://medium.com/@optimetriks">Medium</Link>
          </LinkGroup>
        </FooterGroup>
        <Copyright>
          <P>
            © 2020 | Optimetriks | All rights reserved | Terms and Conditions
            apply
          </P>
        </Copyright>
      </FooterContainer>
    </Layout>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100vw;
  margin: 6em 0 0 0;
  padding: 3em 0 2em 0;
  background-color: #f5f5f5;
  @media (max-width: 32em) {
    overflow-x: hidden;
  }
`
const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 3em;
  max-width: 72em;
  margin: 0 0 0 6em;
  padding: 0;
  @media (max-width: 32em) {
    display: flex;
    flex-wrap: wrap;
    width: 24em;
    margin: 0 3em;
  }
`
const FooterLogo = styled.div`
  width: 10em;
  margin: 0.2em 4em 0 0;
  padding: 0;
  @media (max-width: 32em) {
    margin: 0.2em 10em -2em -0.2em;
  }
`
const LinkGroup = styled.div`
  display: grid;
  align-content: flex-start;
  grid-gap: 0.5em;
  min-width: 10em;
  margin: 0;
  padding: 0;
  h3 {
    font-size: 1em;
    font-weight: 900;
    color: #2c2c2c;
    margin: 0;
    padding: 0;
  }
  a {
    font-size: 0.9em;
    font-weight: 500;
    color: #2c2c2c;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 32em) {
    width: 0;
    margin: 0 -3em -1em 0;
  }
`
const Copyright = styled.div`
  margin: 2em 0 0 2.5em;
  padding: 0;
  p {
    font-size: 0.9em;
    font-weight: 500;
    color: #2c2c2c;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 32em) {
    width: 20em;
    margin: 3em 0 0 -4em;
  }
`

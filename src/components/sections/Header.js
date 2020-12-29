import React, { useEffect, useRef, useState } from "react";
import styled, { isStyledComponent } from "styled-components";
import { Link } from "gatsby";

import { HeaderGroup } from "../styles/TextStyles";

function Header() {
  /*  */
  const [productIsOpen, setProductIsOpen] = useState(false);
  const [rsrcsIsOpen, setRsrcsIsOpen] = useState(false);
  const [companyIsOpen, setCompanyIsOpen] = useState(false);

  const [boxShadow, setBoxShadow] = useState(false);
  const navRef = useRef();
  navRef.current = boxShadow;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setBoxShadow(show);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderGroup>
      <MenuContainer boxShadow={boxShadow}>
        <MenuGroup>
          <MenuLogo>
            <Link to="https://fieldproapp.com/">
              <img src={require("../../../static/images/fieldpro-logo.png")} />
            </Link>
          </MenuLogo>

          <MenuLangBtns>
            {/*
            <Link to="/">
              <img src={require("../../../static/images/flag-en.png")} />
            </Link>
            <Link to="/">
              <img src={require("../../../static/images/flag-fr.png")} />
            </Link>
            */}
          </MenuLangBtns>
          <MenuLinks>
            <Link to="https://fieldproapp.com">
              <div class="darkGrey">Home</div>
            </Link>
            <DropDownContainer>
              <DropDownButton
                onClick={() => {
                  setProductIsOpen(!productIsOpen);
                  setRsrcsIsOpen(false);
                  setCompanyIsOpen(false);
                }}
              >
                <DropDownLabel>Product</DropDownLabel>
                <ProductMoreIcon
                  productIsOpen={productIsOpen}
                  src={require("../../../static/images/expand_more.png")}
                />
                <ProductLessIcon
                  productIsOpen={productIsOpen}
                  src={require("../../../static/images/expand_less.png")}
                />
              </DropDownButton>
              <ProductDropDown productIsOpen={productIsOpen}>
                <DropDownGroup>
                  <Link to="https://fieldproapp.com/sales" class="darkGrey">
                    Sales Automation
                  </Link>
                  <Link to="https://fieldproapp.com/retail" class="darkGrey">
                    Retail Execution
                  </Link>
                  <Link to="https://fieldproapp.com/app" class="darkGrey">
                    Mobile App
                  </Link>
                  <Link to="https://fieldproapp.com/analytics" class="darkGrey">
                    BI & Analytics
                  </Link>
                </DropDownGroup>
              </ProductDropDown>
            </DropDownContainer>
            <Link to="https://fieldproapp.com/pricing">
              <div class="darkGrey">Pricing</div>
            </Link>
            <DropDownContainer>
              <DropDownButton
                onClick={() => {
                  setRsrcsIsOpen(!rsrcsIsOpen);
                  setProductIsOpen(false);
                  setCompanyIsOpen(false);
                }}
              >
                <DropDownLabel>Resources</DropDownLabel>
                <RsrcsMoreIcon
                  rsrcsIsOpen={rsrcsIsOpen}
                  src={require("../../../static/images/expand_more.png")}
                />
                <RsrcsLessIcon
                  rsrcsIsOpen={rsrcsIsOpen}
                  src={require("../../../static/images/expand_less.png")}
                />
              </DropDownButton>
              <RsrcsDropDown rsrcsIsOpen={rsrcsIsOpen}>
                <DropDownGroup>
                  <Link to="https://blog.fieldproapp.com" class="darkGrey">
                    Blog
                  </Link>
                  <Link to="https://fieldproapp.com/support" class="darkGrey">
                    Support
                  </Link>
                  <Link to="https://help.fieldpro.com" class="darkGrey">
                    Knowledge Base
                  </Link>
                  <Link to="https://fieldproapp.com/terms" class="darkGrey">
                    Terms & Consitions
                  </Link>
                </DropDownGroup>
              </RsrcsDropDown>
            </DropDownContainer>
            <DropDownContainer>
              <DropDownButton
                onClick={() => {
                  setCompanyIsOpen(!companyIsOpen);
                  setProductIsOpen(false);
                  setRsrcsIsOpen(false);
                }}
              >
                <DropDownLabel>Company</DropDownLabel>
                <CompanyMoreIcon
                  companyIsOpen={companyIsOpen}
                  src={require("../../../static/images/expand_more.png")}
                />
                <CompanyLessIcon
                  companyIsOpen={companyIsOpen}
                  src={require("../../../static/images/expand_less.png")}
                />
              </DropDownButton>
              <CompanyDropDown companyIsOpen={companyIsOpen}>
                <DropDownGroup>
                  <Link to="https://fieldproapp.com/about" class="darkGrey">
                    About
                  </Link>
                  <Link to="https://blog.fieldproapp.com" class="darkGrey">
                    Case Studies
                  </Link>
                  <Link
                    to="https://optimetriks.factorialhr.com"
                    class="darkGrey"
                  >
                    Careers
                  </Link>
                </DropDownGroup>
              </CompanyDropDown>
            </DropDownContainer>
            <Link to="https://fieldproapp.com/contact">
              <div>Contact Us</div>
            </Link>
            <Link to="https://webapp-master.smalapp.com/">
              <div>Log In</div>
            </Link>
            <Link to="https://fieldproapp.com/get-trial">
              <button class="menuBtn">Get Trial</button>
            </Link>
          </MenuLinks>
        </MenuGroup>
      </MenuContainer>
    </HeaderGroup>
  );
}

export default Header;

const MenuContainer = styled.header`
  display: grid;
  position: fixed;
  top: 0;
  width: 100vw;
  margin: 0;
  padding: 0.25em 0 0 0;
  background: #fefefe;
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? "0 0.5em 1em #00000007" : "none"};
  z-index: 100;
`;
const MenuGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: space-between;
  justify-self: center;
  max-width: 72em;
  margin: 2em -0.5em -0.8em 0;
  padding: 0;
`;
const MenuLogo = styled.div`
  margin: -1em 1em 0 -2em;
  padding: 0;
`;
const MenuLangBtns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1em;
  justify-content: end;
  align-items: flex-start;
  margin: 1em 2em 0 8em;
  padding: 0;
`;
const MenuLinks = styled.nav`
  display: grid;
  grid-template-columns: repeat(8, auto);
  grid-gap: 1em;
  align-items: flex-start;
  margin: -0.5em 0 0 0;
  padding: 0;
  .menuBtn {
    margin: -1em 0 0 0;
  }
`;
const DropDownContainer = styled.div`
  position: relative;
  display: grid;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
const DropDownButton = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, auto);
  cursor: pointer;
  margin: 0 1.1em 0.5em 0;
  padding: 0;
  :hover {
    opacity: 0.5;
  }
`;
const DropDownLabel = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.5;
  color: #6c6c6c;
  margin: 0;
  padding: 0;
`;
const ProductMoreIcon = styled.img`
  visibility: ${({ productIsOpen }) => (productIsOpen ? "hidden" : "visible")};
  position: absolute;
  justify-self: flex-end;
  align-self: center;
  height: 0.45em;
  margin: 0.15em -1.1em 0 0;
  padding: 0;
`;
const ProductLessIcon = styled.img`
  visibility: ${({ productIsOpen }) => (productIsOpen ? "visible" : "hidden")};
  position: absolute;
  justify-self: flex-end;
  align-self: center;
  height: 0.45em;
  margin: 0.15em -1.1em 0 0;
  padding: 0;
`;
const RsrcsMoreIcon = styled.img`
  visibility: ${({ rsrcsIsOpen }) => (rsrcsIsOpen ? "hidden" : "visible")};
  position: absolute;
  justify-self: flex-end;
  align-self: center;
  height: 0.45em;
  margin: 0.15em -1.1em 0 0;
  padding: 0;
`;
const RsrcsLessIcon = styled.img`
  visibility: ${({ rsrcsIsOpen }) => (rsrcsIsOpen ? "visible" : "hidden")};
  position: absolute;
  justify-self: flex-end;
  align-self: center;
  height: 0.45em;
  margin: 0.15em -1.1em 0 0;
  padding: 0;
`;
const CompanyMoreIcon = styled.img`
  visibility: ${({ companyIsOpen }) => (companyIsOpen ? "hidden" : "visible")};
  position: absolute;
  justify-self: flex-end;
  align-self: center;
  height: 0.45em;
  margin: 0.15em -1.1em 0 0;
  padding: 0;
`;
const CompanyLessIcon = styled.img`
  visibility: ${({ companyIsOpen }) => (companyIsOpen ? "visible" : "hidden")};
  position: absolute;
  justify-self: flex-end;
  align-self: center;
  height: 0.45em;
  margin: 0.15em -1.1em 0 0;
  padding: 0;
`;
const ProductDropDown = styled.div`
  visibility: ${({ productIsOpen }) => (productIsOpen ? "visible" : "hidden")};
  position: absolute;
  margin: 0;
  padding: 0;
`;
const RsrcsDropDown = styled.div`
  visibility: ${({ rsrcsIsOpen }) => (rsrcsIsOpen ? "visible" : "hidden")};
  position: absolute;
  margin: 0;
  padding: 0;
`;
const CompanyDropDown = styled.div`
  visibility: ${({ companyIsOpen }) => (companyIsOpen ? "visible" : "hidden")};
  position: absolute;
  margin: 0;
  padding: 0;
`;
const DropDownGroup = styled.div`
  display: grid;
  position: absolute;
  background: #fefefe;
  white-space: nowrap;
  grid-gap: 0.3em;
  border-radius: 0.25em;
  box-shadow: 0 0.4em 2em #00000010;
  width: auto;
  margin: 2.3em 0 2em -1.5em;
  padding: 1.2em 1.7em 1.3em 1.7em;
  z-index: 100;
`;

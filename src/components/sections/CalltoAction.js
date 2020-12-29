import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../Layout.js"
import { H1, H2, P, Button, Input, Label } from "../styles/TextStyles"
class CalltoAction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      sent: false,
      error: false,
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.OnFormSubmit = this.OnFormSubmit.bind(this)
  }
  OnFormSubmit(e) {
    e.preventDefault()
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbynVwvTEGGcnBn_OB5UuraPGO-OVJGx0fCHUZ-aJa612HjIqV5X/exec"
    const url = `${scriptUrl}?callback=ctrlq&name=${this.state.name}$email=${this.state.email}`
    fetch(url, { mode: "no-cors" }).then(
      () => {
        this.setState({ sent: true })
      },
      () => {
        this.setState({ error: true })
      }
    )
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Layout>
        <CTAGroup>
          <CTAImage>
            <img src={require("../../../static/images/illustration.png")} />
          </CTAImage>
          <CTAText>
            <H2>Digitise your field sales operations</H2>
            <CTAForm onSubmit={this.onFormSubmit} id="getStartedForm">
              <Email>
                <Label>Email</Label>
                <Input
                  onChange={this.onInputChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@workplace.com"
                />
              </Email>
              <Button
                onclick="getstartedtosheets()"
                type="submit"
                id="getStarted"
              >
                Get Started
              </Button>
            </CTAForm>
          </CTAText>
        </CTAGroup>
      </Layout>
    )
  }
}

export default CalltoAction

const CTAGroup = styled.div`
  position: relative;
  display: grid;
  max-width: 72em;
  height: 24em;
  background: #fefefe;
  box-shadow: 0 0.5em 2em #00000018;
  border-radius: 0.5em;
  margin: 0 0 4em 0;
  padding: 0;
`
const CTAImage = styled.div`
  position: absolute;
  align-self: center;
  z-index: 1;
`
const CTAText = styled.div`
  position: relative;
  align-self: center;
  top: -2em;
  max-width: 56em;
  padding: 0 8em;
  z-index: 2;
  h2 {
    font-size: 3.25em;
  }
`
const CTAForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-start;
  margin: -2em 0;
`
const Email = styled.div`
  display: grid;
`

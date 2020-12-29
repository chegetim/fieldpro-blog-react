import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: 800;
  font-size: 3em;
  line-height: 1.25;
  margin: 0 0 0 0;
`

export const H2 = styled.h2`
  font-weight: 800;
  font-size: 2em;
  line-height: 1.25;
  margin: 1em 0 1em 0;
`

export const H3 = styled.h3`
  font-weight: 800;
  font-size: 1.5em;
  line-height: 1.25;
  margin: 1em 0 1em 0;
`

export const P = styled.p`
  font-weight: 400;
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0 0 1em 0;
`

export const Button = styled.button`
  margin: 1.9em 0 0 1.25em;
  padding: auto;
  width: 10em;
  height: 3em;
  background: #febd55;
  color: #2c2c2c;
  border-radius: 0.2em;
  border: none;
  font-weight: 800;
  font-size: 1.25em;
  cursor: pointer;
  :hover {
    box-shadow: 0 1em 2em #00000016;
  }
`

export const Input = styled.input`
  margin: 0;
  padding: 0 1em;
  height: 3em;
  width: 18em;
  border-style: solid;
  border-color: #2c2c2c;
  border-width: 0.1em;
  border-radius: 0.2em;
  font-size: 1.2em;
`

export const Label = styled.label`
  margin: 0 0 0.5em 0.1em;
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.5;
`

export const HeaderGroup = styled.div`
  p {
    font-weight: 400;
    font-size: 1em;
    line-height: 1.5;
    margin: 0;
  }
  a {
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5;
    color: #febd55;
    text-decoration: none;
    margin: 0;
    :hover {
      opacity: 0.5;
    }
  }
  button {
    color: #febd55;
    border-color: #febd55;
    border-width: 0.1em;
    border-style: solid;
    border-radius: 0.2em;
    background: none;
    cursor: pointer;
    padding: 0.5em 1em;
    margin: 0;
    :hover {
      opacity: 1 !important;
      box-shadow: 0 1em 1em #00000007;
    }
  }
  .darkGrey {
    color: #6c6c6c;
  }
`

export const Caption = styled.p`
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1.5;
  color: #6c6c6c;
  margin: 0;
`

import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: 800;
  font-size: 3em;
  line-height: 1.25;
  margin: 0 0 0 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const H2 = styled.h2`
  font-weight: 800;
  font-size: 2em;
  line-height: 1.25;
  margin: 1em 0 1em 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const H3 = styled.h3`
  font-weight: 800;
  font-size: 1.5em;
  line-height: 1.25;
  margin: 1em 0 1em 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const P = styled.p`
  font-weight: 400;
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0 0 1em 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const Label = styled.label`
  margin: 0 0 0.5em 0.1em;
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const HeaderGroup = styled.div`
  p {
    font-weight: 400;
    font-size: 1em;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5;
    color: #febd55;
    text-decoration: none;
    margin: 0;
    padding: 0.1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    :hover {
      font-weight: 800;
      border-bottom: 0.2em solid;
      padding-bottom: 0.1em;
    }
    :active {
      font-weight: 800;
      border-bottom: 0.2em solid;
      padding-bottom: 0.1em;
    }
  }
  .active {
    font-weight: 800;
    border-bottom: 0.2em solid;
    padding-bottom: 0.1em;
  }
  button {
    color: #febd55;
    border-color: #febd5590;
    border-width: 0.15em;
    border-style: solid;
    border-radius: 0.2em;
    background: none;
    cursor: pointer;
    padding: 0.5em 1em;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    :hover {
      opacity: 1 !important;
      box-shadow: 0 1em 1em #00000007;
    }
  }
  .darkGrey {
    color: #6c6c6c;
    :hover {
      border-color: #6c6c6c;
    }
    :active {
      color: #2c2c2c;
      border-color: #2c2c2c;
    }
  }
`

export const Caption = styled.p`
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1.5;
  color: #6c6c6c;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

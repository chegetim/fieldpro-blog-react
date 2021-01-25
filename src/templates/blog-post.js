import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout.js"
import SEO from "../components/seo"

import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer.js"
import {
  H1,
  H2,
  H3,
  P,
  Caption,
  Button,
  Input,
  Label,
} from "../components/styles/TextStyles"

import { CategoryTagContainer, CategoryTag } from "../pages/index.js"

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    fetch(
      "https://script.google.com/macros/s/AKfycbynVwvTEGGcnBn_OB5UuraPGO-OVJGx0fCHUZ-aJa612HjIqV5X/exec",
      {
        method: "POST",
        body: data,
      }
    )
    window.location.href = "https://fieldproapp.com/get-trial/"
  }
  render() {
    const post = this.props.data.contentfulPost

    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const options = {
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
        [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
        [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
        [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <Image>
            <img src={`https:${node.data.target.fields.file["en-US"].url}`} />
          </Image>
        ),
        [INLINES.EMBEDDED_ENTRY]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [INLINES.HYPERLINK]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [INLINES.ENTRY_HYPERLINK]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [INLINES.ASSET_HYPERLINK]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
      },
      renderMark: {},
    }

    return (
      <Layout location={this.props.location}>
        <SEO title={post.title} description={post.subtitle} />
        <Header />
        <BackContainerTop>
          <Link to="/">
            <BackGroup>
              <BackIcon src={require("../../static/images/arrow_left.png")} />
              <BackLabel>Back to All Posts</BackLabel>
            </BackGroup>
          </Link>
        </BackContainerTop>
        <Body>
          <BannerGroup>
            <Title>
              <H1>{post.title}</H1>
            </Title>
            <CategoryGroup>
              <CategoryTagContainer>
                {post.categories.map(category => {
                  return (
                    <Link to={`/${category.slug}`}>
                      <CategoryTag>{category.title}&#160;&#160;|</CategoryTag>
                    </Link>
                  )
                })}
              </CategoryTagContainer>
            </CategoryGroup>
            <PostImage>
              <img src={post.image.fluid.src} />
            </PostImage>
          </BannerGroup>
          <BodyGroup>
            {documentToReactComponents(post.content.json, options)}
          </BodyGroup>
          <CTAContainer>
            <CTABg>
              <img src={require("../../static/images/illustration.png")} />
            </CTABg>
            <CTAGroup>
              <CTAText>
                <H2>
                  {post.callToAction || "Digitise your field sales operations"}
                </H2>
                <CTAForm onSubmit={this.handleSubmit}>
                  <Email>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="email@workplace.com"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </Email>
                  <Button type="submit" id="getStarted">
                    Get Started
                  </Button>
                </CTAForm>
              </CTAText>
            </CTAGroup>
          </CTAContainer>
        </Body>
        <BackContainerBottom>
          <Link to="/">
            <BackGroup>
              <BackIcon src={require("../../static/images/arrow_left.png")} />
              <BackLabel>Back to All Posts</BackLabel>
            </BackGroup>
          </Link>
        </BackContainerBottom>
        <Footer />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const BlogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      categories {
        slug
        title
      }
      image {
        fluid {
          src
        }
      }
      content {
        json
      }
      callToAction
    }
  }
`
const BackContainerTop = styled.div`
  display: grid;
  justify-items: center;
  margin: 8em 0 -5.6em 0;
  padding: 0;
  overflow-x: hidden;
  @media (max-width: 32em) {
    margin: 8em 0 -5.6em 2em;
  }
`
const BackContainerBottom = styled.div`
  display: grid;
  justify-items: center;
  margin: 1.5em 0 8em 0;
  padding: 0;
  overflow-x: hidden;
  @media (max-width: 32em) {
    margin: 0.5em 0 6em 2em;
  }
`
const BackGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-start;
  width: 60em;
  margin: 0;
  padding: 0;
  :hover {
    transform: scale(1.1) translate(2.5em, 0);
  }
`
const BackIcon = styled.img`
  align-self: center;
  height: 0.8em;
  margin: 0 0.4em 0 0;
  padding: 0;
`
const BackLabel = styled.div`
  align-self: center;
  font-weight: 600;
  font-size: 1em;
  color: #6c6c6c;
  margin: -0.1em 0 0 0;
  padding: 0;
`
const Body = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`
const BannerGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  position: relative;
  max-width: 64em;
  margin: 8em 0 auto 0;
  padding: 0;
  @media (max-width: 32em) {
    margin: 8em 0 0 0;
    width: 20em;
  }
`
const Title = styled.div`
  display: grid;
  margin: 0 4em 0 2em;
  @media (max-width: 32em) {
    margin: 0 5em 0 0;
    font-size: 0.6em;
  }
`
const CategoryGroup = styled.div`
  display: grid;
  margin: 0.5em 0 2.5em 2.1em;
  padding: 0;
  @media (max-width: 32em) {
    margin: 0.5em 0 2.5em 0;
  }
`
const Labels = styled(Caption)`
  font-size: 1em;
  font-weight: 600;
`
const PostImage = styled.div`
  margin: 0;
  padding: 0;
  width: 64em;
  border: 0.05em solid #6c6c6c10;
  img {
    margin: 0;
    padding: 0;
    width: 64em;
  }
  @media (max-width: 32em) {
    display: grid;
    align-self: center;
    margin: 0 0 2em -3em;
    width: 26em;
  }
`
const Image = styled.div``

const BodyGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-self: left;
  max-width: 40em;
  margin: 3em auto 4em 8em;
  padding: 0;
  img {
    margin: 1em 1em 1em 0;
    padding: 0;
    width: 39em;
  }
  a {
    font-size: 1em;
    font-weight: 600;
    line-height: 1.5;
    color: #febd55;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0.1em;
    :hover {
      font-weight: 700;
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  @media (max-width: 32em) {
    margin: 0 1em 2em 2.5em;
    width: 19em;
    img {
      margin: 1em 1em 1em 0;
      width: 18.5em;
    }
    p,
    a {
      margin: 0 1em 1em 0;
      width: 15em;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1em 1em 1em 0;
      width: 10em;
    }
    ul,
    li {
      margin: 0 10em 0 0.5em !important;
      width: 12em !important;
    }
  }
`
const CTAContainer = styled.div`
  position: relative;
  display: grid;
  max-width: 64em;
  margin: 0;
  padding: 0;
  @media (max-width: 32em) {
    width: 24em;
  }
`
const CTABg = styled.div`
  position: absolute;
  align-self: center;
  z-index: 1;
`
const CTAGroup = styled.div`
  position: relative;
  display: grid;
  max-width: 64em;
  background: #fefefe;
  box-shadow: 0 0.5em 2em #00000018;
  border-radius: 0.5em;
  margin: 0 0 4em 0;
  padding: 4em 8em 6em 8em;
  @media (max-width: 32em) {
    width: 24em;
    margin: 0 0 4em 0;
    padding: 1em 2em 3em 2em;
  }
`
const CTAText = styled.div`
  position: relative;
  align-self: center;
  top: -2em;
  max-width: 56em;
  padding: 0;
  z-index: 2;
  h2 {
    font-size: 3.25em;
  }
  @media (max-width: 32em) {
    width: 24em;
    margin: 0;
    padding: 0;
    h2 {
      font-size: 2.5em;
      margin: 1.2em 1.2em 1em 0;
    }
  }
`
const CTAForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-start;
  margin: -1em 0 1em 0;
  @media (max-width: 32em) {
    grid-template-columns: repeat(1, auto);
    input {
      width: 17em;
    }
    button {
      width: 16.3em;
      margin: 1em 0 -2.5em 0;
    }
  }
`
const Email = styled.div`
  display: grid;
`

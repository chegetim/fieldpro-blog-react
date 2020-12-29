import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout.js"
import SEO from "../components/seo"

import Header from "../components/sections/Header"
import { H1, H2, Caption } from "../components/styles/TextStyles"
import Footer from "../components/sections/Footer.js"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="FieldPro Blog" keywords={[]} />
        <Header />
        <Body>
          <FeaturedPost>
            {posts.map(({ node }) => {
              const title = node.title || node.slug
              if (node.featured) {
                return (
                  <div key={node.slug}>
                    <FeaturedImage>
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        <img src={node.image.fluid.src} />
                      </Link>
                    </FeaturedImage>
                    <FeaturedText>
                      <FeaturedTitle>
                        <Link style={{ boxShadow: `none` }} to={node.slug}>
                          {title}
                        </Link>
                      </FeaturedTitle>
                      <Labels>
                        <Caption>{/* node.tags */}</Caption>
                      </Labels>
                    </FeaturedText>
                  </div>
                )
              }
            })}
          </FeaturedPost>
          <PostGroup>
            {posts.map(({ node }) => {
              const title = node.title || node.slug
              if (node.featured) {
              } else {
                return (
                  <Post key={node.slug}>
                    <PostImage>
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        <img src={node.image.fluid.src} />
                      </Link>
                    </PostImage>
                    <PostText>
                      <Title>
                        <Link style={{ boxShadow: `none` }} to={node.slug}>
                          {title}
                        </Link>
                      </Title>
                      <Labels>
                        <Caption>{/* node.tags */}</Caption>
                      </Labels>
                    </PostText>
                  </Post>
                )
              }
            })}
          </PostGroup>
        </Body>
        <Footer />
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          featured
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
const Body = styled.div`
  display: grid;
  justify-items: center;
  margin: 0;
  padding: 0;
`
const FeaturedPost = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  max-width: 72em;
  margin: 8em 0 0 0;
  padding: 0;
`
const FeaturedImage = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 30em;
  z-index: 1;
  border: 0.05em solid #6c6c6c10;
  img {
    margin: 0;
    padding: 0;
    height: 30em;
    object-fit: cover;
  }
`
const FeaturedText = styled.div`
  position: absolute;
  display: grid;
  grid-gap: 1em;
  max-width: 40em;
  z-index: 10;
  background: #fefefe;
  margin: -4em 0 0 4em;
  padding: 1.5em 2em;
  box-shadow: 0 1em 2em #00000010;
`
const FeaturedTitle = styled(H1)`
  font-size: 2em;
  line-height: 1.25;
`
const PostGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1.5em;
  justify-content: space-between;
  max-width: 72em;
  margin: 14em 0 0 0;
  padding: 0;
`
const Post = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  align-content: flex-start;
  position: relative;
  max-width: 20em;
  margin: 0 0 2em 0;
  padding: 0;
`
const PostImage = styled.div`
  margin: 0;
  padding: 0;
  height: 16em;
  border: 0.05em solid #6c6c6c10;
  img {
    margin: 0;
    padding: 0;
    height: 16em;
    object-fit: cover;
  }
`
const PostText = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
`
const Title = styled(H2)`
  margin: 1em 0 0 0;
  font-size: 1.5em;
  line-height: 1.25;
`
const Labels = styled(Caption)`
  margin: 0.75em 0 0 0;
  font-size: 1em;
  font-weight: 600;
`

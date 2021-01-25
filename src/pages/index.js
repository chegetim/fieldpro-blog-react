import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout.js"
import SEO from "../components/seo"

import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer.js"
import { HeaderGroup, H1, H2, Caption } from "../components/styles/TextStyles"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="FieldPro Blog" keywords={[]} />
        <Header />
        <HeaderGroup>
          <CategoryMenuContainer>
            <CategoryGroup>
              <AllCategories>
                <Link to="/" activeClassName="active">
                  All
                </Link>
              </AllCategories>
              {data.allContentfulCategory.edges.map(({ node }) => {
                return (
                  <Category key={node.slug}>
                    <Link activeClassName="active" to={`/${node.slug}`}>
                      {node.title}
                    </Link>
                  </Category>
                )
              })}
            </CategoryGroup>
          </CategoryMenuContainer>
        </HeaderGroup>
        <Body>
          <FeaturedPost>
            {posts.map(({ node }) => {
              const title = node.title || node.slug
              if (node.featured) {
                return (
                  <div key={node.slug}>
                    <FeaturedImage>
                      <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                        <img src={node.image.fluid.src} />
                      </Link>
                    </FeaturedImage>
                    <FeaturedText>
                      <FeaturedTitle>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={`/${node.slug}`}
                        >
                          {title}
                        </Link>
                      </FeaturedTitle>
                      <CategoryTagContainer>
                        {node.categories.map(category => {
                          return (
                            <Link to={`/${category.slug}`}>
                              <CategoryTag>
                                {category.title}&#160;&#160;|
                              </CategoryTag>
                            </Link>
                          )
                        })}
                      </CategoryTagContainer>
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
                      <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                        <img src={node.image.fluid.src} />
                      </Link>
                    </PostImage>
                    <PostText>
                      <Title>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={`/${node.slug}`}
                        >
                          {title}
                        </Link>
                      </Title>
                      <CategoryTagContainer>
                        {node.categories.map(category => {
                          return (
                            <Link to={`/${category.slug}`}>
                              <CategoryTag>
                                {category.title}&#160;&#160;|
                              </CategoryTag>
                            </Link>
                          )
                        })}
                      </CategoryTagContainer>
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
    allContentfulCategory(sort: { fields: updatedAt, order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          slug
          title
          featured
          image {
            fluid {
              src
            }
          }
          categories {
            title
            slug
          }
        }
      }
    }
  }
`
export const CategoryMenuContainer = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  top: 7em;
  width: 100vw;
  margin: 1em 0;
  padding: 0;
  @media (max-width: 32em) {
    width: 24em;
  }
`
export const CategoryGroup = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  justify-content: flex-start;
  justify-self: center;
  width: 64em;
  margin: 0;
  padding: 0;
  @media (max-width: 32em) {
    display: flex;
    flex-wrap: wrap;
    width: 24em;
    margin: -0.5em 0 -2em 1em;
  }
`
export const AllCategories = styled.div`
  margin: 0;
  padding: 0;
  white-space: nowrap;
  a {
    font-size: 1em;
    font-weight: 600;
    color: #6c6c6c;
    max-width: 24em;
    margin: 0 0.5em;
    padding: 0 0.1em;
  }
  @media (max-width: 32em) {
    margin: 0 0 1em 0;
  }
`
export const Category = styled.div`
  margin: 0;
  padding: 0;
  white-space: nowrap;
  a {
    font-size: 1em;
    font-weight: 600;
    color: #6c6c6c;
    margin: 0 0.5em;
    padding: 0 0.1em;
    max-width: 24em;
  }
  @media (max-width: 32em) {
    margin: 0 0 0.8em 0;
  }
`
export const Body = styled.div`
  display: grid;
  justify-items: center;
  margin: 0;
  padding: 0;
`
export const FeaturedPost = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  max-width: 72em;
  margin: 10em 0 0 0;
  padding: 0;
  @media (max-width: 32em) {
    max-width: 26em;
    margin: 10em 0 2em -0.6em;
  }
`
export const FeaturedImage = styled.div`
  position: relative;
  height: 32em;
  width: 64em;
  z-index: 1;
  border: 0.05em solid #6c6c6c10;
  margin: auto;
  padding: 0;
  img {
    margin: auto;
    padding: 0;
    height: 32em;
    width: 64em;
    object-fit: cover;
  }
  @media (max-width: 32em) {
    height: 20em;
    width: 26em;
    background: #6c6c6c10;
    img {
      height: 20em;
      width: 26em;
    }
  }
`
export const FeaturedText = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  max-width: 40em;
  z-index: 10;
  background: #fefefe;
  box-shadow: 0 1em 2em #00000010;
  margin: -4em 0 0 4em;
  padding: 1.5em 2em;
  @media (max-width: 32em) {
    width: 22em;
    margin: -4em 0 0 2.2em;
    padding: 1em 2em 2em 2em;
  }
`
export const FeaturedTitle = styled(H1)`
  font-size: 2em;
  line-height: 1.25;
  margin: 0 0 -0.5em 0;
  padding: 0;
  @media (max-width: 32em) {
    margin: 0.5em 0 -0.5em 0;
    padding: 0;
    font-size: 1.5em;
    line-height: 1.25;
  }
`
export const PostGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1.5em;
  justify-content: space-between;
  max-width: 72em;
  margin: 4em 0 0 0;
  padding: 0;
  @media (max-width: 32em) {
    grid-template-columns: repeat(1, auto);
    margin: 2em 0 0 0;
  }
`
export const Post = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  align-content: flex-start;
  position: relative;
  max-width: 20em;
  margin: 0 0 2em 0;
  padding: 0;
`
export const PostImage = styled.div`
  margin: 0;
  padding: 0;
  height: 12em;
  width: 20em;
  background: #6c6c6c10;
  border: 0.05em solid #6c6c6c10;
  img {
    margin: 0;
    padding: 0;
    height: 12em;
    width: 20em;
    object-fit: cover;
  }
`
export const PostText = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
`
export const Title = styled(H2)`
  margin: 1em 0 0 0;
  font-size: 1.5em;
  line-height: 1.25;
`
export const CategoryTagContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`
export const CategoryTag = styled(Caption)`
  margin: 1em 0.1em 0 0;
  padding: 0 0.5em 0 0;
  font-size: 1em;
  font-weight: 600;
`

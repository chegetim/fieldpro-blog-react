import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout.js"
import SEO from "../components/seo"

import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer.js"
import {
  CategoryMenuContainer,
  CategoryGroup,
  AllCategories,
  Category,
  PostGroup,
  Post,
  PostImage,
  PostText,
  Title,
  CategoryTagContainer,
  CategoryTag,
} from "../pages/index.js"

import { HeaderGroup, H1, H2, Caption } from "../components/styles/TextStyles"

class CategoryTemplate extends React.Component {
  render() {
    /* */
    const { data } = this.props
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
          <PostGroup>
            {posts.map(({ node }) => {
              const title = node.title || node.slug

              return (
                <Post key={node.slug}>
                  <PostImage>
                    <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                      <img src={node.image.fluid.src} />
                    </Link>
                  </PostImage>
                  <PostText>
                    <Title>
                      <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
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
            })}
          </PostGroup>
        </Body>
        <Footer />
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCategory(slug: { eq: $slug }) {
      slug
      title
    }
    allContentfulCategory(sort: { fields: updatedAt, order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: createdAt, order: DESC }
    ) {
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
            slug
            title
          }
        }
      }
    }
  }
`

export const Body = styled.div`
  display: grid;
  justify-items: center;
  margin: 7em 0 0 0;
  padding: 0;
  @media (max-width: 32em) {
    margin: 10em 0 0 0;
  }
`

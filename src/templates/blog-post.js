import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout.js"
import SEO from "../components/seo"

import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer.js"
import CalltoAction from "../components/sections/CalltoAction"
import { H1, H2, H3, P, Caption } from "../components/styles/TextStyles"

class BlogPostTemplate extends React.Component {
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
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <Image>
            <img src={`https:${node.data.target.fields.file["en-US"].url}`} />
          </Image>
        ),
      },
      renderMark: {},
    }

    return (
      <Layout location={this.props.location}>
        <SEO title={post.title} description={post.subtitle} />
        <Header />
        <Body>
          <BannerGroup>
            <Text>
              <H1>{post.title}</H1>
              <Labels>
                <Caption>{/* node.tags */}</Caption>
              </Labels>
            </Text>
            <PostImage>
              <img src={post.image.fluid.src} />
            </PostImage>
          </BannerGroup>
          <BodyGroup>
            {documentToReactComponents(post.content.json, options)}
          </BodyGroup>
          <CTA>
            <CalltoAction />
          </CTA>
        </Body>
        <Footer />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      image {
        fluid {
          src
        }
      }
      content {
        json
      }
    }
  }
`
const Body = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`
const BannerGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  position: relative;
  max-width: 64em;
  margin: 8em 0 auto 0;
  padding: 0;
`
const Text = styled.div`
  display: grid;
  grid-gap: 1em;
  margin: 0 4em 2em 2em;
`
const Title = styled(H1)`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.25;
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
`
const CTA = styled.div`
  display: grid;
  width: 64em;
  margin: 0;
  padding: 0;
`

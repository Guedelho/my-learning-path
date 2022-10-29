import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import ProfilePic from "../../content/assets/profile-pic.jpg"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "My Learning Path"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src={ProfilePic} alt="Mateus Guedelho" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to My Learning Path Blog</p>
        <p>
          In this blog, I'm going to post things I've learned. The goal is for me to learn more about a subject by teaching it and hopefully help others on their Learning Path.
        </p>
        <p>
          <strong>***Teaching others is best way to learn.***</strong>
        </p>
        <p>
          Now, let's go learn something new!
          <span role="img" aria-label="rocket emoji">
            🚀
          </span>
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

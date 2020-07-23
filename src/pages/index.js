import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "I'm Mateus"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `learning`, 'path', `javascript`, `react`]}
        />
        <img style={{ padding: "0 40px 0 0" }} src="./profile-pic.jpg" alt="Mateus Guedelho" />
        <h2>
          Welcome to My Learning Path{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>This blog aims to document my journey through knowledge.</p>
        <p>
          I had this idea after realizing most of the knowledge I had I learned from someone who shared it on the internet. With this blog, I hope to do the same and share some of my experiences.
        </p>
        <p>Now let's learn something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

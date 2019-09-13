import React from "react"
import { Link } from "gatsby"
import ImageTwo from "../components/image2"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="simplepage">
    <div className="content">
    <h1>Great things takes time...</h1>
    <p>coming soon!</p>
    </div>
    <div class="imgpos" style={{ maxWidth: `300px` }}>
    <ImageTwo /> </div>
    </section>
  </Layout>
)

export default IndexPage

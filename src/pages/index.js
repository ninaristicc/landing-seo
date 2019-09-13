import React from "react"
import { Link } from "gatsby"
import ImageTwo from "../components/image2"
import Layout from "../components/layout"
import ImageThree from "../components/image3"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="simplepage">
    <div className="content">
    <h1>COMING SOON...</h1>
    <p>Stay tuned!</p>
    </div>
    <div class="imgpos" style={{ maxWidth: `300px` }}>
    <ImageTwo /> </div>
    </section>
  </Layout>
)

export default IndexPage

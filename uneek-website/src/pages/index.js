import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ValueProp from "../components/ValueProp"
import ProductBenefits from "../components/ProductBenefits"
import CallToAction from "../components/CallToAction"

const IndexPage = () => (
  <Layout>
    <SEO title="Uneek" />
    <ValueProp />
    <ProductBenefits />
    <CallToAction />
  </Layout>
)

export default IndexPage

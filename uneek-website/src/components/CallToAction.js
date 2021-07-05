import React from "react"
import Button from "./Button"

const CallToAction = props => {
  return (
    <section className="cta">
      <h1>
        One QR, <span className="gradient-title">Uneek</span>
      </h1>
      <p>Get early access now!</p>
      <Button label="Sign Up" />
    </section>
  )
}

export default CallToAction

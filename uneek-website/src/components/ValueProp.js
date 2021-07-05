import React from "react"
import Button from "./Button"
import line from "../assets/ui-elements/line-value-prop.svg"

const ValueProp = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1 className="tag-line">
            Connect. <br /> Collect. <br /> Coordinate.
          </h1>
          <p className="main-subtitle">
            Uneek, the easist to use client collection, management & connection
            tool for real estate.
          </p>
        </div>
        <div className="main-photo"></div>
      </div>
      <div className="input-div">
        <form>
          <input className="input-form" type="text" email="email"></input>
        </form>
        <Button className="access-button" label="Get Early Access" />
        <img src={line} alt="line" />
      </div>
    </section>
  )
}

export default ValueProp

import React from "react"
import lineTop from "../assets/ui-elements/line-top.svg"
import lineMid from "../assets/ui-elements/line-mid.svg"
import lineBot from "../assets/ui-elements/line-bot.svg"

const ProductBenefits = props => {
  return (
    <>
      <div className="product-benefits-title">
        <h4>Adapt your agency to the ‘new normal’</h4>
      </div>
      <section className="product-benefits">
        <div className="product-benefits-group">
          <div className="product-benefit-1-box">
            <div className="product-benefit-1-subheading">
              <h4>Uneek Property QR</h4>
              <p>
                Let your clients transfer you their detials hassle free. With
                our single-sign-on, one tap and your customers are signed in.
              </p>
            </div>
            <div className="product-benefit-1-subheading">
              <h4>See property interest in real-time</h4>
              <p>View and showcase the interest in your property.</p>
            </div>
            <div className="product-benefit-1-subheading">
              <h4>Effortlessly integrate to your CRM </h4>
              <p>
                Use our contact management system or simply export to your
                current system.
              </p>
            </div>
          </div>
          <div className="product-benefit-1-image"></div>
          <div className="product-benefit-2-box">
            <div className="product-benefit-2-subheading">
              <h4>No extra busy work </h4>
              <p>
                All property information automatically populated by
                domain.com.au.
              </p>
            </div>
            <div className="product-benefit-2-subheading">
              <h4> Sleek new admin panel </h4>
              <p>
                Designed for all devices so you can work on the go, or in the
                office.
              </p>
            </div>
          </div>
          <div className="product-benefit-2-image"></div>
        </div>
      </section>
      <div className="product-benefits-title">
        <h4>
          Guaranteed compliance with the Victorian government contact tracing
          program
        </h4>
      </div>
      <div className="product-benefits-lower-text">
        <p>
          We don’t want to clutter up your opens with QR codes, so we have
          created a one QR system. You clients can check in using the official
          government system, and also register interest with your property, all
          with the one QR code.
        </p>
        <img src={lineBot} alt="line" />
      </div>
    </>
  )
}

export default ProductBenefits

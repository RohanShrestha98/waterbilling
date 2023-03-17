import React from 'react'
import "./style.css"

export default function Support() {
  return (
    <div>
      <section id="questions" class="p-5">
        <div class="row "> 
          <div class="col-md-6 faq_left">
            <div class="bg-light rounded p-1 d-inline-block">
              <h5 class="Features">Help and Support</h5>
            </div>
            <div class="col-md">
              <h3 class="text-dark my-4">Frequently asked Question (FAQs)</h3>
              <div class="row">
                <div class="col-md-12 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="bg-light text-primary rounded-circle me-3">
                        <h6 class="m-2">1</h6>
                    </div>
                    <h6 class="text-dark mb-0">Why should I use AquaBill?</h6>
                  </div>
                  <p class="text-muted fs-6 mt-3">Subtext</p>
                </div>
                <div class="col-md-12 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="bg-light text-primary rounded-circle me-3">
                        <h6 class="m-2">2</h6>
                    </div>
                    <h6 class="text-dark mb-0">How do I sign up for AquaBill?</h6>
                  </div>
                  <p class="text-muted fs-6 mt-3">Subtext</p>
                </div>
                <div class="col-md-12 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="bg-light text-primary rounded-circle me-3">
                        <h6 class="m-2">3</h6>
                    </div>
                    <h6 class="text-dark mb-0">How do I update my billing information?</h6>
                  </div>
                  <p class="text-muted fs-6 mt-3">Subtext</p>
                </div>
                <div class="col-md-12 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="bg-light text-primary rounded-circle me-3">
                      <h6 class="m-2">4</h6>
                    </div>
                    <h6 class="text-dark mb-0">What payment methods do you accept?</h6>
                  </div>
                  <p class="text-muted fs-6 mt-3">Subtext</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="image/Frame 1.png" class="img-fluid mt-5" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import "./style.css"

export default function Services() {
  return (
    <section id="learn" class="p-5 bg-lignt text-light">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md ">
          <img src="img/drop.png" class="img-fluid" alt="" />
        </div>
        <div class="col-md">
            <div class="bg-light rounded p-1 my-0 d-inline-block">
                <p class="Features">Features</p>
              </div>
              <div class="col-md">
                <h3 class="text-dark my-4">Services</h3>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <img src="img/Scanner.png" className='img'  alt="" />
                    
                    <h6 class="text-black mb-2">Online Bill Payment</h6>
                    <p class="text-muted fs-6">AquaBill offers a fast and convenient way to pay your water bills online, allowing you to easily manage your payments from anywhere, at any time.</p>
                  </div>
                  <div class="col-md-6 mb-4">
                  <img src="img/trend.png" className='img'  alt="" />
                    <h6 class="text-black mb-2">Usage Tracking</h6>
                    <p class="text-muted fs-6">With AquaBill, you can easily track your water usage over time, helping you to identify areas where you can conserve water and save money on your bills</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                  <img src="img/History.png" className='img'  alt="" />
                    <h6 class="text-black mb-2">Billing Reminders</h6>
                    <p class="text-muted fs-6">AquaBill can send you automatic billing reminders via web app, ensuring that you never miss a payment and incur late fees</p>
                  </div>
                  <div class="col-md-6 mb-4">
                  <img src="img/Invoice2.png" className='img'  alt="" />
                    <h6 class="text-black mb-2">Bill Generation</h6>
                    <p class="text-muted fs-6">AquaBill generates water bills based on your usage data, making it easy for you to understand your bill and manage your finances.</p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

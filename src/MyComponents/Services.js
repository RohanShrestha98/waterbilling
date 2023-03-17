import React from 'react'
import "./style.css"

export default function Services() {
  return (
    <section id="learn" class="p-5 bg-lignt text-light">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md ">
          <img src="image/rp.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-md">
            <div class="bg-light rounded p-1 d-inline-block">
                <p class="Features">Features</p>
              </div>
              <div class="col-md">
                <h3 class="text-dark my-4">Services</h3>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <i class="bi bi-check2-circle h2 text-warning mb-3"></i>
                    <h6 class="text-black mb-2">Service 1</h6>
                    <p class="text-muted fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tellus euismod, eleifend ipsum vel, maximus enim. Suspendisse potenti.</p>
                  </div>
                  <div class="col-md-6 mb-4">
                    <i class="bi bi-check2-circle h2 text-warning mb-3"></i>
                    <h6 class="text-black mb-2">Service 2</h6>
                    <p class="text-muted fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tellus euismod, eleifend ipsum vel, maximus enim. Suspendisse potenti.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <i class="bi bi-check2-circle h2 text-warning mb-3"></i>
                    <h6 class="text-black mb-2">Service 3</h6>
                    <p class="text-muted fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tellus euismod, eleifend ipsum vel, maximus enim. Suspendisse potenti.</p>
                  </div>
                  <div class="col-md-6 mb-4">
                    <i class="bi bi-check2-circle h2 text-warning mb-3"></i>
                    <h6 class="text-black mb-2">Service 4</h6>
                    <p class="text-muted fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tellus euismod, eleifend ipsum vel, maximus enim. Suspendisse potenti.</p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

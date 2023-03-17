import React from 'react'

export default function Contact() {
  return (
    <div>
       <section id="contact" class="p-5">
    <div class="row">
      <div class="col-md-6">
        <div class="bg-light rounded p-1 d-inline-block">
          <h5 class="text-warning fw-bold">Contact us</h5>
        </div>
        <div class="col-md">
          <h3 class="text-dark my-4">Get in touch with us</h3>
          
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tellus euismod.</p>
        </div>
      </div>
      <div class="col-md">
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-envelope-fill text-primary me-3"></i>
        <p class="text-muted mb-0">Email: info@example.com</p>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-building text-primary me-3"></i>
        <p class="text-muted mb-0">Office: 123 Main St, Anytown, USA</p>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-telephone-fill text-primary me-3"></i>
        <p class="text-muted mb-0">Phone: +1 (555) 555-5555</p>
      </div> 
    </div>
    </div>
  </section>
  

    <footer class="p-3 bg-dark text-white text-center position-relative">
		<div class="container">
			<p class="lead"> Copyright &copy; 2022 AQUABILL</p>

		</div>
	</footer>
    </div>
  )
}

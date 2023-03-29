import React from 'react'

export default function Contact() {
  return (
    <div>
       <section id="contact" class="p-5">
    <div class="row">
      <div class="col-md-6">
        <div class="bg-light rounded p-1 d-inline-block">
        <h5 class="Features">Contact us</h5>
        </div>
        <div class="col-md">
          <h3 class="text-dark my-4">Get in touch with us</h3>
          
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in tellus euismod.</p>
        </div>
      </div>
      <div class="col-md">
      <div class="d-flex align-items-center mb-3">
      <img src="img/Email.png" className='img'  alt="" />
        <p class="text-muted mb-0"><b>Email</b> : info@example.com</p>
      </div>
      <div class="d-flex align-items-center mb-3">
      <img src="img/Briefcase.png" className='img'  alt="" />
        <p class="text-muted mb-0"><b>Office</b> : 123 Main St, Anytown, USA</p>
      </div>
      <div class="d-flex align-items-center">
      <img src="img/Vector.png" className='img'  alt="" />
        <p class="text-muted mb-0"><b>Phone</b> : +1 (555) 555-5555</p>
      </div> 
    </div>
    </div>
  </section>
  

    <footer >
		<img src="img/logo.png" alt="" />
    <div className='SerFAQ'>
      <p>Services</p>
      <p>FAQs</p>
      <p>Contact Us</p>
    </div>
    <p>© Copyright 2023 AquaBill</p>
	</footer>
    </div>
  )
}

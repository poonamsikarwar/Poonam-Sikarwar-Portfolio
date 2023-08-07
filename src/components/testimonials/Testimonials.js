import React from 'react'
import './testimonial.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
import Swiper from './Swiper'


function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
       
      {/* <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar 1 only" />
            
          </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem omnis eius dolore quia saepe iste error! 
            Veritatis nesciunt illum alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, enim.</small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 1 only" />
          </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem omnis eius dolore quia saepe iste error! 
            Veritatis nesciunt illum alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, maxime.</small>
            
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar 1 only" />
            
          </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem omnis eius dolore quia saepe iste error! 
            Veritatis nesciunt illum alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, earum.</small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar 1 only" />
          </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem omnis eius dolore quia saepe iste error! 
            Veritatis nesciunt illum alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, libero?</small>
            
        </article> */}
        <Swiper />

      </div>

    </section>
  )
}

export default Testimonials
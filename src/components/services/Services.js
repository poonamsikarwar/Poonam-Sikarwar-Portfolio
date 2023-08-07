import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

         <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Application:Physical and digital products.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Focus:The full experience from a user's first contact to the last.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Creates: Structure design solution for pain points that users encounter .</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Results: Products that delight users with their effectiveness.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Visual touchpoint that allow users to interact with a project.</p>
          </li>
          
         </ul>

        </article>

        {/* UX/UI end */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

         <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Create everything a user sees on a website or software product.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Work directly with a client to create designs or work as a part of a team.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>May need knowledge of a programming language or some coding skills.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Language's like html, css, javascript, react.js</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Write the code that makes a website functional.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Rarely create mockups, select typography,
            or pick color paletter.</p>
          </li>
          
         </ul>

        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Flutter Developer</h3>
          </div>

         <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon'/>
            <p>High level widgets with a flexible UI.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Apps that integrate a lot of data can be reactivated.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>MVP mobile applictions with material design.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Robust os plugins with clear logic.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Apps that makes use of features at the os level.</p>
          </li>
          
         </ul>

        </article>

        {/* end  of contant creation*/}
      </div>
    </section>
  )
}

export default Services
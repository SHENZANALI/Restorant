import React from 'react'
import Layout from '../components/layout/Layout'
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaAddressCard } from "react-icons/fa";
function Contect() {
  return (
    <Layout>
        <div className="contact">
          <h1>Contact To My Resturant</h1>
          <p className='firstRow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis esse quaerat exercitationem neque perspiciatis! Praesentium nostrum dolores quae ducimus tempora ut.</p>
          <form className='form'>
            <div>
              <label htmlFor="phone"><FaPhoneVolume/></label>
              <p className='text'>+923495221591</p>
            </div>
            <div>
              <label htmlFor="email"><TfiEmail/></label>
              <p className='text'>shenzanali@gmail.com</p>
            </div>
            <div>
              <label htmlFor=""><FaAddressCard/></label>
              <p className='text'>patiblanda, Mankkera, Bhakkar</p>
            </div>
          </form>
        </div>
    </Layout>
  )
}

export default Contect
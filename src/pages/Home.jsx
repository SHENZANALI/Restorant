import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import Meno from './Meno'
import bgImage from '../components/images/bgimage.jpg'

function Home() {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${bgImage})`}}>
          <div className="headerContainer">
            <h1>food website</h1>
            <p>Best food in pakistan</p>
            <Link to={'/menu'}>
            <button >ORDER NOW</button>

            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home
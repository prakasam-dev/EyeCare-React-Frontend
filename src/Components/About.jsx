import React from 'react'
import { FaClinicMedical, FaHeart, FaAward, FaUserMd } from 'react-icons/fa'
import AboutImage from '../assets/about.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  const stats =[
    {
      value:'10+', label:'Years of Experience', icon:<FaAward className='text-pink-500' aria-hidden='true'/>
    },
    {
      value:'2.5+', label:'Happy Clients', icon:<FaHeart className='text-pink-500' aria-hidden='true'/>
    },
    {
      value:'15+', label:'Expert Doctors', icon:<FaUserMd className='text-pink-500' aria-hidden='true'/>
    },
    {
      value:'50+', label:'Treatments', icon:<FaClinicMedical className='text-pink-500' aria-hidden='true'/>
    },
  ];

  const approach = [
    {
       icon:<FaHeart className='text-pink-600' aria-hidden='true'/>,
       text:"Thousants of patients leave with a smile and satisfaction every year. We believe in building trust through personalized care and attention."
    },
    {
       icon:<FaUserMd className='text-pink-600' aria-hidden='true'/>,
       text:"Our teams include highly qualified and experienced specialist in every field. With regular training and latest knowledge, they ensure the best care."
    },
    {
       icon:<FaClinicMedical className='text-pink-600' aria-hidden='true'/>,
       text:"We use the latest technology.Our goal is to provide safe,fast,and result-driven mediacl solutions."
    },
]

  return (
    <section id="about" className='py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100'>
      <div className='container mx-auto px-4'>
        <article data-aos='fade-up' data-aos-delay='500'className='flex flex-col lg:flex-row items-center gap-12'>
           <figure className='lg:w-5/12 relative'>
           <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto'>
            <img src={AboutImage}
            className='w-full h-auto object-cover aspect-[4/5]'
            loading='lazy'/>
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'
            aria-hidden='true'></div>
           </div>
           <span className='hidden lg:block absolute -bottom-12 -left-8 w-40 h-40 rounded-full
           bg-pink-500 opacity-20 z-0' aria-hidden='true'>
           </span>
           <span className='hidden lg:block absolute -top-12 -right-8 w-50 h-50 rounded-full
           bg-pink-600 opacity-20 z-0' aria-hidden='true'>
           </span>
           <aside className='absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
            <strong className='text-2xl font-bold text-pink-600'>10+ </strong>
            <small className='block text-xs font-medium text-gray-600'>Years of Experience</small>
           </aside>
           </figure>
           <div data-aos='fade-up' data-aos-delay='500' className='lg:w-7/12'>
           <header>
           <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>About
            <span className='text-pink-600'> Divine Vision Centre</span></h2>
            <p className='text-lg text-gray-600 mb-6'>
              At vision care,we are dedicated to providing comprehensive eye care solutions with precision and compassion.
              From routine eye checkups to advanced treatments for complex conditions,your vision health is our top priority.
              With stage-of-the-art technology and expert ophthalmologists,we ensure  clearer vision for a brighter feature.
            </p>
           </header>
           <section className='m-8'>
           <h3 className='text-xl font-semibold text-gray-800 mb-4'>Our Approach</h3>
           <ul className='space-y-3'>
            {approach.map((item,index)=>(
              <li key={index} className='flex items-start'>
                <figure className='bg-pink-100 p-1 rounded-full mr-3'>{item.icon}</figure>
                <p className='text-gray-700'>{item.text}</p>
              </li>
            ))}
           </ul>
           </section>
           <section className='grid grid-cols-2 gap-4 mb-8'>
            {stats.map((item,index)=>(
              <article key={index} className='bg-white p-4 rounded-lg shadow-sm flex items-center'>
                <figure className='mr-3'>{item.icon}</figure>
                <div>
                  <strong className='text-xl font-bold text-gray-800'>{item.value}</strong>
                  <p className='text-sm text-gray-600'>{item.label}</p>
                </div>
              </article>
            ))}
           </section>
           <nav>
            <Link to='/specialist'
            className='inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full 
            transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2'>
              Meet our Specialists
            </Link>
           </nav>
           </div>
        </article>
        <aside className='mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden'>
          <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40'
          aria-hidden='true'></span>
          <div className='relative z-10'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>Our Missioin</h3>
           <blockquote className='text-lg text-gray-700 mb-6'>
            Our mission is to deliver exceptional eye care that enhances vision,improves lives,and builds trust with every patient we serve.
            We strive to combine advanced technology,expert knowledge,and compassionate service in every step of care.
            "Your mission is our mission - because seeing the world clearly should never be a luxury"
           </blockquote> 
           <figure className='flex items-center'>
            <div className='w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4'>
              <FaUserMd className='text-pink-600' aria-hidden='true'/>
            </div>
            <figcaption>
              <cite className='font-semibold text-gray-800 not-italic'>Dr.Sakthi</cite>
              <p>Medical Directer & Founder</p>
            </figcaption>
            </figure> 
          </div>
        </aside>
      </div>
    </section>
  )
};

export default About;
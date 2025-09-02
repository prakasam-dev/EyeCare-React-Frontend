import React from 'react'
import { FaClinicMedical, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import {Link} from 'react-router-dom'

const Footer = () => {

    const socialLinks = [
        {icon: <FaFacebookF className='text-lg'/>, label:'facebook'},
        {icon: <FaTwitter className='text-lg'/>, label:'Twitter'},
        {icon: <FaInstagram className='text-lg'/>, label:'Instagram'},
        {icon: <FaLinkedinIn className='text-lg'/>, label:'Linkedin'},
        {icon: <FaYoutube className='text-lg'/>, label:'Youtube'},
    ];

    const quickLinks =[
        {text:'Home',to:"/"},
        {text:'About',to:"/about"},
        {text:'Our services',to:'/services'},
        {text:'Our specialists',to:"/specialist"},
        {text:'Contact Us',to:"/contact"},
        {text:'Book Appointment',to:"/appointment"},
    ];

    const contactInfo =[
        {
            icon: <MdLocationOn className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <Link to='/' className='text-gray-400 hover:text-pink-500 transition'>
                989 Beauty Avenue, Madurai, India.
            </Link>
         },
         {
            icon: <MdPhone className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <Link to='/' className='text-gray-400 hover:text-pink-500 transition'>
               +91 98765 43210
            </Link>
         },
         {
            icon: <MdEmail className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <Link to='/' className='text-gray-400 hover:text-pink-500 transition'>
               divinevisioncentre@gmail.com
            </Link>
         },
         {
            icon: <MdAccessTime className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <Link to='/' className='text-gray-400 hover:text-pink-500 transition'>
               Mon-Fri: 9:00AM-8:00PM, Sat: 2:00PM-9:00PM
            </Link>
         },
    ];

    const legalLinks = [
        {text:'Praivay Policy',to:'/'},
        {text:'Terms of services',to:'/'},
        {text:'Sitemap',to:'/'},
    ];
  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
                <section className='lg:col-span-2'>
                    <header className='flex items-center mb-6'>
                        <FaClinicMedical className='text-3xl text-pink-500 mr-3' aria-hidden='true'/>
                        <h2 className='text-xl font-bold'>Vision Care</h2>
                    </header>
                    <p className='text-gray-400 mb-6'>
                        paragraph
                    </p>
                    <nav aria-label='Social media links'>
                        <ul className='flex space-x-4'>
                            {socialLinks.map((item,index)=>(
                                <li key={index}>
                                    <Link to='/'
                                    className='bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex
                                    items-center justify-center transition'
                                    aria-label={item.label}>
                                        {item.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>
        <section>
            <h3 className='text-xl font-bold mb-6 after:content-[] after:absolute after:left-0
            after:bottom-0 after:w-12 after:bg-pink-500'>
                Quick Links
            </h3>
            <nav aria-label='Quick links'>
                <ul className='space-y-3'>
                    {quickLinks.map((link,index)=>(
                        <li key={index}>
                            <Link to={link.to} className='text-gray-400 hover:text-pink-500 transition'>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section> 
        <address>
            <h3 className='text-xl font-bold mb-6 relative pb-2 after:absolute after:content-[]
            after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500'>
                Contact Us
            </h3>
            <ul className='space-y-4'>
                {contactInfo.map((info,index)=>(
                    <li key={index} className='flex items-start'>
                        {info.icon}
                        {info.content}
                    </li>
                ))}
            </ul>
        </address>           
            </div>
            <section className='bg-gray-800 rounded-xl p-8 mb-12' aria-labelledby='newsletter-heading'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div className='mb-6 lg:mb-0 lg:mr-8'>
                        <h3 id='newsletter-heading' className='text-xl font-bold mb-2'>Subscribe to Our Newsletter</h3>
                        <p className='text-gray-400'>Get updates on special offers and eye-care tips</p>
                    </div>
                    <form className='flex flex-col sm:flex-row w-full lg:w-auto' aria-label='Newsletter sub form'>
                        <label className='sr-only'>Your email address</label>
                        <input type='email'
                        placeholder='Your email address'
                        className='px-6 py-3 rounded-full bg-gray-700 text-white focus:outline-none
                        focus:ring-2 focus:ring-pink-500 mb-3 sm:mr-4 w-full'
                        required/>
                        <button type='submit'
                        className='bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full mb-3
                        transition shadow-lg whitespace-nowrap'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
            <footer className='pt-8 border-gray-800 flex flex-col md:flex-row justify-between items-baseline'>
                <p className='text-gray-500 text-sm mb-4 md:mb-0'>
                    &copy;{new Date().getFullYear()} Divine vision centre. All rights reserved.
                </p>
                <nav aria-label='legal links'>
                    <ul className='flex space-x-6'>
                        {legalLinks.map((link,index)=>(
                            <li key={index}>
                               <Link to={link.text} className='text-gray-500 hover:text-pink-500 text-sm ytransition'>
                                {link.text}
                               </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </footer>
        </div>
    </footer>
  )
};

export default Footer;
import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import ContactImg from '../assets/contactimg.jpg'

const Contact = () => {
    const contactItems = [
        {
            icon:<FaMapMarkerAlt className='text-pink-600 text-xl'/>,
            title:"Our Location",
            content:(
                <p className='text-gray-600'>
                    989 Beauty Avenue, Madurai<br/>
                    India.
                </p>
            )
        },
        {
            icon:<FaPhoneAlt className='text-pink-600 text-xl'/>,
            title:"Phone Numbers",
            content:(
                <p className='text-gray-600'>
                    Appointments: <a href='#' className='hover:text-pink-600'>+91 98765 43210</a><br/>
                    Emergency: <a className='hover:text-pink-600'>+91 87654 32109</a>
                </p>
            )
        },
        {
            icon:<FaEnvelope className='text-pink-600 text-xl'/>,
            title:"Email",
            content:(
                <p className='text-gray-600'>
                    <a href='#' className='hover:text-pink-600'>divinevisioncentre@gmail.com</a><br/>
                    <a className='hover:text-pink-600'>appointmentsinfo@gmail.com</a>
                </p>
            )
        },
        {
            icon:<FaClock className='text-pink-600 text-xl'/>,
            title:"Working Hours",
            content:(
                <p className='text-gray-600'>
                    Monday - Friday: 9:00 AM - 8:00 PM<br/>
                    Saturday: 2:00 PM - 9:00 PM<br/>
                    Sunday: Closed 
                </p>
            )
        },
    ];
     const services =[
     {value:'comprehensive_eye_exam' , label:'Comprehensive Eye Exam'},
     {value:'contact_lens_consultation' , label:'Contact Lens Consultation'},
     {value:'pediatric_eye_care' , label:'Pediatric Eye Care'},
     {value:'galucoma_screening' , label:'Glaucoma Screening'},
     {value:'retina-care' , label:'Retina Care'},
     {value:'other', label:'Other'}
    ];

  return (
    <article id='contact' className='py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100'>
        <div className='container mx-auto px-4'>
            <header data-aos='fade-up' data-aos-delay='400' className='text-center mb-16 relative'>
                <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full
                bg-pink-100 opacity-30 z-0'></div>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10'>
                        Contact <span className='text-pink-600'> Divine Vision Centre</span>
                    </h1>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
                        Feel free to reach out to us anytime - we're here to help and happy to hear from you!
                    </p>
                
            </header>
            <main className='flex flex-col lg:flex-row gap-12'>
                <aside data-aos='fade-up' data-aos-delay='500' className='lg:w-2/5'>
                <section className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Get In Touch</h2>
                    <address className='space-y-6'>
                        {
                            contactItems.map((item,index)=>(
                                <article key={index} className='flex items-start'>
                                    <figure className='bg-pink-200 p-3 rounded-full mr-4 flex-shrink-0'>
                                        {item.icon}
                                    </figure>
                                    <div>
                                        <h3 className='font-medium text-gray-800 mb-1'>{item.title}</h3>
                                        {item.content}
                                    </div>
                                </article>
                            ))
                        }
                    </address>
                    <figure className='mt-8 rounded-xl overflow-hidden shadow-md'>
                        <img src={ContactImg} 
                        className='w-full h-48 object-cover hover:scale-105 transition-transform duratioin-500'
                        width='400'
                        height='200'
                        loading='lazy'/>
                    </figure>
                </section>
                </aside>
                <section data-aos='fade-up' data-aos-delay='600' className='lg:w-3/5'>
                <div className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send Us a Message</h2>
                    <form className='space-y-6'>
                        <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label className='block text-gray-700 font-medium mb-2'>Full Name</label>
                                <input type='text'
                                id='name'
                                name='name'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                focus:ring-pink-500 focus:border-transperent'
                                placeholder='Your Name'
                                required/>
                            </div>
                            <div>
                                <label className='block text-gray-700 font-medium mb-2'>Phone Number</label>
                                <input type='tel'
                                id='phone'
                                name='phone'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                focus:ring-pink-500 focus:border-transperent'
                                placeholder='+91 XXXXX XXXXX'
                                required/>
                            </div>
                        </fieldset>
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Email Address</label>
                            <input type='email'
                            id='email'
                            name='email'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                            focus:ring-pink-500 focus:border-transperent'
                            placeholder='your@gmail.com'
                            required/>
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Service Intrested In</label>
                            <select 
                            id='service'
                            name='service'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                            focus:ring-pink-500 focus:border-transperent'
                            required>
                            <option value=''>Select a Service</option>
                            {services.map((service)=>(
                                <option key={service.value} value={service.value}>
                                    {service.label}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Your Message</label>
                            <textarea
                            id='message'
                            name='message'
                            rows='5'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                            focus:ring-pink-500 focus:border-transperent'
                            placeholder='Tell us about your concerns or questions'
                            required/>
                        </div>
                        <div>
                            <button type='submit'
                            className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
                            transition shadow-lg w-full md:w-auto'
                            aria-label='Submit contact from'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                </section>
            </main>
            <figure data-aos='fade-up' data-aos-delay='600' 
            className='bg-white mt-16 rounded-2xl shadow-xl overflow-hidden'>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577324636!2d78.04042057809447!3d9.91782679647707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1752914056405!5m2!1sen!2sin"
              referrerpolicy="no-referrer-when-downgrade"
              width='100%'
              height='450'
              style={{border:0}}
              allowFullScreen=""
              loading='lazy'
              title='Clinic Location Map'
              className='rounded-2xl'
              aria-label='Map Showing clinic Location'></iframe>  
            </figure>
        </div>
    </article>
  );
};

export default Contact
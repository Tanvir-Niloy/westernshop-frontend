import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {

    const Line = useRef(null);
    const text = useRef(null);

    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='titleon' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>      
                <p>Western Shop is an e-commerce site which will be capable of providing every kind of goods and products from every sector to every consumer located in Bangladesh. The world’s market place will be only finger-tips away for any customer in possession of a smartphone/computer and an internet connection. They will be able to purchase everything; from a safety-pin to an apartment building from our website. We have gathered the brightest minds of Bangladesh and given them the platform to perform to their fullest extent. All the data-mining and optimization has been done in-house and no outsourcing from any organization has taken place. We are utilizing 100% Bangladeshi personnel and resources and keeping the flow of cash within our borders.</p>       
                <br/>
                 <p>It is a platform where people can purchase all kinds of goods from a single website. From a pencil to a book to a dress to a cell phone to cars to lands; everything is available in this website. It is built by a team of developers who have the sharpest minds in this sector and they are dedicated to only Droplet Limited. We hire no outsourcing outlets and that ensures the security of all our users. There is absolutely no chance of any information being leaked thanks to our dedicated team who are working all the time to ensure that our website is the most secure e-commerce platform. What separates us from other platforms of such sorts is the diversity of our product range and the security that we provide to our users. It is absolutely cutting-edge and state-of-the-art and we can guarantee that no other platform has this much diversity in its product range. Our website is going to be so convenient and user-friendly for our customers that, they would rather order from our website than to go to the shop which is 100 meters away from his/her home. That is the kind of target Western Shop.com.bd has set for itself. And once we achieve our targets in Bangladesh, we will start expanding towards other countries and present ourselves in a much broader and global scale and encompass the entire world with our website in a short amount of time.</p>        
             </div>      
        </>
    
    )
}

export default About

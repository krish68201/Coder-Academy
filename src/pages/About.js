import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/About/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import Stats from '../components/core/About/Stats'
import LearningGrid from '../components/core/About/LearningGrid'
import ContactFormSection from '../components/core/About/ContactFormSection'
import "./About.css";

import Footer from '../components/common/Footer'
const About = () => {
  return (
    <div className='text-white'>
        {/* section 1 */}
        <p className='flex justify-center items-center mb-20 ring-richblack-500 mt-20'> About us </p>
        <section>
        <div >
          <header className="text-center text-4xl font-semibold mt-7">
            Driving Innovation in Online Education for a{" "}<br></br>
            <HighlightText text={"Brighter Future"} />
            <p className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%] mt-7 mb-20">
              Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex gap-5 mx-48 my-12  shadow-blue-200 mb-20">
            <img src={BannerImage1} />
            <img src={BannerImage2} />
            <img src={BannerImage3} />
          </div>
        </div>
      </section>
        {/* section2 */}

        <section>
            <div>
                <Quote />
            </div>
        </section>

        {/* section 3 */}
        <section>
        <div className='flex flex-col'>
            {/* foudning story wala div */}
            <div className='flex '>
                {/* founding story left box */}
                <div className='flex flex-col'>
                    <h1 className=' color mx-auto text-4xl font-semibold mb-10'>Our Founding Story</h1>

                    <p className='w-6/12 mx-auto mb-10 text-justify'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                    <p  className='w-6/12 mx-auto mb-10 text-justify'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                </div>
                {/* foudning story right box */}
                <div className='mr-48 '>
                    <img className='h-56 adjust' src={FoundingStory} />
                </div>
            </div>

            {/* vision and mission wala parent div */}
            <div className='flex  justify-between text-justify'>
                {/* left box */}
                <div className='w-2/5 ml-32 mt-20'>
                    <h1 className='vision text-4xl mb-10'> Our Vision</h1>
                    <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>

                {/* right box */}
                <div className='w-2/5 mr-32 mt-20 text-justify'> 
                    <h1 className='vision text-4xl mb-10'  >
                        Our Mission
                    </h1>
                    <p>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
        </div>
      </section>  

      {/* section 4 */}
      
        {/* section 5 */}
          <section className='mx-auto flex flex-col items-center justify-between gap-3 mt-36'>

            <LearningGrid />
            <ContactFormSection />
            </section>    

            <Footer /> 
    </div>
  )
}

export default About
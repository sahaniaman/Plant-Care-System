import React from 'react'
import Navbar from '../Navbar'
import { FaGoogle } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";

import { FaTwitter } from "react-icons/fa6";
const AboutUs = () => {
  const developersData = [
    {
      name: "Aman Sahani",
      github: "https://github.com/rishiyadav11/",
      description: "Hi! My name is Aman, I am a UI/UX designer. I am a creative person.",
      twitter: "https://x.com/RishiYadav5911",
      email: "sbdkjk@gmail.com",
      linkedinId: "https://www.linkedin.com/in/rishi-yadav-809096279/",
      imgurl: "https://s3-alpha-sig.figma.com/img/7fdb/13ee/5e42d5a62aed73166cef4f602fd563a9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VC7YmbL5oOyA7lrxAFZ8tvlcqUsBzV9bSvnLhFS8n1dZ4IwE433ulJilFeZdCCHlP0S0LCpPWGH7-8yAuVTMTa~G3xkqX8H6~99wyLZKfvDyt4sJ4qr5J0BYE69kEZBCULdHYT~Q~jYy3nkVmKqVbxjHkjqqRVahssFNT2vqYM0glg6HRiQDrdut3JL90oF4k56fWtDuobbqdx89Hm1pnVv9bM-0ioqV3B2Nj9l57iJbz~iFQSDP21rHlM9HBnGNtn-myS5p6Wjl9wWYBRI80fC0C0oirtN52ks6NmVmE~b0nQyLp-V7RdJg~v3Awe4NwBFBX612oIp8ggEt5NWdVw__"
    },
    {
      name: "Rishi Yadav",
      github: "https://github.com/rishiyadav11/",
      description: "Web developer with expertise in front-end technologies.",
      twitter: "https://x.com/RishiYadav5911",
      email: "photonics54yadav@gmail.com",
      linkedinId: "https://www.linkedin.com/in/rishi-yadav-809096279/",
      imgurl: "https://s3-alpha-sig.figma.com/img/7fdb/13ee/5e42d5a62aed73166cef4f602fd563a9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VC7YmbL5oOyA7lrxAFZ8tvlcqUsBzV9bSvnLhFS8n1dZ4IwE433ulJilFeZdCCHlP0S0LCpPWGH7-8yAuVTMTa~G3xkqX8H6~99wyLZKfvDyt4sJ4qr5J0BYE69kEZBCULdHYT~Q~jYy3nkVmKqVbxjHkjqqRVahssFNT2vqYM0glg6HRiQDrdut3JL90oF4k56fWtDuobbqdx89Hm1pnVv9bM-0ioqV3B2Nj9l57iJbz~iFQSDP21rHlM9HBnGNtn-myS5p6Wjl9wWYBRI80fC0C0oirtN52ks6NmVmE~b0nQyLp-V7RdJg~v3Awe4NwBFBX612oIp8ggEt5NWdVw__"
    },
    {
      name: "Harshit Singh",
      github: "https://github.com/rishiyadav11/",
      description: "Machine learning model creator with a focus on deep learning.",
      twitter: "https://x.com/RishiYadav5911",
      email: "example2@gmail.com",
      linkedinId: "https://www.linkedin.com/in/rishi-yadav-809096279/",
      imgurl: "https://s3-alpha-sig.figma.com/img/7fdb/13ee/5e42d5a62aed73166cef4f602fd563a9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VC7YmbL5oOyA7lrxAFZ8tvlcqUsBzV9bSvnLhFS8n1dZ4IwE433ulJilFeZdCCHlP0S0LCpPWGH7-8yAuVTMTa~G3xkqX8H6~99wyLZKfvDyt4sJ4qr5J0BYE69kEZBCULdHYT~Q~jYy3nkVmKqVbxjHkjqqRVahssFNT2vqYM0glg6HRiQDrdut3JL90oF4k56fWtDuobbqdx89Hm1pnVv9bM-0ioqV3B2Nj9l57iJbz~iFQSDP21rHlM9HBnGNtn-myS5p6Wjl9wWYBRI80fC0C0oirtN52ks6NmVmE~b0nQyLp-V7RdJg~v3Awe4NwBFBX612oIp8ggEt5NWdVw__"
    },
    {
      name: "Apoorva Gupta",
      github: "https://github.com/rishiyadav11/",
      description: "Machine learning model creator with expertise in natural language processing.",
      twitter: "https://x.com/RishiYadav5911",
      email: "example3@gmail.com",
      linkedinId: "https://www.linkedin.com/in/rishi-yadav-809096279/",
      imgurl: "https://s3-alpha-sig.figma.com/img/7fdb/13ee/5e42d5a62aed73166cef4f602fd563a9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VC7YmbL5oOyA7lrxAFZ8tvlcqUsBzV9bSvnLhFS8n1dZ4IwE433ulJilFeZdCCHlP0S0LCpPWGH7-8yAuVTMTa~G3xkqX8H6~99wyLZKfvDyt4sJ4qr5J0BYE69kEZBCULdHYT~Q~jYy3nkVmKqVbxjHkjqqRVahssFNT2vqYM0glg6HRiQDrdut3JL90oF4k56fWtDuobbqdx89Hm1pnVv9bM-0ioqV3B2Nj9l57iJbz~iFQSDP21rHlM9HBnGNtn-myS5p6Wjl9wWYBRI80fC0C0oirtN52ks6NmVmE~b0nQyLp-V7RdJg~v3Awe4NwBFBX612oIp8ggEt5NWdVw__"
    }
  ];
  
  
  
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <div className="w-full h-custom justify-center flex ">
      <div class="relative w-[80%] h-full">
 <div className="flex flex-col items-center gap-4 h-full">
      {developersData.map((developer, index) => (
        <div
          key={index}
          className={`flex ${index % 2 === 0 ?'ml-52 ' : 'mr-52'} p-4 h-[40%] bg-white w-[55%] relative rounded-lg flex flex-col gap-2`}
        >
          <div className=" flex gap-4 ">
            <img className='w-10 h-10 object-contain' src={developer.imgurl} alt="" />
            <h2>{developer.name}</h2>
          </div>
          <h3>{developer.description}</h3>
          <h4 className='flex  items-center gap-2'><FaGoogle/> {developer.email}</h4>
          <div className="absolute top-0 right-0 gap-4 h-full w-[10%] flex-col flex justify-center items-center ">
            <a className='text-xl cursor-pointer text-slate-700 hover:text-black' href={developer.github} target='_blank'><GrGithub/></a>
            <a className='text-xl cursor-pointer text-slate-700 hover:text-blue-500' href={developer.twitter} target='_blank'><FaTwitter/></a>
            <a className='text-xl cursor-pointer text-slate-700 hover:text-blue-500' href={developer.linkedinId} target='_blank'><CiLinkedin/></a>

          </div>
        </div>
        
      ))}
    </div>
</div>

      </div>
      </div>
  )
}

export default AboutUs
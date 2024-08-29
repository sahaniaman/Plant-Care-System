import React from 'react'
import Home from "../src/components/pages/Home"
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='w-full h-screen relative flex items-center justify-center'>
      <div className="background bg-[#f8f5f0] absolute -z-10 inset-0">
      <svg className='absolute top-0 left-0' width="600" height="600" viewBox="0 0 827 827" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_df_42_194)">
<path d="M627 413.5C627 531.413 531.413 627 413.5 627C295.587 627 200 531.413 200 413.5C200 295.587 295.587 200 413.5 200C531.413 200 627 295.587 627 413.5Z" fill="#318161" fillOpacity="0.1" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_df_42_194" x="0" y="0" width="827" height="827" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="14"/>
<feGaussianBlur stdDeviation="52"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_194"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_194" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect2_foregroundBlur_42_194"/>
</filter>
</defs>
</svg>
      <svg className=' absolute top-48 left-80' width="500" height="400" viewBox="0 0 679 571" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_df_42_193)">
<circle cx="339.5" cy="231.5" r="139.5" fill="#318161" fillOpacity="0.25" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_df_42_193" x="0" y="-108" width="679" height="679" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="14"/>
<feGaussianBlur stdDeviation="52"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_193"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_193" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect2_foregroundBlur_42_193"/>
</filter>
</defs>
</svg>
<svg className='absolute top-0 left-96' width="1085" height="775" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_df_42_149)">
<rect x="1065.68" y="-173" width="195.625" height="1398.09" transform="rotate(38.2566 1065.68 -173)" fill="#F9E1C3"/>
</g>
<defs>
<filter id="filter0_df_42_149" x="0" y="-373" width="1419.29" height="1618.97" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="14"/>
<feGaussianBlur stdDeviation="52"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_149"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_149" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect2_foregroundBlur_42_149"/>
</filter>
</defs>
</svg>
<svg className='absolute top-0 right-0' width="458" height="774" viewBox="0 0 458 774" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_df_42_137)">
<circle cx="413.5" cy="413.5" r="213.5" fill="#F9E1C3"/>
</g>
<defs>
<filter id="filter0_df_42_137" x="0" y="0" width="827" height="827" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="14"/>
<feGaussianBlur stdDeviation="52"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_137"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_137" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect2_foregroundBlur_42_137"/>
</filter>
</defs>
</svg>
<svg className='left-52 top-80  absolute' width="679" height="455" viewBox="0 0 679 477" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_df_42_138)">
<circle cx="339.5" cy="339.5" r="139.5" fill="#318161" fillOpacity="0.25" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_df_42_138" x="0" y="0" width="679" height="679" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="10" dy="14"/>
<feGaussianBlur stdDeviation="52"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_138"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_138" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect2_foregroundBlur_42_138"/>
</filter>
</defs>
</svg>

      </div>
      <div className="main w-[90%] h-[90%] bg-transparent rounded-3xl overflow-hidden shadow-2xl shadow-stone-400 ">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </div>
   
    </div>
  )
}

export default App
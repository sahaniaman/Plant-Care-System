// import React, { useState } from 'react'
// import Navbar from "../Navbar"
// import SvgImageUploader from '../SvgImageUploader'
// import { CiFacebook } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa6";

// const Home = () => {
//   const [issubmit, setissubmit] = useState(false)
//   return (
//     <div className='w-full h-full ' >
//       <Navbar/>
//       {
//         issubmit ?(      <div className="h-[75%] flex w-full ">
//           <div className=" w-[50%] h-full flex justify-center items-center">
//             <SvgImageUploader/>
//           </div>
//           <div className="w-[45%] h-full flex items-center justify-center">
//             <div className="rounded-full bg-custom-gradient h-[88%] w-[80%]  flex justify-center items-center">
//               <img className='w-full h-full object-cover object-bottom' src="https://s3-alpha-sig.figma.com/img/0766/d675/c13065c0bec317ef73a4400aa76b3116?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdhmsOaTUJkxmNj85hQGeD6viq8LVia-miRzDSvcR9EnJYajH3-qxWNs2qaw5OuYzkCHvl7Sfk7vGS84lEZR-O~Hu4BaWWkivXIoQb7SYDjG4X4hi1Rkx6Orc0subMme88yiZVSD5biWtUMxtdCBs3b4gm-Z9SnjJry4OCiA1XC9mhbdOzyo0q3EEPUQzqQU2~hxRUYfWHpxTSwmmyQ1U-zhA819M36VnSKVy8z~8jDBw5fpZsYmDw6126hL6vs49C~zZHYIS3TA1DWS826RYrmPmb-YvP9iRfE5T1gfH~tIy5q6jpBTYli7GIKTxDzhETBvHC5g7wn436DaH0fUEA__" alt="" />
//             </div>
//           </div>
//           <div className=" h-full w-[5%]  flex flex-col justify-center ">
//           <div className="flex flex-col gap-4 items-center text-3xl text-black font-semibold font-poppins relative">
//     <CiFacebook />
//     <FaInstagram />
//     <FaTwitter />
//     <div className="absolute  -bottom-48    border-r-2 border-black" style={{ height: '150%' }}></div>
//   </div>
  
//           </div>
//         </div>) :(
//                 <div className="h-[75%] flex w-full ">
//                 <div className=" w-[50%] h-full flex flex-col items-center  pt-6 justify-center">
//                   <h1 className='text-center text-4xl font-poppins font-semibold text-slate-800 leading-tight'>Result</h1>
//                   <div className="flex flex-col gap-8  mt-4 w-full items-center">
                    
//                     <h2 className='w-[60%] h-14 rounded-xl text-white p-2 bg-[#7BACA9]'>Infected</h2>

//                     <h2 className='w-[60%] h-14 rounded-xl text-white p-2 bg-[#D9D9D9]'></h2>
//                     <textarea className='w-[60%] resize-none  rounded-xl p-2 text-white bg-[#7BACA9]'></textarea>
//                     <button className='text-white bg-emerald-600 h-12 w-36 text-2xl font-semibold rounded-xl'>Refresh</button>
//                   </div>
//                 </div>
//                 <div className="w-[45%] h-full flex items-center justify-center">
//                   <div className="rounded-full bg-custom-gradient h-[88%] w-[80%]  flex justify-center items-center">
//                     <img className='w-full h-full object-cover object-bottom' src="" alt="" />
//                   </div>
//                 </div>
//                 <div className=" h-full w-[5%]  flex flex-col justify-center ">
//                 <div className="flex flex-col gap-4 items-center text-3xl text-black font-semibold font-poppins relative">
//           <CiFacebook />
//           <FaInstagram />
//           <FaTwitter />
//           <div className="absolute  -bottom-48    border-r-2 border-black" style={{ height: '150%' }}></div>
//         </div>
        
//                 </div>
//               </div>
//         )
//       }
//       <div className="w-full  flex justify-end h-[17%]">
//         <div className="w-[70%] h-full bg-gray-800 rounded-tl-2xl overflow-hidden gap-4 flex items-center">
//           <div className="bg-[#FAB65D] w-[20%] h-full relative">
//           <img
//     className='scale-90'
//     src="https://s3-alpha-sig.figma.com/img/dcf7/156e/cd3ef1e8ec7d36fee288ec184e95e228?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WEQeqI3xtncoNd7S0shUcCWRcVzahIZouMbgaDu1BbyqFkL2v8GgvVVxpINIL0yXqSzu6b8o-uAOwRd1rKCx-~7yiscwbUYgG2CZIngsxBa7IBUXGaJWVrMcgJ00du8sySAZS36uibVh6Ds2So9taqJ7peMF2lcD0L89PvxY3cvxzPMtQbbuQzenVftBhP5175L8wmedSHPWZEiFNAtydVBOzJjxa2hgOODzH0R6rxONq0YOzJNHtypAAz0ElXiT2VgG2gKyPmKPmoMLzPLl5XKsMtr08XRp9knjtc1USwVmQoqXEbf3e~Ik6hMrIKR84w-fVnxuD7W3GroND7clug__"
//     alt=""
//     style={{ position: 'absolute', top: 20, left: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }}
//   />
//           </div>
//           <h1 className='text-white text-xl'>Plant Diseases are Shifty Enemies</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home




import React, { useState } from 'react';
import Navbar from "../Navbar";
import SvgImageUploader from '../SvgImageUploader';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Home = () => {
  const [issubmit, setIssubmit] = useState(true);
  const [result, setResult] = useState(null);

  const handleUpload = (data) => {
    setIssubmit(false);
    setResult(data); // Set the result from the server response
    
  };

  console.log(result)
  return (
    <div className='w-full h-full'>
      <Navbar />
      {
        issubmit ? (
          <div className="h-[75%] flex w-full">
            <div className="w-[50%] h-full flex justify-center items-center">
              <SvgImageUploader onUpload={handleUpload} />
            </div>
            <div className="w-[45%] h-full flex items-center justify-center">
              <div className="rounded-full bg-custom-gradient h-[88%] w-[80%] flex justify-center items-center">
                
                  <img className='w-full h-full object-cover object-bottom' src="https://s3-alpha-sig.figma.com/img/0766/d675/c13065c0bec317ef73a4400aa76b3116?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdhmsOaTUJkxmNj85hQGeD6viq8LVia-miRzDSvcR9EnJYajH3-qxWNs2qaw5OuYzkCHvl7Sfk7vGS84lEZR-O~Hu4BaWWkivXIoQb7SYDjG4X4hi1Rkx6Orc0subMme88yiZVSD5biWtUMxtdCBs3b4gm-Z9SnjJry4OCiA1XC9mhbdOzyo0q3EEPUQzqQU2~hxRUYfWHpxTSwmmyQ1U-zhA819M36VnSKVy8z~8jDBw5fpZsYmDw6126hL6vs49C~zZHYIS3TA1DWS826RYrmPmb-YvP9iRfE5T1gfH~tIy5q6jpBTYli7GIKTxDzhETBvHC5g7wn436DaH0fUEA__" alt="Result" />
               
              </div>
            </div>
            <div className="h-full w-[5%] flex flex-col justify-center">
              <div className="flex flex-col gap-4 items-center text-3xl text-black font-semibold font-poppins relative">
                <CiFacebook />
                <FaInstagram />
                <FaTwitter />
                <div className="absolute -bottom-48 border-r-2 border-black" style={{ height: '150%' }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[75%] flex w-full">
  <div className="w-[50%] h-full flex flex-col items-center pt-6 justify-center">
    <h1 className='text-center text-4xl font-poppins font-semibold text-slate-800 leading-tight'>Result</h1>
    <div className="flex flex-col gap-8 mt-4 w-full items-center">
      <h2 className='w-[60%] h-14 rounded-xl text-white p-2 bg-[#7BACA9]'>
        {result.predicted_results[0].description.Health_Status}
      </h2>
      <h2 className='w-[60%] h-14 rounded-xl text-white p-2 bg-[#D9D9D9]'>
        {result.predicted_results[0].label}
      </h2>
      <textarea
        className='w-[60%] resize-none rounded-xl p-2 text-white bg-[#7BACA9]'
        value={result.predicted_results[0].description.Recommendation}
        readOnly
      ></textarea>
      <button onClick={()=>setIssubmit(true)} className='text-white bg-emerald-600 h-12 w-36 text-2xl font-semibold rounded-xl'>
        Refresh
      </button>
    </div>
  </div>
  <div className="w-[45%] h-full flex items-center justify-center">
    <div className="rounded-full overflow-hidden bg-custom-gradient h-[88%] w-[80%] flex justify-center items-center">
      <img
        className='w-full h-full object-cover object-bottom'
        src={`http://127.0.0.1:5000${result.image_filename}`} // Ensure this path is correct
        alt="Predicted result"
      />
    </div>
  </div>
  <div className="h-full w-[5%] flex flex-col justify-center">
    <div className="flex flex-col gap-4 items-center text-3xl text-black font-semibold font-poppins relative">
      <CiFacebook />
      <FaInstagram />
      <FaTwitter />
      <div className="absolute -bottom-48 border-r-2 border-black" style={{ height: '150%' }}></div>
    </div>
  </div>
</div>

        )
      }
      <div className="w-full flex justify-end h-[17%]">
        <div className="w-[70%] h-full bg-gray-800 rounded-tl-2xl overflow-hidden gap-4 flex items-center">
          <div className="bg-[#FAB65D] w-[20%] h-full relative">
            <img
              className='scale-90'
              src="https://s3-alpha-sig.figma.com/img/dcf7/156e/cd3ef1e8ec7d36fee288ec184e95e228?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WEQeqI3xtncoNd7S0shUcCWRcVzahIZouMbgaDu1BbyqFkL2v8GgvVVxpINIL0yXqSzu6b8o-uAOwRd1rKCx-~7yiscwbUYgG2CZIngsxBa7IBUXGaJWVrMcgJ00du8sySAZS36uibVh6Ds2So9taqJ7peMF2lcD0L89PvxY3cvxzPMtQbbuQzenVftBhP5175L8wmedSHPWZEiFNAtydVBOzJjxa2hgOODzH0R6rxONq0YOzJNHtypAAz0ElXiT2VgG2gKyPmKPmoMLzPLl5XKsMtr08XRp9knjtc1USwVmQoqXEbf3e~Ik6hMrIKR84w-fVnxuD7W3GroND7clug__"
              alt=""
              style={{ position: 'absolute', top: 20, left: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }}
            />
          </div>
          <h1 className='text-white text-xl'>Plant Diseases are Shifty Enemies</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

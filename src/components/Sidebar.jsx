import React from "react";
import ResultImage from '../assets/Result Illustration.png';
import ProfilePhoto from '../assets/photo.jpg';

function Sidebar() {
  return (
    <div className="col-span-1 w-11/12">
      <div className="bg-purple-200 rounded-lg shadow px-5 py-5 mb-2">

        {/* div is for Result Illustration image and text supporting it. */}
        <div className="flex items-center justify-center mb-2">
          <img src={ResultImage} alt="Result illustration" className="w-40"/>
        </div>
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-2">Your Result!</h2>
        <p className="text-gray-500 text-center mb-6">All your insights & details in one place</p>
        
        {/* div for th entire section of personal score and analysis */}
        <div className="bg-white rounded-lg p-4 mb-6">
          
         {/* div for the 1st section  */}
          <div className="bg-purple-200 flex items-center justify-between mb-4 grid-cols-2 p-2 rounded-md">
            <div className="bg-indigo-600 bg-opacity-10 rounded-full p-2">
              <i className="fas fa-check text-custom"></i>
            </div>

            <div className="grid grid-rows-2">
              <span className=" bg-purple-600 flex items-center text-white text-xs font-medium px-2.5 py-0.5 rounded-3xl">YOU'VE PASSED!</span>
                <div className="text-3xl font-bold text-gray-900">
                  136<span className="text-gray-400 text-lg">/240</span>
                </div>
            </div>

            <div class="h-16 w-px bg-gray-400"></div>
             
            <div className="grid grid-rows-2">
              <span className="bg-emerald-500 flex items-center text-white text-sm font-medium px-2.5 py-0.5 mr-6 rounded">76%</span>
              <span className="text-emerald-500 text-base font-medium">Accuracy</span>
            </div>
          </div>
          
          
         {/* div for the bottom section  */}
          <div className="pt-2 mb-6 bg-purple-200 rounded-md">
            <div className=" flex items-center justify-between mb-2">
              <div className=" flex items-center ml-2">
                <img src={ProfilePhoto} alt="Top scorer" className="w-10 h-10 rounded-sm"/>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-purple-600">Top Score</p>
                  <p className="text-2xl font-bold text-gray-900">
                    230<span className="text-gray-400 text-sm">/240</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="h-px w-full bg-gray-400"></div>
            
            {/* div for name and accuracy*/}
            <div className="flex justify-between items-center text-emerald-800 text-sm font-medium px-2.5 py-2 rounded">
              <p className="text-sm text-gray-500">
                By <span className="text-sm text-black font-semibold">Parth Akotkar</span>
              </p>
              <span className="bg-emerald-500 flex items-center text-white text-sm font-medium px-2.5 py-0.5 mr-1 rounded-lg">92% Accuracy</span>
            </div>

          </div>

         {/* div for the button and extra text */}
          <div>
            <span className="text-black font-bold">Improve your Marks</span>
            <br/>
            <span className="text-gray-400">Improve your score by practising more.</span>
            <br/><br/>
           <button className="w-full bg-purple-600 text-white rounded-lg py-1 font-medium hover:bg-opacity-90 transition-colors mb-2">
          Practice more
           </button>
          </div>
   
        </div>
          {/* div for the revisit section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-black mb-2">Revisit Paper</h3>
          <p className="text-sm text-gray-500 mb-4">
            Challenge your friends by simply sharing a link to this test
          </p>
          <button className="w-1/2 ml-20 bg-custom bg-purple-600 text-white rounded-lg p-1 font-medium hover:bg-opacity-90 transition-colors">
            Visit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;

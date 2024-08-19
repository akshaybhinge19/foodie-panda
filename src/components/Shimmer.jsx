// const Shimmer = ()=> {
//     return ( <div className="resto-card">
//        <div className="resto-image-container">
         
//       </div>
//       <div className="resto-info">
        
//       </div>
//     </div>)
// }

import Panda from '../../assets/logo.jpg'

const Shimmer = ()=> {
    return ( <div className="flex mx-[8%] justify-center flex-grow">
      <div className="flex flex-wrap justify-start w-[85%]">
        {[...Array(6)].map((elementInArray, index) => ( 
          <div key={index} className="border border-gray-300 shadow rounded-3xl p-4 w-[23%] aspect-[1/1] m-[1%]">
            <div className="flex flex-col animate-pulse space-x-4">
              <div className="rounded-full bg-slate-200 w-full aspect-square">
                {
                  index % 2 === 0 && <img
                    src={Panda}
                    alt="logo"
                    className="rounded-3xl object-cover"
                  />
                }
              </div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>)
}

export default Shimmer;
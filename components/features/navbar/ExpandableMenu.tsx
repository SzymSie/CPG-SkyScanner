import {questionMarkIcon, tagIcon, hotelIcon, planeIcon, truckIcon} from "../../../components/icons/icons"


export default function BurgerMenu(){
    const listItemClass = "flex gap-4 font-sans font-normal font-gray-700 text-base hover:bg-indigo-50 p-3"
    const listItemClassBold="flex gap-4 font-sans font-medium font-gray-700 text-base hover:bg-indigo-50 p-3"

  
    return (
    <div className="absolute top-10 right-7 bg-white text-black w-1/5 h-100  rounded-2xl mt-7 shadow-xl">
        <menu>
        <div className="flex flex-col  border-b border-gray-300" >
           <a href="#" className={`${listItemClassBold} mt-3`} >{planeIcon({size:"w-5 h-5", color:'#0770e3', fill:'none'})}Flights</a>
           <a href="#" className={listItemClassBold}>{hotelIcon({size:"w-5 h-5", color:'#0770e3', fill:'none'})}Hotels</a>
           <a href="#" className={`${listItemClassBold} mb-3`}>{truckIcon({size:"w-5 h-5", color:'#0770e3', fill:'none'})}Car hire</a>
        </div>
        <div className="flex flex-col ">
           <a href="#" className={`${listItemClass} mt-3`}>{tagIcon({size:'w-5 h5', color: '#26AF87', fill:"none"})}Explore everywhere</a>
           <a href="#" className={`${listItemClass} mb-3`}>{questionMarkIcon({size:'w-5 h5', color: '#fff', fill:"#26AF87"})}Help</a>
        </div>
        </menu>
    </div>)

}
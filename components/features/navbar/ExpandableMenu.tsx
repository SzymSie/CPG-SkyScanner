import {questionMarkIcon, tagIcon, hotelIcon, planeIcon, truckIcon} from "../../../components/icons/icons"


export default function BurgerMenu(){
    const listItemClass = "flex gap-4 font-sans font-normal font-gray-700 text-base hover:bg-indigo-50 p-3"
    const listItemClassBold="flex gap-4 font-sans font-medium font-gray-700 text-base hover:bg-indigo-50 p-3"

  
    return (
    <div className="absolute top-10 right-7 bg-white text-black w-1/5 h-100  rounded-2xl mt-7 shadow-xl">
        <menu>
        <ul className="flex flex-col  border-b border-gray-300" >
           <li className={`${listItemClassBold} mt-3`} >{planeIcon({size:"w-5 h-5", color:'#0770e3', fill:'none'})}<a href="#">Flights</a></li>
           <li className={listItemClassBold}>{hotelIcon({size:"w-5 h-5", color:'#0770e3', fill:'none'})}<a href="#">Hotels</a></li>
           <li className={`${listItemClassBold} mb-3`}>{truckIcon({size:"w-5 h-5", color:'#0770e3', fill:'none'})}<a href="#">Car hire</a></li>
        </ul>
        <ul className="flex flex-col ">
           <li className={`${listItemClass} mt-3`}>{tagIcon({size:'w-5 h5', color: '#26AF87', fill:"none"})}<a href="#">Explore everywhere</a></li>
           <li className={`${listItemClass} mb-3`}>{questionMarkIcon({size:'w-5 h5', color: '#fff', fill:"#26AF87"})}<a href="#">Help</a></li>
        </ul>
        </menu>
    </div>)

}
import {
    ButtonRegional,
    ButtonLogin,
    ButtonBurger,
    ButtonHome,
  } from "@/components/ui/button";
import { useState } from "react";
  import ExpandableMenu from "./ExpandableMenu"

// navbar style for hotel, car, flight routes

export default function Navbar() {
  return <header>Navbar</header>;
}

// navbar style is different at root

export function NavbarHome({handleClickHome=()=>{}, handleClickRegional=()=>{}, handleClickLogin=()=>{} }) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleClickBurger=()=>{
      setToggleMenu(!toggleMenu)
  }
    

    return (
      <header className="relative flex justify-between bg-slate-900 text-white font-bold p-4">
        <ButtonHome
          handleClick={handleClickHome}
        />
        {/* <p className="text-xl  bg-gray-500">skyscanner</p> */}
        <div className="flex">
          <ButtonRegional
            handleClick={handleClickRegional}
          />
          <ButtonLogin
            handleClick={handleClickLogin}
          />
          <ButtonBurger
            handleClick={handleClickBurger}
          />

          {toggleMenu &&<ExpandableMenu />}
        </div>
      </header>
    );
  }

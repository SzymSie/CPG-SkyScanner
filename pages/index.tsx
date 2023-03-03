import Hero from "@/components/features/hero";
//we add this for event handlers. however, when we do so we cannot use any async functions.

import { NavbarHome } from "@/components/features/navbar";
import Main from "@/components/features/main";
import Footer from "@/components/features/footer";

// need to think of a way to set urls to dynamic Links.
const placeholderState = {
  popLocations: [
    {
      name: "Amsterdam",
      image: "https://someURL.com",
      flightURL: "",
      carURL: "",
      hotelURL: "",
    },
    {
      name: "London",
      image: "https://someURL.com",
      flightURL: "",
      carURL: "",
      hotelURL: "",
    },
    {
      name: "Dublin",
      image: "https://someURL.com",
      flightURL: "",
      carURL: "",
      hotelURL: "",
    },
  ],
};

// maybe import these click handlers from elsewhere. clean up this area

const handleClickHome = () =>
  alert('clicked on home button. wire up to <Link href"/"/>');
const handleClickRegional = () =>
  alert("clicked regional. wire up to regional settings modal");

const handleClickLogin = () =>
  alert('clicked login. wire up to <Link href"/account"/>');

// const handleClickBurger = () =>
//   alert("clicked burger. wire up to dropdown menu");

export default function Home() {
  return (
    <>
      <NavbarHome
        handleClickHome={handleClickHome}
        handleClickRegional={handleClickRegional}
        handleClickLogin={handleClickLogin}
        // handleClickBurger={handleClickBurger}
      />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

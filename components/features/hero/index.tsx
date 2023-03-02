function Hero() {
  return (
    <div className="bg-slate-900 text-white p-6">
      <h2 className="text-xl font-bold">
        Quickly scan all your favourite travel sites
      </h2>
      <div className="flex flex-col items-start">
        <button>departure location</button>
        <button>choose destination</button>
        <div className="flex flex-row self-center content-between">
          <button>date</button>
          <button>people</button>
        </div>
        <div className="flex flex-row">
          <input type="checkbox"></input>
          <span>Direct flights</span>
        </div>
        <button className="self-center">search</button>
      </div>
    </div>
  );
}
export default Hero;

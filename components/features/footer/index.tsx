function Footer() {
  const fontClassNames = "text-white font-bold";
  return (
    <footer className="flex flex-row bg-slate-600 justify-center space-x-12 p-4">
      <div className="flex flex-col ">
        <a className={fontClassNames} href="#">
          Help
        </a>
        <a className={fontClassNames} href="#">
          Personal Data Policy
        </a>
        <a className={fontClassNames} href="#">
          Log In
        </a>
      </div>
      <div className="flex flex-col ">
        <a className={fontClassNames} href="#">
          Privacy Policy
        </a>
        <a className={fontClassNames} href="#">
          Cookie Policy
        </a>
        <a className={fontClassNames} href="#">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
export default Footer;

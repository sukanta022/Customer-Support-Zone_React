const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto py-5 content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 bg-white shadow">
      <h1 className="text-2xl font-bold lg:pl-5">CS — Ticket System</h1>
      <nav>
        <ul className="flex flex-wrap gap-5 lg:gap-12 justify-center items-center lg:pr-5">
          <li className="">
            <a href="#" className="hover:border-b-3 py-1 hover:border-primary hover:font-bold">Home</a>
          </li>

          <li className="">
            <a href="#" className="hover:border-b-3 py-1 hover:border-primary hover:font-bold">FAQ</a>
          </li>

          <li className="">
            <a href="#" className="hover:border-b-3 py-1 hover:border-primary hover:font-bold">Changelog</a>
          </li>

          <li className="">
            <a href="#" className="hover:border-b-3 py-1 hover:border-primary hover:font-bold">Blog</a>
          </li>

          <li className="">
            <a href="#" className="hover:border-b-3 py-1 hover:border-primary hover:font-bold">Download</a>
          </li>

          <li className="">
            <a href="#" className="hover:border-b-3 py-1 hover:border-primary hover:font-bold">Contact</a>
          </li>

          <li className="">
            <button
                className="btn p-4 border-none text-white rounded-xl"
                style={{ background: "linear-gradient(to right,#4e54c8, #8f94fb)" }}
            >
                + New Ticket
            </button>
          </li>  
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
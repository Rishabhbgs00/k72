import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="font-[font2] flex justify-center gap-6 py-10">
      <Link
        to="/projects"
        className="text-[5vw] text-black hover:text-green-400 lg:border-2 border-black rounded-full px-8 py-3 uppercase leading-tight transition-all duration-300"
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="text-[5vw] text-black hover:text-green-400 lg:border-2 border-black rounded-full px-8 py-3 uppercase leading-tight transition-all duration-300"
      >
        Agence
      </Link>
    </div>
  );
}

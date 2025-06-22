import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";

export default function Radar() {
  return (
    <div className="relative w-52 h-52 border-2 border-black rounded-full overflow-hidden">
      <div className="absolute w-full h-full animate-spin-slow">
        <div className="absolute w-1/2 h-full bg-gradient-to-r from-[#FFC900] to-transparent origin-left"></div>
      </div>

      <div>
        <RiNextjsFill className="absolute top-[20%] left-[40%] w-2 h-2 bg-green-500 rounded-full animate-ping text-xs" />
      </div>
      <div>
        <FaReact className="absolute top-[60%] left-[70%] w-2 h-2 bg-green-400 rounded-full animate-pulse text-lg" />
      </div>
      <div>
        <IoLogoPython className="absolute top-[75%] left-[30%] w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
      </div>
      <div>
        <BiLogoTypescript className="absolute top-[40%] left-[80%] w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>

      <div className="absolute inset-0 rounded-full border border-black opacity-30 scale-75"></div>
      <div className="absolute inset-0 rounded-full border border-black opacity-20 scale-50"></div>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

import { MdOutlineRadar } from "react-icons/md";
import { Link } from "react-router";

function Logo({textSize}) {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineRadar className={`${textSize} text-[#101828]`} />
      <Link to={"/"}>
        <span className=""> OpenRadar</span>
      </Link>
    </div>
  );
}

export default Logo;

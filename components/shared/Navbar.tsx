// constants
import { btn_icon_variant } from "@/constants/ui";
// react icons
import { CgMenuLeft, CgProfile } from "react-icons/cg";
import { PiPower } from "react-icons/pi";
import { MdOutlineLocationSearching } from "react-icons/md";
// cmp
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="backdrop-blur-xl bg-white/70 max-md:border-b border-b fixed z-20 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="md:hidden">
            <Button className="btn_icon" variant={btn_icon_variant}>
              <CgMenuLeft />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button className="btn_icon btn_color" variant={btn_icon_variant}>
            <PiPower />
          </Button>
          <Button className="btn_icon btn_color" variant={btn_icon_variant}>
            <MdOutlineLocationSearching />
          </Button>
          <Button className="btn_icon btn_color" variant={btn_icon_variant}>
            <CgProfile />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
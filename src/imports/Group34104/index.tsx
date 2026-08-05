import imgHomeScreenVitals1 from "./b9707968c35f0abe9f085815d77861e32143aca4.png";
import imgIPhone15ProBlackTitaniumPortrait from "./6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";

export default function Group() {
  return (
    <div className="contents relative size-full">
      <div className="absolute h-[705.108px] left-0 rounded-[40px] top-0 w-[326.004px]" data-name="Home Screen Vitals 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgHomeScreenVitals1} />
      </div>
      <div className="absolute h-[771px] left-0 top-0 w-[384px]" data-name="iPhone 15 Pro - Black Titanium - Portrait">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone15ProBlackTitaniumPortrait} />
      </div>
    </div>
  );
}
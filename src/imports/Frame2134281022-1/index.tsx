import imgIPhone15ProBlackTitaniumPortrait from "./6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgHomeScreenVitals1 from "./5a84c46c87d9ca064857f47818e6397e99acbbf8.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[749.822px] left-0 top-0 w-[384.043px]" data-name="iPhone 15 Pro - Black Titanium - Portrait">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone15ProBlackTitaniumPortrait} />
      </div>
      <div className="-translate-x-1/2 absolute h-[696px] left-[calc(50%-0.02px)] rounded-[40px] top-[24px] w-[320px]" data-name="Home Screen Vitals 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[40px] size-full" src={imgHomeScreenVitals1} />
      </div>
      <div className="absolute h-[129px] left-0 top-0 w-[384px]" data-name="iPhone 15 Pro - Black Titanium - Portrait">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[586.6%] left-0 max-w-none top-[-2.67%] w-[100.01%]" src={imgIPhone15ProBlackTitaniumPortrait} />
        </div>
      </div>
    </div>
  );
}
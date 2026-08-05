import imgImage1 from "./927664ffa9ea33f952e5031118e832bd50f3fd53.png";

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[976px] not-italic text-[24px] text-white top-[50px]">
      <p className="font-['Designit_Alphabeta:Regular',sans-serif] min-w-full relative shrink-0 w-[min-content]">{`Sector: `}</p>
      <p className="font-['Designit_Alphabeta:Bold',sans-serif] relative shrink-0 whitespace-nowrap">Telecommunication</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[1416px] not-italic text-[24px] text-white top-[50px] w-[307px]">
      <p className="font-['Designit_Alphabeta:Regular',sans-serif] relative shrink-0 whitespace-nowrap">{`My roles: `}</p>
      <p className="font-['Designit_Alphabeta:Bold',sans-serif] min-w-full relative shrink-0 w-[min-content]">UX Research, System design, Product design</p>
    </div>
  );
}

export default function Slide() {
  return (
    <div className="bg-white relative size-full" data-name="Slide 16:9 - 2">
      <div className="-translate-x-1/2 absolute h-[1080px] left-1/2 top-0 w-[1920px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="[word-break:break-word] absolute font-['Designit_Alphabeta:Regular',sans-serif] leading-[normal] left-[96px] not-italic text-[24px] text-white top-[50px] whitespace-nowrap">Casestudy</p>
      <p className="[word-break:break-word] absolute font-['Designit_Alphabeta:Regular',sans-serif] leading-[normal] left-[96px] not-italic text-[70px] text-white top-[372px] w-[634px]">{`Unified Service Operations Platform `}</p>
      <p className="[word-break:break-word] absolute font-['Designit_Alphabeta:Regular',sans-serif] leading-[normal] left-[976px] not-italic text-[70px] text-white top-[372px] w-[848px]">Reimagining workflows for network service delivery and assurance teams</p>
      <Frame />
      <Frame1 />
      <p className="[word-break:break-word] absolute font-['Designit_Alphabeta:Regular',sans-serif] leading-[0] left-[96px] not-italic text-[16px] text-white top-[1013px] whitespace-nowrap">
        <span className="font-['Designit_Alphabeta:Bold',sans-serif] leading-[normal]">{`Designit `}</span>
        <span className="leading-[normal]">A Wipro company</span>
      </p>
    </div>
  );
}
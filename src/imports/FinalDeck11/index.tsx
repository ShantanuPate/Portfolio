import { ImageWithFallback } from "../../app/components/figma/ImageWithFallback";
import imgAdobeStock15394412381 from "./916a8d99cde6dcea90f9a446ea80a888763e07b5.png";

function Frame2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[96px] not-italic text-[24px] text-white top-[50px] whitespace-nowrap">
      <p className="font-['Designit_Alphabeta:Regular',sans-serif] relative shrink-0">Case study</p>
      <p className="font-['Designit_Alphabeta:Bold',sans-serif] relative shrink-0">2025</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[calc(50%+16px)] not-italic text-[24px] text-white top-[50px]">
      <p className="font-['Designit_Alphabeta:Regular',sans-serif] min-w-full relative shrink-0 w-[min-content]">{`Sector: `}</p>
      <p className="font-['Designit_Alphabeta:Bold',sans-serif] relative shrink-0 whitespace-nowrap">Healthcare</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[calc(75%-24px)] not-italic text-[24px] text-white top-[50px] w-[307px]">
      <p className="font-['Designit_Alphabeta:Regular',sans-serif] relative shrink-0 whitespace-nowrap">{`My roles: `}</p>
      <p className="font-['Designit_Alphabeta:Bold',sans-serif] min-w-full relative shrink-0 w-[min-content]">Product design</p>
    </div>
  );
}

export default function FinalDeck() {
  return (
    <div className="bg-white relative size-full" data-name="Final deck 11">
      <div className="-translate-x-1/2 absolute h-[1080px] left-1/2 top-0 w-[2024px]" data-name="AdobeStock_1539441238 1">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgAdobeStock15394412381} />
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[3.8px] bg-[rgba(0,0,0,0.45)] h-[1080px] left-1/2 top-0 w-[2024px]" data-name="AdobeStock_1539441238 2" />
      <p className="[word-break:break-word] absolute font-['Designit_Alphabeta:Regular',sans-serif] leading-[0] left-[50px] not-italic text-[#f1f1f1] text-[16px] top-[calc(80%+147px)] whitespace-nowrap">
        <span className="font-['Designit_Alphabeta:Bold',sans-serif] leading-[normal]">{`Designit `}</span>
        <span className="leading-[normal]">A Wipro company</span>
      </p>
      <Frame2 />
      <div className="[word-break:break-word] absolute font-['Designit_Alphabeta:Bold',sans-serif] leading-[0] left-[96px] not-italic text-[#f1f1f1] text-[84px] top-[calc(20%+156px)] w-[743px]">
        <p className="leading-[normal] mb-0">Diabetes</p>
        <p className="leading-[normal]">Care</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Designit_Alphabeta_Text:Regular',sans-serif] leading-[0] left-[calc(50%+16px)] not-italic text-[64px] text-white top-[calc(20%+156px)] w-[848px]">
        <span className="font-['Designit_Alphabeta:Bold',sans-serif] leading-[100.05999755859375%]">{`Revisualising Healthcare for all - `}</span>
        <span className="font-['Designit_Alphabeta:Regular',sans-serif] leading-[100.05999755859375%]">Diabetes Management App</span>
      </p>
      <Frame />
      <Frame1 />
    </div>
  );
}
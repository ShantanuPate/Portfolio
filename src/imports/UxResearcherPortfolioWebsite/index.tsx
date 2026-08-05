import svgPaths from "./svg-bhe20ck1so";
import imgImageJuhiKapoorPersona from "./993e60f848a72094c2407ebd010a478c92995a6e.png";
import imgImageEspressoNookHomeScreen from "./206ec6be05c0a9b38bc81327d60b157e61b6f520.png";
import imgImageEspressoNookExploreScreen from "./d518d1eeff5e1916b35b2f670450e06f6ee35cd7.png";
import imgImageEspressoNookCategoryScreen from "./96302ae4bab125a1504ba6586263a9acac34d2d0.png";
import imgImageEspressoNookProductScreen from "./b9707968c35f0abe9f085815d77861e32143aca4.png";
import imgImageEspressoNookCustomiseScreen from "./12d22e4f5ebe297137f56b9f8804008feaf5f3b4.png";
import imgImageEspressoNookCartScreen from "./ba7cc4daa3d24323e3c30b344bddd480ff23ea14.png";
import imgImageEspressoNookCheckoutScreen from "./8185545c35027ea0ee93940ccc575bf58d532336.png";
import imgImageEspressoNookConfirmationScreen from "./7717fb724fe9e7595c5aaa579d108f2713ccfdc7.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #9B8F83)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #9B8F83)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#9b8f83] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Back to Work
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[#1a1814] text-[15px] whitespace-nowrap">Shantanu.</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between max-w-[1280px] px-[40px] relative shrink-0 w-[1280px]" data-name="Navigation">
      <Button />
      <Text />
    </div>
  );
}

function NavigationMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Navigation />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(250,246,239,0.9)] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <NavigationMargin />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="bg-[rgba(0,0,0,0.2)] h-px relative shrink-0 w-[32px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] tracking-[1.2px] uppercase whitespace-nowrap">Case Study</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[99px] relative shrink-0 w-[944px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[75px] relative shrink-0 text-[#1a1814] text-[60px] whitespace-nowrap">Espresso Nook</p>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[32.5px] relative shrink-0 text-[20px] text-[rgba(26,24,20,0.7)] w-[768px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Designing a pre-order mobile experience for a specialty coffee café in Mumbai — from user research to hi-fi delivery
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_8370)" id="Icon">
          <path d={svgPaths.p3d1ec300} id="Vector" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d={svgPaths.p6b82b00} fill="var(--fill-0, #1A1814)" fillOpacity="0.5" id="Vector_2" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_8370">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(26,24,20,0.7)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`F&B · Mobile App · Product Design`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0" data-name="Container">
      <Icon1 />
      <Text3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(26,24,20,0.7)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          2023
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[249.02px] top-0" data-name="Container">
      <Icon2 />
      <Text4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p317fdd80} id="Vector" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d={svgPaths.p31c78b80} id="Vector_2" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d={svgPaths.p3625bb80} id="Vector_3" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          <path d={svgPaths.p2ca18b80} id="Vector_4" stroke="var(--stroke-0, #1A1814)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(26,24,20,0.7)] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          UX Designer
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[323.02px] top-0" data-name="Container">
      <Icon3 />
      <Text5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] px-[40px] relative shrink-0 w-[1024px]" data-name="Container">
      <Container2 />
      <Heading />
      <ParagraphMargin />
      <ContainerMargin1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#ffeee6] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[113px] pt-[112px] relative size-full">
        <ContainerMargin />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[18px] whitespace-nowrap">Problem</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[282.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#9b8f83] text-[14px] w-[283px]" style={{ fontVariationSettings: '"opsz" 9' }}>{`Working adults and students don't have time to queue. The existing walk-in-only model was losing customers during peak hours because the wait was simply too long.`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[135px] items-start left-0 top-0 w-[282.664px]" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[18px] whitespace-nowrap">Solution</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[282.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#9b8f83] text-[14px] w-[283px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          A mobile pre-ordering app that lets customers browse, customise, pay ahead, and receive a notification the moment their order is ready — eliminating the queue entirely.
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[135px] items-start left-[330.66px] top-0 w-[282.664px]" data-name="Container">
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[18px] whitespace-nowrap">Impact</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[282.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#9b8f83] text-[14px] w-[283px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          91% task completion rate in usability testing. Order flow reduced from 4 steps to 2. Reorder shortcut became the highest-rated feature.
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[135px] items-start left-[661.33px] top-0 w-[282.664px]" data-name="Container">
      <Heading4 />
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[135px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] px-[40px] relative shrink-0 w-[1024px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#eae0d0] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">Research Approach</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a1814] text-[14px] whitespace-nowrap">METHODS</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#faf6ef] content-stretch flex flex-col h-[30.5px] items-start left-0 px-[11px] py-[7px] rounded-[6px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1a1814] text-[11px] whitespace-nowrap">User Interviews</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#faf6ef] content-stretch flex flex-col h-[30.5px] items-start left-[99.95px] px-[11px] py-[7px] rounded-[6px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1a1814] text-[11px] whitespace-nowrap">Contextual Inquiry</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#faf6ef] content-stretch flex flex-col h-[30.5px] items-start left-0 px-[11px] py-[7px] rounded-[6px] top-[38.5px]" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1a1814] text-[11px] whitespace-nowrap">Journey Mapping</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#faf6ef] content-stretch flex flex-col h-[30.5px] items-start left-[107.3px] px-[11px] py-[7px] rounded-[6px] top-[38.5px]" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1a1814] text-[11px] whitespace-nowrap">Wireframing</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#faf6ef] content-stretch flex flex-col h-[30.5px] items-start left-0 px-[11px] py-[7px] rounded-[6px] top-[77px]" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#1a1814] text-[11px] whitespace-nowrap">Usability Testing</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[107.5px] relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(251,240,236,0.3)] content-stretch flex flex-col h-[193.5px] items-start left-0 p-[25px] rounded-[10px] top-0 w-[293.328px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading5 />
      <ContainerMargin5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a1814] text-[14px] whitespace-nowrap">PARTICIPANTS</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-[243.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9b8f83] text-[14px] w-[244px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          18 participants — mix of regulars and first-time café visitors
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(251,240,236,0.3)] content-stretch flex flex-col h-[193.5px] items-start left-[325.33px] p-[25px] rounded-[10px] top-0 w-[293.336px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading6 />
      <Paragraph3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a1814] text-[14px] whitespace-nowrap">DURATION</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[243.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9b8f83] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          10 weeks
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(251,240,236,0.3)] content-stretch flex flex-col h-[193.5px] items-start left-[650.66px] p-[25px] rounded-[10px] top-0 w-[293.336px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading7 />
      <Paragraph4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[193.5px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] px-[40px] relative shrink-0 w-[1024px]" data-name="Container">
      <Heading1 />
      <ContainerMargin4 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">The Brief</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] w-[944px]" style={{ fontVariationSettings: '"opsz" 9' }}>{`Espresso Nook is a specialty coffee café nestled in the heart of Mumbai — a sanctuary for coffee aficionados and a hub for creative minds. The brief was to design an engaging digital ordering experience that captures the café's warm, artisanal personality while solving a very real operational problem: long queues during peak hours.`}</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Client</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[270px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#005741] text-[16px] whitespace-nowrap">Espresso Nook, Mumbai</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[77px] items-start left-0 p-[17px] rounded-[10px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Platform</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[270px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#005741] text-[16px] whitespace-nowrap">iOS Mobile App</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[77px] items-start left-[320px] p-[17px] rounded-[10px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Deliverable</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[270px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#005741] text-[16px] whitespace-nowrap">{`End-to-end UX & UI`}</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[77px] items-start left-[640px] p-[17px] rounded-[10px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph5 />
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading8 />
        <Container18 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">{`Problem & Goal`}</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">The Problem</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#005741] text-[16px] w-[892px]" style={{ fontVariationSettings: '"opsz" 9' }}>{`Working adults and students in Mumbai often don't have enough time to wait in line. They need a fast-tracked solution to conveniently order and enjoy their coffee — without the friction of queuing, decision fatigue at the counter, or fumbling with cash.`}</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#fee4d7] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d1512d] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[28px] pr-[24px] py-[24px] relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] tracking-[1px] uppercase whitespace-nowrap">The Goal</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#005741] text-[16px] w-[892px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Design an engaging digital experience for Espresso Nook that makes it easy for customers to discover the menu, customise their order, pay ahead, and pick up without waiting — all within a branded, delightful app.
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#38836e] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[28px] pr-[24px] py-[24px] relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container24 />
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading9 />
        <Container23 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">{`User Research & Segmentation`}</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Through a mix of in-café observation, intercept interviews, and a screener survey, I identified five distinct user segments who visit Espresso Nook regularly.
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col gap-[8px] items-center left-0 p-[17px] rounded-[14px] top-0 w-[179.195px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#1a1814] text-[24px] text-center tracking-[0.0703px] whitespace-nowrap">💼</p>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#005741] text-[12px] text-center w-[56px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Corporate Employees
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col gap-[8px] items-center left-[191.2px] p-[17px] rounded-[14px] top-0 w-[179.203px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#1a1814] text-[24px] text-center tracking-[0.0703px] whitespace-nowrap">🛍️</p>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#005741] text-[12px] text-center w-[56px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Shop Employees
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col gap-[8px] items-center left-[382.4px] p-[17px] rounded-[14px] top-0 w-[179.195px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#1a1814] text-[24px] text-center tracking-[0.0703px] whitespace-nowrap">☕</p>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#005741] text-[12px] text-center w-[36px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Coffee Lovers
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col gap-[8px] items-center left-[573.59px] p-[17px] rounded-[14px] top-0 w-[179.203px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#1a1814] text-[24px] text-center tracking-[0.0703px] whitespace-nowrap">😌</p>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#005741] text-[12px] text-center w-[46px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Casual Drinkers
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col gap-[8px] items-center left-[764.8px] p-[17px] rounded-[14px] top-0 w-[179.195px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#1a1814] text-[24px] text-center tracking-[0.0703px] whitespace-nowrap">🛵</p>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#005741] text-[12px] text-center w-[51px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Delivery Personnel
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[107px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Primary Persona</p>
      </div>
    </div>
  );
}

function ImageJuhiKapoorPersona() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Image (Juhi Kapoor — persona)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJuhiKapoorPersona} />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <ImageJuhiKapoorPersona />
      </div>
      <div aria-hidden className="absolute border-2 border-[#dbff3d] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Juhi Kapoor</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5c7a9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          25 yrs · Visual Designer · Mumbai
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-[192.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#dbff3d] content-stretch flex flex-col h-[23px] items-start left-0 px-[10px] py-[4px] rounded-[16777200px] top-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#005741] text-[10px] whitespace-nowrap">Daily coffee drinker</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#dbff3d] content-stretch flex flex-col h-[23px] items-start left-[108.9px] px-[10px] py-[4px] rounded-[16777200px] top-0" data-name="Text">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#005741] text-[10px] whitespace-nowrap">Specialty coffee</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[23px] relative shrink-0 w-[193.414px]" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function ContainerAlign() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#005741] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center p-[24px] relative size-full">
          <Container36 />
          <Container37 />
          <ContainerAlign />
        </div>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#d1512d] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#005741] text-[14px] w-[430px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Juhi is a fast-paced creative professional who runs on specialty coffee. She visits Espresso Nook every morning before work and sometimes again in the evening.
        </p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[132.25px] items-start left-0 pl-[20px] pr-[21px] py-[20px] top-0 w-[471px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f5c7a9] border-r border-solid inset-0 pointer-events-none" />
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#d1512d] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Pain Points</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#005741] text-[14px] w-[431px]" style={{ fontVariationSettings: '"opsz" 9' }}>{`Hates waiting in line when she's running late. Wishes she could pre-order and walk straight to pick-up. Gets frustrated when her usual order isn't remembered.`}</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[132.25px] items-start left-[471px] p-[20px] top-0 w-[471px]" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#fee4d7] h-[132.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#fee4d7] content-stretch flex flex-col h-[26px] items-start left-[97.98px] px-[13px] py-[5px] rounded-[16777200px] top-[17px]" data-name="Text">
      <div aria-hidden className="absolute border border-[#dc7c62] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#005741] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Pre-order
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#fee4d7] content-stretch flex flex-col h-[26px] items-start left-[177.3px] px-[13px] py-[5px] rounded-[16777200px] top-[17px]" data-name="Text">
      <div aria-hidden className="absolute border border-[#dc7c62] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#005741] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Saved favourites
      </p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#fee4d7] content-stretch flex flex-col h-[26px] items-start left-[291.61px] px-[13px] py-[5px] rounded-[16777200px] top-[17px]" data-name="Text">
      <div aria-hidden className="absolute border border-[#dc7c62] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#005741] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Skip queue
      </p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#fee4d7] content-stretch flex flex-col h-[26px] items-start left-[379.27px] px-[13px] py-[5px] rounded-[16777200px] top-[17px]" data-name="Text">
      <div aria-hidden className="absolute border border-[#dc7c62] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#005741] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Quick reorder
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#ffeee6] h-[59px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5c7a9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-[24px] text-[#9b8f83] text-[10px] top-[22.5px] tracking-[0.25px] uppercase whitespace-nowrap">App needs:</p>
        <Text13 />
        <Text14 />
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[305.25px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container35 />
        <Container39 />
        <Container42 />
      </div>
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph17 />
        <ContainerMargin9 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph16 />
        <ContainerMargin8 />
        <Container33 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading10 />
        <Container26 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">User Insights</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Five recurring themes emerged across all user segments that shaped the product direction.
        </p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_8360)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_8360">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Time is the #1 constraint</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[27px] relative shrink-0 w-[822px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`“I only have 10 minutes before my meeting. I can't afford to wait in line.”`}</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[824_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#f5c7a9] text-[10px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start px-[21px] py-[17px] relative size-full">
        <ContainerMargin10 />
        <Container47 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 1.33333V2.66667" id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11caa380} id="Vector_3" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 1.33333V2.66667" id="Vector_4" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function ContainerMargin12() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Menu anxiety at the counter</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[27px] relative shrink-0 w-[822px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          “There are too many options and the barista is looking at me. I just panic-order.”
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[824_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#f5c7a9] text-[10px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex gap-[16px] items-start px-[21px] py-[17px] relative size-full">
        <ContainerMargin12 />
        <Container50 />
        <Text18 />
      </div>
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1d59db00} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function ContainerMargin14() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Reordering should be instant</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[27px] relative shrink-0 w-[822px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          “I get the same thing every day — why do I have to go through all the steps again?”
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[824_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[19px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#f5c7a9] text-[10px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex gap-[16px] items-start px-[21px] py-[17px] relative size-full">
        <ContainerMargin14 />
        <Container53 />
        <Text19 />
      </div>
    </div>
  );
}

function ContainerMargin13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container51 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function ContainerMargin16() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Pick-up timing matters</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[27px] relative shrink-0 w-[822px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          “I want my coffee ready the second I walk in, not 5 minutes before or after.”
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[824_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[19px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#f5c7a9] text-[10px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex gap-[16px] items-start px-[21px] py-[17px] relative size-full">
        <ContainerMargin16 />
        <Container56 />
        <Text20 />
      </div>
    </div>
  );
}

function ContainerMargin15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_8336)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p30be9df0} id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6H6.00667" id="Vector_3" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6H10.0067" id="Vector_4" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_8336">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function ContainerMargin18() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Delight builds loyalty</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[27px] relative shrink-0 w-[822px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`“The ones I keep coming back to just feel good to use. I can't explain it better than that.”`}</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[824_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph33 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[19px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#f5c7a9] text-[10px] whitespace-nowrap">05</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex gap-[16px] items-start px-[21px] py-[17px] relative size-full">
        <ContainerMargin18 />
        <Container59 />
        <Text21 />
      </div>
    </div>
  );
}

function ContainerMargin17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[469px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container45 />
        <ContainerMargin11 />
        <ContainerMargin13 />
        <ContainerMargin15 />
        <ContainerMargin17 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[526px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph24 />
        <Container44 />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading11 />
        <Container43 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">User Journey Map</p>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Mapping the current café experience revealed clear drop-off moments where anxiety and frustration peaked — all solvable with a pre-ordering flow.
        </p>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="[word-break:break-word] absolute h-[28px] left-0 top-[16px] w-[944px] whitespace-nowrap" data-name="Table Header">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#d1512d] text-[10px] top-[0.86px] tracking-[1px] uppercase">Stage</p>
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[16px] left-[225.67px] text-[#005741] text-[12px] text-center top-0">Visit Café</p>
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[16px] left-[452.62px] text-[#005741] text-[12px] text-center top-0">Order</p>
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[16px] left-[659.66px] text-[#005741] text-[12px] text-center top-0">Wait</p>
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[16px] left-[849.33px] text-[#005741] text-[12px] text-center top-0">Pick-up</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[112px] rounded-[10px] top-0 w-[227.898px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[114.27px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Walk in, look at menu board
      </p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[339.9px] rounded-[10px] top-0 w-[224.438px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[112.66px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Queue, decide, place order, pay
      </p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[564.34px] rounded-[10px] top-0 w-[190.328px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[96.02px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Stand aside, watch screen
      </p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[754.66px] rounded-[10px] top-0 w-[189.336px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[95.09px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Grab order, leave
      </p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[40.5px] left-0 top-[44px] w-[944px]" data-name="Table Row">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#dc7c62] text-[10px] top-[12px] tracking-[1px] uppercase whitespace-nowrap">Tasks</p>
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute bg-[#fee4d7] h-[40.5px] left-[112px] rounded-[10px] top-0 w-[227.898px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[114.62px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        😊 Excited
      </p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute bg-[#fee4d7] h-[40.5px] left-[339.9px] rounded-[10px] top-0 w-[224.438px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[113.21px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        😰 Anxious
      </p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute bg-[#fee4d7] h-[40.5px] left-[564.34px] rounded-[10px] top-0 w-[190.328px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[95.17px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        😤 Impatient
      </p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute bg-[#fee4d7] h-[40.5px] left-[754.66px] rounded-[10px] top-0 w-[189.336px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[94.84px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        😌 Relieved
      </p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[40.5px] left-0 top-[84.5px] w-[944px]" data-name="Table Row">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#dc7c62] text-[10px] top-[12px] tracking-[1px] uppercase whitespace-nowrap">Feeling</p>
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[112px] rounded-[10px] top-0 w-[227.898px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[113.98px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        No menu preview before arrival
      </p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[339.9px] rounded-[10px] top-0 w-[224.438px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[112.23px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Long queue, decision pressure
      </p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[564.34px] rounded-[10px] top-0 w-[190.328px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[94.91px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`No ETA, can't leave`}</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute bg-[#ffeee6] h-[40.5px] left-[754.66px] rounded-[10px] top-0 w-[189.336px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-[95.08px] text-[#38836e] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Wrong order risk
      </p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[40.5px] left-0 top-[125px] w-[944px]" data-name="Table Row">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#dc7c62] text-[10px] top-[12px] tracking-[1px] uppercase whitespace-nowrap">Pain Points</p>
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute bg-[rgba(219,255,61,0.25)] h-[40.5px] left-[112px] rounded-[10px] top-0 w-[227.898px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-[114.55px] text-[#005741] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Browse menu in-app
      </p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute bg-[rgba(219,255,61,0.25)] h-[40.5px] left-[339.9px] rounded-[10px] top-0 w-[224.438px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-[111.94px] text-[#005741] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Pre-order & pay ahead`}</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute bg-[rgba(219,255,61,0.25)] h-[40.5px] left-[564.34px] rounded-[10px] top-0 w-[190.328px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-[94.95px] text-[#005741] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Live order tracking
      </p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute bg-[rgba(219,255,61,0.25)] h-[40.5px] left-[754.66px] rounded-[10px] top-0 w-[189.336px]" data-name="Table Cell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-[94.94px] text-[#005741] text-[12px] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Notification when ready
      </p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[40.5px] left-0 top-[165.5px] w-[944px]" data-name="Table Row">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#dc7c62] text-[10px] top-[12px] tracking-[1px] uppercase whitespace-nowrap">Opportunity</p>
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[206px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[279px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph35 />
        <Table />
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading12 />
        <Container60 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">Design Process</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] w-[944px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          I followed a double-diamond process — diverging to understand the problem space broadly, then converging on the right solution through rapid iteration and user feedback.
        </p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] text-center tracking-[1px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap">Discover</p>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="relative shrink-0 w-[145.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#38836e] text-[12px] text-center w-[146px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Secondary research + user interviews
        </p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[110px] items-start left-0 p-[17px] rounded-[14px] top-0 w-[179.195px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph37 />
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] text-center tracking-[1px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.203px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap">Define</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="relative shrink-0 w-[145.203px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#38836e] text-[12px] text-center w-[146px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Personas, segmentation, journey maps
        </p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[110px] items-start left-[191.2px] p-[17px] rounded-[14px] top-0 w-[179.203px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph40 />
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] text-center tracking-[1px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap">Ideate</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="relative shrink-0 w-[145.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#38836e] text-[12px] text-center w-[146px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Concept sketches + flow generation
        </p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[110px] items-start left-[382.4px] p-[17px] rounded-[14px] top-0 w-[179.195px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph43 />
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] text-center tracking-[1px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.203px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap">Design</p>
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="relative shrink-0 w-[145.203px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#38836e] text-[12px] text-center w-[146px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Wireframes → prototypes → hi-fi
        </p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[110px] items-start left-[573.59px] p-[17px] rounded-[14px] top-0 w-[179.203px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph46 />
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] text-center tracking-[1px] whitespace-nowrap">05</p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap">Test</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="relative shrink-0 w-[145.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#38836e] text-[12px] text-center w-[146px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          User testing + design iterations
        </p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[110px] items-start left-[764.8px] p-[17px] rounded-[14px] top-0 w-[179.195px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph49 />
      <Paragraph50 />
      <Paragraph51 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function ContainerMargin19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph36 />
        <ContainerMargin19 />
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading13 />
        <Container61 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">Design System</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`A lightweight design system built to feel warm, artisanal, and fast — reflecting Espresso Nook's character while keeping interactions efficient.`}</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[20px] whitespace-nowrap">Colour Palette</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#005741] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-0 top-0" data-name="Container">
      <Container72 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Forest Green</p>
        <p className="leading-[11.25px]">#005741</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#38836e] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[68px] top-0" data-name="Container">
      <Container74 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Mid Green</p>
        <p className="leading-[11.25px]">#38836E</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#d1512d] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[136px] top-0" data-name="Container">
      <Container76 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Burnt Coral</p>
        <p className="leading-[11.25px]">#D1512D</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#dc7c62] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[204px] top-0" data-name="Container">
      <Container78 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Salmon</p>
        <p className="leading-[11.25px]">#DC7C62</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#f5c7a9] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[272px] top-0" data-name="Container">
      <Container80 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Peach</p>
        <p className="leading-[11.25px]">#F5C7A9</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[340px] top-0" data-name="Container">
      <Container82 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Light Peach</p>
        <p className="leading-[11.25px]">#FFEEE6</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#fee4d7] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[408px] top-0" data-name="Container">
      <Container84 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Cream</p>
        <p className="leading-[11.25px]">#FEE4D7</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#dbff3d] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center left-[476px] top-0" data-name="Container">
      <Container86 />
      <div className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9b8f83] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[11.25px] mb-0">Lime</p>
        <p className="leading-[11.25px]">#DBFF3D</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[84.5px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container73 />
      <Container75 />
      <Container77 />
      <Container79 />
      <Container81 />
      <Container83 />
      <Container85 />
    </div>
  );
}

function ContainerMargin20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container70 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[168.5px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Heading15 />
        <ContainerMargin20 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[20px] whitespace-nowrap">Typography</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Display — Gotham</p>
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[48px] relative shrink-0 text-[#005741] text-[48px] whitespace-nowrap">Aa</p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[32px] relative shrink-0 w-[410px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Used for headlines, hero text, and key callouts. Bold, confident, warm.
        </p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[177px] items-start left-0 p-[25px] rounded-[14px] top-0 w-[460px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph53 />
      <Paragraph54 />
      <Paragraph55 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#d1512d] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Body — Exo</p>
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic relative shrink-0 text-[#005741] text-[48px] tracking-[0.3516px] whitespace-nowrap">Aa</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#38836e] text-[14px] w-[410px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Used for body copy, labels, and UI text. Geometric, readable, approachable.
        </p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[177px] items-start left-[484px] p-[25px] rounded-[14px] top-0 w-[460px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph56 />
      <Paragraph57 />
      <Paragraph58 />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[177px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function ContainerMargin21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container88 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Heading16 />
        <ContainerMargin21 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[20px] whitespace-nowrap">Button Components</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#005741] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Order Now
        </p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 top-[2px]" data-name="Container">
      <Button1 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#9b8f83] text-[9px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#d1512d] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Add to Cart
        </p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[131.8px] top-[2px]" data-name="Container">
      <Button2 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#9b8f83] text-[9px] whitespace-nowrap">Accent</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#005741] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[26px] py-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          View Menu
        </p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[268.13px] top-0" data-name="Container">
      <Button3 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#9b8f83] text-[9px] whitespace-nowrap">Ghost</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#dbff3d] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005741] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Reorder ✓
        </p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[404.45px] top-[2px]" data-name="Container">
      <Button4 />
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#9b8f83] text-[9px] whitespace-nowrap">Highlight</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[69.5px] relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Container94 />
      <Container95 />
      <Container96 />
    </div>
  );
}

function ContainerMargin22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container92 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[153.5px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Heading17 />
        <ContainerMargin22 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a1814] text-[20px] whitespace-nowrap">Category Components</p>
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Menu category chips</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[#005741] content-stretch flex flex-col h-[38px] items-start left-0 px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#005741] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        All
      </p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[38px] items-start left-[59.89px] px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Pour Over
      </p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[38px] items-start left-[159.83px] px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Espresso
      </p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[38px] items-start left-[251.6px] px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Cold Brew
      </p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[38px] items-start left-[354.66px] px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Latte
      </p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[38px] items-start left-[425.42px] px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Iced
      </p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[38px] items-start left-[491.52px] px-[17px] py-[9px] rounded-[16777200px] top-0" data-name="Text">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Pastries
      </p>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
      <Text26 />
      <Text27 />
      <Text28 />
    </div>
  );
}

function ContainerMargin23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container100 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph59 />
        <ContainerMargin23 />
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[27px] relative shrink-0 w-[944px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Product card</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#1a1814] text-[36px] tracking-[0.3691px] whitespace-nowrap">☕</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#005741] h-[112px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text29 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Pour Over</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[18px] relative shrink-0 w-[150px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#dc7c62] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Single origin · Ethiopia
        </p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#d1512d] text-[14px] whitespace-nowrap">₹280</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[#005741] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[32px] relative shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative size-full">
        <Text30 />
        <Container107 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph61 />
        <Paragraph62 />
        <Container106 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-[#fee4d7] h-[208px] left-0 rounded-[16px] top-0 w-[176px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container104 />
        <Container105 />
      </div>
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container103 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[251px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Paragraph60 />
        <Container102 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[332px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container99 />
        <Container101 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[400px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Heading18 />
        <Container98 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph52 />
        <Container69 />
        <Container87 />
        <Container91 />
        <Container97 />
      </div>
    </div>
  );
}

function Section9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading14 />
        <Container68 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">App Screens</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[#9b8f83] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          High-fidelity screens covering the full ordering flow — from discovery to checkout confirmation.
        </p>
      </div>
    </div>
  );
}

function ImageEspressoNookHomeScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Home screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookHomeScreen} />
    </div>
  );
}

function Container113() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container114() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container115() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container116() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container112() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookHomeScreen />
        <Container113 />
        <Container114 />
        <Container115 />
        <Container116 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container112 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function ImageEspressoNookExploreScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Explore screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookExploreScreen} />
    </div>
  );
}

function Container119() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container120() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container121() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container122() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container118() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookExploreScreen />
        <Container119 />
        <Container120 />
        <Container121 />
        <Container122 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container118 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Explore</p>
      </div>
    </div>
  );
}

function ImageEspressoNookCategoryScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Category screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookCategoryScreen} />
    </div>
  );
}

function Container125() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container126() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container127() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container128() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container124() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookCategoryScreen />
        <Container125 />
        <Container126 />
        <Container127 />
        <Container128 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container124 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Category</p>
      </div>
    </div>
  );
}

function ImageEspressoNookProductScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Product screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookProductScreen} />
    </div>
  );
}

function Container131() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container132() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container133() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container134() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container130() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookProductScreen />
        <Container131 />
        <Container132 />
        <Container133 />
        <Container134 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container130 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Product</p>
      </div>
    </div>
  );
}

function ImageEspressoNookCustomiseScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Customise screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookCustomiseScreen} />
    </div>
  );
}

function Container137() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container138() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container139() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container140() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container136() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookCustomiseScreen />
        <Container137 />
        <Container138 />
        <Container139 />
        <Container140 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container136 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Customise</p>
      </div>
    </div>
  );
}

function ImageEspressoNookCartScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Cart screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookCartScreen} />
    </div>
  );
}

function Container143() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container144() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container145() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container146() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container142() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookCartScreen />
        <Container143 />
        <Container144 />
        <Container145 />
        <Container146 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container141() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container142 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Cart</p>
      </div>
    </div>
  );
}

function ImageEspressoNookCheckoutScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Checkout screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookCheckoutScreen} />
    </div>
  );
}

function Container149() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container150() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container151() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container152() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container148() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookCheckoutScreen />
        <Container149 />
        <Container150 />
        <Container151 />
        <Container152 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container148 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Checkout</p>
      </div>
    </div>
  );
}

function ImageEspressoNookConfirmationScreen() {
  return (
    <div className="h-[416px] relative shrink-0 w-[189px]" data-name="Image (Espresso Nook — Confirmation screen)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEspressoNookConfirmationScreen} />
    </div>
  );
}

function Container155() {
  return <div className="absolute bg-[#38836e] h-[40px] left-[193px] rounded-br-[16777200px] rounded-tr-[16777200px] top-[99px] w-[4px]" data-name="Container" />;
}

function Container156() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[83px] w-[4px]" data-name="Container" />;
}

function Container157() {
  return <div className="absolute bg-[#38836e] h-[28px] left-[-2px] rounded-bl-[16777200px] rounded-tl-[16777200px] top-[131px] w-[4px]" data-name="Container" />;
}

function Container158() {
  return <div className="absolute bg-[#005741] h-[16px] left-[65.5px] rounded-[16777200px] top-[13px] w-[64px]" data-name="Container" />;
}

function Container154() {
  return (
    <div className="bg-[#fee4d7] h-[422px] relative rounded-[32px] shrink-0 w-[195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-[inherit] size-full">
        <ImageEspressoNookConfirmationScreen />
        <Container155 />
        <Container156 />
        <Container157 />
        <Container158 />
      </div>
      <div aria-hidden className="absolute border-3 border-[#005741] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container153() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container154 />
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#38836e] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">Confirmation</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0 w-[1736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start px-[4px] relative size-full">
        <Container111 />
        <Container117 />
        <Container123 />
        <Container129 />
        <Container135 />
        <Container141 />
        <Container147 />
        <Container153 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col h-[465px] items-start overflow-clip py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container110 />
    </div>
  );
}

function ContainerMargin24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container109 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p1e459a00} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M1.875 3.75H13.125" id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pbf8bd58} id="Vector_3" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-[#fee4d7] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[32px] relative shrink-0 w-[262px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">{`Browse & Discover`}</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#38836e] text-[12px] w-[262px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Personalised home screen surfaces saved orders and seasonal specials above the fold.
        </p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[149px] items-start left-0 p-[21px] rounded-[14px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container161 />
      <Paragraph64 />
      <Paragraph65 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M6.25 1.25V2.5" id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.75 1.25V2.5" id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p314eca80} id="Vector_3" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M3.75 1.25V2.5" id="Vector_4" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container163() {
  return (
    <div className="bg-[#fee4d7] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[32px] relative shrink-0 w-[262px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">{`Customise & Order`}</p>
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#38836e] text-[12px] w-[262px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Granular customisation (milk, syrup, temperature) without cluttering the main view.
        </p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[149px] items-start left-[320px] p-[21px] rounded-[14px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container163 />
      <Paragraph66 />
      <Paragraph67 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p35cd1300} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pe81c400} id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-[#fee4d7] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[32px] relative shrink-0 w-[262px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">{`Track & Pick Up`}</p>
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#38836e] text-[12px] w-[262px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Live status with a push notification when the order is ready for collection.
        </p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute bg-[#ffeee6] content-stretch flex flex-col h-[149px] items-start left-[640px] p-[21px] rounded-[14px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container165 />
      <Paragraph68 />
      <Paragraph69 />
    </div>
  );
}

function Container159() {
  return (
    <div className="h-[149px] relative shrink-0 w-full" data-name="Container">
      <Container160 />
      <Container162 />
      <Container164 />
    </div>
  );
}

function ContainerMargin25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container159 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Paragraph63 />
        <ContainerMargin24 />
        <ContainerMargin25 />
      </div>
    </div>
  );
}

function Section10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative size-full">
        <Heading19 />
        <Container108 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[#1a1814] text-[30px] whitespace-nowrap">{`Outcomes & Reflection`}</p>
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[30px] text-center text-white whitespace-nowrap">4 → 2</p>
      </div>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[20px] relative shrink-0 w-[254px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f5c7a9] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Taps to complete order
        </p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute bg-[#005741] content-stretch flex flex-col h-[106px] items-start left-0 p-[25px] rounded-[14px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#38836e] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph70 />
      <Paragraph71 />
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[30px] text-center text-white whitespace-nowrap">91%</p>
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[20px] relative shrink-0 w-[254px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f5c7a9] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Task completion in usability testing
        </p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute bg-[#005741] content-stretch flex flex-col h-[106px] items-start left-[320px] p-[25px] rounded-[14px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#38836e] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph72 />
      <Paragraph73 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[36px] relative shrink-0 text-[30px] text-center text-white whitespace-nowrap">3 iter</p>
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[20px] relative shrink-0 w-[254px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f5c7a9] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Design rounds before handoff
        </p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute bg-[#005741] content-stretch flex flex-col h-[106px] items-start left-[640px] p-[25px] rounded-[14px] top-0 w-[304px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#38836e] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph74 />
      <Paragraph75 />
    </div>
  );
}

function Container167() {
  return (
    <div className="h-[106px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container168 />
        <Container169 />
        <Container170 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_8331)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667V7" id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333H7.00583" id="Vector_3" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_8331">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function ContainerMargin26() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container173 />
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">{`What I'd do differently`}</p>
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[27px] relative shrink-0 w-[628.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`I'd spend more time on the onboarding flow. First-time users needed more hand-holding than the MVP assumed.`}</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="relative shrink-0 w-[628.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph76 />
        <Paragraph77 />
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[21px] relative size-full">
        <ContainerMargin26 />
        <Container174 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #D1512D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="bg-[#fee4d7] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function ContainerMargin28() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container176 />
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#005741] text-[14px] whitespace-nowrap">Key learning</p>
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[27px] relative shrink-0 w-[847.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#38836e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          The reorder shortcut — the feature I almost cut for scope — turned out to be the highest-rated feature in testing. Convenience beats novelty every time.
        </p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="relative shrink-0 w-[847.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph78 />
        <Paragraph79 />
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="bg-[#ffeee6] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f5c7a9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative size-full">
        <ContainerMargin28 />
        <Container177 />
      </div>
    </div>
  );
}

function ContainerMargin27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container175 />
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[214px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container172 />
        <ContainerMargin27 />
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[352px] relative shrink-0 w-[944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container167 />
        <Container171 />
      </div>
    </div>
  );
}

function Section11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <Heading20 />
        <Container166 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] px-[40px] relative shrink-0 w-[1024px]" data-name="Main Content">
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </div>
  );
}

function MainContentMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1814] text-[24px] text-center whitespace-nowrap">Interested in learning more?</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#b5533c] content-stretch flex items-center left-[309.53px] px-[24px] py-[12px] rounded-[8px] top-px" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        View More Projects
      </p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex items-center left-[501.44px] px-[25px] py-[13px] rounded-[8px] top-0" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(26,24,20,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1814] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Get in Touch
      </p>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Link />
    </div>
  );
}

function ContainerMargin30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container179 />
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] px-[40px] relative shrink-0 w-[1024px]" data-name="Container">
      <Heading21 />
      <ContainerMargin30 />
    </div>
  );
}

function ContainerMargin29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container178 />
      </div>
    </div>
  );
}

function Section12() {
  return (
    <div className="bg-[#eae0d0] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[64px] pt-[65px] relative size-full">
        <ContainerMargin29 />
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9b8f83] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          © 2024 Shantanu. Built with curiosity.
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9b8f83] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Email
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9b8f83] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          LinkedIn
        </p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between max-w-[1280px] px-[40px] relative shrink-0 w-[1280px]" data-name="Container">
      <Paragraph80 />
      <Container181 />
    </div>
  );
}

function ContainerMargin31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container180 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(26,24,20,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] pt-[33px] relative size-full">
        <ContainerMargin31 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#faf6ef] min-h-[1203px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <Header />
        <Section />
        <Section1 />
        <Section2 />
        <MainContentMargin />
        <Section12 />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[1203px] relative shrink-0 w-[1672px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
      </div>
    </div>
  );
}

export default function UxResearcherPortfolioWebsite() {
  return (
    <div className="bg-[#faf6ef] content-stretch flex flex-col items-start relative size-full" data-name="UX Researcher Portfolio Website">
      <Body />
    </div>
  );
}
import svgPaths from "./svg-8ycnhent53";

function Frame1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#2f2f2f] text-[14px] text-ellipsis">12, North Avenue, CP Street, Sagamu</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="2">
      <div className="h-[14px] relative shrink-0 w-[11.408px]" data-name="map pin">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4083 14">
          <path clipRule="evenodd" d={svgPaths.p397b4800} fill="var(--fill-0, #81DD68)" fillRule="evenodd" id="map pin" />
        </svg>
      </div>
      <Frame1 />
      <div className="h-[5px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-15%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
            <path d={svgPaths.p3d2c9380} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
      <Component1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Left />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[16px] shrink-0">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #00FF59)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00ff59] text-[14px]">Open</p>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="1">
          <path d={svgPaths.p13a66580} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Frame4 />
      <Component />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[20px] px-[16px] relative w-full">
          <Frame6 />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#2f2f2f] text-[20px]">Dashboard</p>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#8e8e8e] text-[16px]">Welcome back! Here’s what’s happening with your store today</p>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center max-w-[300px] px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Message">
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
            <g id="Vector">
              <path d="M0.75 6.75H12.75Z" fill="var(--fill-0, #D9D9D9)" />
              <path d="M6.75 0.75V12.75Z" fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p2894bdc0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white">Add Item</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame7 />
      <Message />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black">Create discount code</p>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#585858] text-[10px]">Set up percentages or fixed amount discount</p>
    </div>
  );
}

function Message1() {
  return (
    <div className="bg-[#d4f5fd] content-stretch flex gap-[16px] items-start px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Message">
      <Frame11 />
      <div className="relative shrink-0 size-[8px]" data-name="Vector">
        <div className="absolute inset-[-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
            <path d={svgPaths.p1267a1c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black">Announcement Banner</p>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#585858] text-[10px]">Display site wide promotional messages</p>
    </div>
  );
}

function Message2() {
  return (
    <div className="bg-[#fde4d4] content-stretch flex gap-[16px] items-start px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Message">
      <Frame15 />
      <div className="relative shrink-0 size-[8px]" data-name="Vector">
        <div className="absolute inset-[-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
            <path d={svgPaths.p1267a1c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black">Bundle Offers</p>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#585858] text-[10px]">Create product bundles with special pricing</p>
    </div>
  );
}

function Message3() {
  return (
    <div className="bg-[#d4d6fd] content-stretch flex gap-[16px] items-start px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Message">
      <Frame16 />
      <div className="relative shrink-0 size-[8px]" data-name="Vector">
        <div className="absolute inset-[-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
            <path d={svgPaths.p1267a1c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Message1 />
      <Message2 />
      <Message3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black">Create Order</p>
    </div>
  );
}

function Message4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Message">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <path d={svgPaths.p3a7765e0} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black">View Analytics</p>
    </div>
  );
}

function Message5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Message">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <div className="relative shrink-0 size-[18px]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1a1ef1e0} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black">View Messages</p>
    </div>
  );
}

function Message6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Message">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[inherit]">
        <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-5.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
              <path d={svgPaths.p16841070} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Message4 />
      <Message5 />
      <Message6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 9.5">
            <path d={svgPaths.p10690000} id="Vector" stroke="var(--stroke-0, #4BBC2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#8e8e8e] text-[14px]">
        <span className="leading-[normal] text-[#4bbc2b]">+3.5%</span>
        <span className="leading-[normal]">{` This Month`}</span>
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[32px]">24</p>
      <Frame12 />
    </div>
  );
}

function Message7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Message">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[16px]">Orders Today</p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 9.5">
            <path d={svgPaths.p10690000} id="Vector" stroke="var(--stroke-0, #4BBC2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#8e8e8e] text-[14px]">
        <span className="leading-[normal] text-[#4bbc2b]">+3.5%</span>
        <span className="leading-[normal]">{` This Month`}</span>
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[32px]">₦45,200</p>
      <Frame24 />
    </div>
  );
}

function Message8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Message">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[16px]">Revenue Today</p>
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 9.5">
            <path d={svgPaths.p27dde380} id="Vector" stroke="var(--stroke-0, #F41414)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#8e8e8e] text-[14px]">
        <span className="leading-[normal] text-[#f41414]">-3.5%</span>
        <span className="leading-[normal]">{` This Month`}</span>
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[32px]">8</p>
      <Frame25 />
    </div>
  );
}

function Message9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Message">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[16px]">Active Orders</p>
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 9.5">
            <path d={svgPaths.p27dde380} id="Vector" stroke="var(--stroke-0, #F41414)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#8e8e8e] text-[14px]">
        <span className="leading-[normal] text-[#f41414]">-3.5%</span>
        <span className="leading-[normal]">{` This Month`}</span>
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[32px]">4.8</p>
      <Frame26 />
    </div>
  );
}

function Message10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Message">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2f2f2f] text-[16px]">Average Rating</p>
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Message7 />
      <Message8 />
      <Message9 />
      <Message10 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2f2f2f] text-[16px]">Recent Orders</p>
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#81dd68] text-[12px]">See all</p>
    </div>
  );
}

function ColumnTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px]">Order ID</p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">#FC-2349</p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">#FC-2348</p>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">#FC-2350</p>
    </div>
  );
}

function Values() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] relative shrink-0" data-name="Values">
      {[...Array(2).keys()].map((_, i) => (
        <Cell key={i} />
      ))}
      <Cell1 />
      <Cell2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[4px] relative shrink-0" data-name="Column">
      <ColumnTitle />
      <Values />
    </div>
  );
}

function ColumnTitle1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px]">Customer ID</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">user-2349</p>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">user-2348</p>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">user-2350</p>
    </div>
  );
}

function Values1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] relative shrink-0" data-name="Values">
      {[...Array(2).keys()].map((_, i) => (
        <Cell3 key={i} />
      ))}
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[4px] relative shrink-0" data-name="Column">
      <ColumnTitle1 />
      <Values1 />
    </div>
  );
}

function ColumnTitle2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px]">Product</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#8e8e8e] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[10px] shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[10px] text-ellipsis text-white">Customized</p>
    </div>
  );
}

function Cell6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center py-[2px] relative shrink-0 w-full" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#2f2f2f] text-[12px] text-ellipsis">1 Chicken Shawarma</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#8e8e8e] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[10px] shrink-0">
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[10px] text-ellipsis text-white">Customized</p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center py-[2px] relative shrink-0 w-full" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#2f2f2f] text-[12px] text-ellipsis">{`1 Jollof Rice and Chicken, 1 Fanta, 2 Ice Cream  `}</p>
      <Frame3 />
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex h-[32px] items-center overflow-clip py-[2px] relative shrink-0 w-full" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#2f2f2f] text-[12px] text-ellipsis">5 Fanta, 5 Chicken Shawarma, 5 Sweet Potatoe and Egg, 5 Suya Stick</p>
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex h-[32px] items-center py-[2px] relative shrink-0 w-full" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] overflow-hidden relative shrink-0 text-[#2f2f2f] text-[12px] text-ellipsis">2 Suya Stick, 1 Egg Sandwich</p>
    </div>
  );
}

function Values2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Values">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] relative w-full">
          <Cell6 />
          <Cell7 />
          <Cell8 />
          <Cell9 />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-h-px min-w-px py-[4px] relative" data-name="Column">
      <ColumnTitle2 />
      <Values2 />
    </div>
  );
}

function ColumnTitle3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function PriorityBadge() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[2px] relative rounded-[14px] shrink-0" data-name="Priority Badge">
      <div aria-hidden="true" className="absolute border border-[#5e9abc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1e98df] text-[10px] tracking-[0.05px]">In Progress</p>
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <PriorityBadge />
    </div>
  );
}

function PriorityBadge1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[2px] relative rounded-[14px] shrink-0" data-name="Priority Badge">
      <div aria-hidden="true" className="absolute border border-[#90eebc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#18f37e] text-[10px] tracking-[0.05px]">Completed</p>
    </div>
  );
}

function Cell11() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <PriorityBadge1 />
    </div>
  );
}

function PriorityBadge2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[2px] relative rounded-[14px] shrink-0" data-name="Priority Badge">
      <div aria-hidden="true" className="absolute border border-[#ea7c72] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#ee2f1d] text-[10px] tracking-[0.05px]">Pending</p>
    </div>
  );
}

function Cell12() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <PriorityBadge2 />
    </div>
  );
}

function Values3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] relative shrink-0" data-name="Values">
      <Cell10 />
      <Cell11 />
      <Cell10 />
      <Cell12 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[4px] relative shrink-0" data-name="Column">
      <ColumnTitle3 />
      <Values3 />
    </div>
  );
}

function ColumnTitle4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px]">Order Created</p>
        </div>
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">12s ago</p>
    </div>
  );
}

function Cell14() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">5 mins ago</p>
    </div>
  );
}

function Cell15() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">18 mins ago</p>
    </div>
  );
}

function Cell16() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">30 mins ago</p>
    </div>
  );
}

function Values4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] relative shrink-0" data-name="Values">
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[4px] relative shrink-0" data-name="Column">
      <ColumnTitle4 />
      <Values4 />
    </div>
  );
}

function ColumnTitle5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px]">Order Closed</p>
        </div>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">---</p>
    </div>
  );
}

function Cell18() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Cell">
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2f2f2f] text-[12px]">2s ago</p>
    </div>
  );
}

function Values5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] relative shrink-0" data-name="Values">
      <Cell17 />
      <Cell18 />
      <Cell17 />
      <Cell17 />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[4px] relative shrink-0" data-name="Column">
      <ColumnTitle5 />
      <Values5 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function Message11() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Message">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[16px] relative w-full">
          <Frame27 />
          <Table />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Message11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[36px] items-start px-[16px] py-[24px] relative size-full">
        <Frame9 />
        <Frame8 />
        <Frame14 />
        <Frame13 />
      </div>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Header />
      <Frame />
    </div>
  );
}
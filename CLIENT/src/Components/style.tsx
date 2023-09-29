const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full",

  heading3: 
    "mt-5 font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[24.8px] w-full",

  paragraph:
    "font-poppins text-dimWhite text-[18px] leading-[30.8px] font-thin",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout  = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;

export const features = [
  {
    id: "feature-1",
    title: "Enhancing Security",
    content:
      "To detect fraudulent transactions, behaviours & preventing hacks by analyzing user-behaviour patterns.",
  },
  {
    id: "feature-2",
    title: "Reducing Transaction Fees",
    content:
    "By predecting optional gas price for a transaction based on current network conditions.",
  },
  {
    id: "feature-3",
    title: "Personalized Experience",
    content:
    "Personalized advisory & recommendations based on user preferences and past behaviour.",
  },
];

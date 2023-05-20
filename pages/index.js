import "react-slideshow-image/dist/styles.css";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";
import Hero from "../components/Heros/HeroHome";
import LearnMore from "../components/Sections/LearnMore";
import Benefits from "../components/Sections/Benefits";
import KeyBenefits from "../components/Sections/KeyBenefits";
import WhatsPossible from "../components/Sections/WhatsPossible";
import Testimonial from "../components/Sections/Testimonial";
import KeyApplications from "../components/Sections/KeyApplications";
import TwoColText from "../components/Sections/Columns/TwoColText";
import TwoColSlider from "../components/Sections/Columns/TwoColSlider";
import Features from "../components/Sections/Features";
import CustomHeader from "../components/Headers/CustomHeader";


const Home = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
        <CustomHeader />
        <main className="flex w-full flex-1 flex-col items-center ">
          <section
            className="h-[1vh] md:h-[5vh] lg:h-[25vh] 
                            lg:mt-[-90px] bg-athinia-dark min-w-full"
          >
            <div className="bg-athinia-dark">
              <p>&nbsp;</p>
            </div>
          </section>
          <Hero />
          <LearnMore
           bgClass={'h-[320px] w-[320px] md:h-[350px] md:w-[350px]  lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px]  mt-30 md:ml-5 lg:ml-0'}
          bottomBlue="bottom-[20px] lg:bottom-[-100px] md:bottom-[-200px]"
          rightBlue="right-[0%] lg:right-[3%]"
          secondColClass=""
            subText={true}
            text={
              "With Athinia™, material suppliers and device makers can share and analyze data, all while ensuring stakeholders maintain control of their intellectual property."
            }
          />
          <Features/>
          <Benefits />
          <KeyBenefits />
          <WhatsPossible />
          <Testimonial />
          <KeyApplications />
          <TwoColText />
          <TwoColSlider />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

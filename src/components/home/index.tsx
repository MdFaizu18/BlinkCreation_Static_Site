import HeroArea from "./HeroArea";
import ServiceArea from "./ServiceArea";
import ContactArea from "./ContactArea";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterOne from "../../layouts/footers/FooterOne";
import ScrollTop from "../common/ScrollTop";
import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";
import TopFooterLayer from "../../layouts/footers/TopFooterLayer";
import ReachUsOut from "./ReachUsOut";
import AboutArea from "./AboutArea";


export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <AboutArea />
            <ReachUsOut/>
            {/* <TestimonoalArea /> */}
            <ServiceArea />
            {/* <BrandArea /> */}
            {/* <AboutArea /> */}
            {/* <PortfolioArea /> */}
            <ContactArea />
            {/* <BlogSection/> */}
            <TopFooterLayer />
          </main>
          <FooterOne />
        </div>
      </div>
      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  );
}

import HeroArea from "./HeroArea";
import BrandArea from "./BrandArea";
import AboutArea from "./AboutExtraArea";
import ServiceArea from "./ServiceArea";
import PortfolioArea from "./PortfolioArea";
import TestimonoalArea from "./TestimonoalArea";
import BlogArea from "./AboutArea";
import ContactArea from "./ContactArea";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterOne from "../../layouts/footers/FooterOne";
import ScrollTop from "../common/ScrollTop";
import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";
import TopFooterLayer from "../../layouts/footers/TopFooterLayer";

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BlogArea />
            <TestimonoalArea />
            <ServiceArea />
            {/* <BrandArea /> */}
            {/* <AboutArea /> */}
            {/* <PortfolioArea /> */}
            <ContactArea />
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

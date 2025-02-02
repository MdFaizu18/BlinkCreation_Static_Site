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
import StudentLayer from "./StudentLayer";
import NewTestimonial from "./NewTestimonial";

export default function Home() {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroArea />
        <AboutArea />
        <ReachUsOut />
        <ServiceArea />
        <StudentLayer />
        <NewTestimonial />
        {/* <TestimonoalArea/> */}
        <ContactArea />
        <div
          onClick={() => (
            (window.location.href =
              "https://mail.google.com/mail/?view=cm&fs=1&to=blinkcreationsofficial@gmail.com"),
            "_blank"
          )}
          style={{ cursor: "pointer" }}
        >
          <TopFooterLayer />
        </div>

        <FooterOne />
      </main>

      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  );
}

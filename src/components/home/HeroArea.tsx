export default function HeroArea() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href ? href.substring(1) : "";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className="main-hero-area py-48">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" wow fadeInUp text-center delay-0-2s">
                <h2 className="font-medium lg:text-[105px] md:text-[80px] text-[60px] uppercase text-center text-[#070707]">
                  You Dream It, We Craft It
                </h2>
                <h3 className="font-normal lg:text-[55px] md:text-[50px] text-[40px]  uppercase text-center text-gray-400">
                  Innovative Solutions for Your Digital and Creative Needs
                </h3>
                <a
                  className="theme-btn mt-6"
                  href="#contact"
                  onClick={handleSmoothScroll}
                >
                  Reach Out Us
                </a>
              </div>
            </div>
          </div>

          {/* <div className="container">
            <div className="flex justify-evenly">
              <div className="col-lg-3 pt-30">
                <div className="hero-content wow fadeInUp delay-0-2s">
                  <div className="clienti-reviews">
                    <ul className="clienti-profile">
                      <li>
                        <img
                          className="img-fluid"
                          src="assets/images/avatar/01.jpg"
                          alt="client"
                        />
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src="assets/images/avatar/02.jpg"
                          alt="client"
                        />
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src="assets/images/avatar/03.jpg"
                          alt="client"
                        />
                      </li>
                    </ul>
                    <div className="reviews">
                      100+ reviews <span>(4.96 of 5)</span>
                      <p>Five-star reviews from my esteemed clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-lg-3 pt-30">
                <div className="hero-content wow fadeInUp delay-0-4s">
                  <p>
                    Hi, I’m Walker, a passionate UX Designer dedicated to
                    creating user-friendly digital experiences.
                  </p>
                  <a className="theme-btn" href="">
                    Get In touch
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

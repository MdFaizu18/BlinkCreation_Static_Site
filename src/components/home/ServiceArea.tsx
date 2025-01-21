export default function ServiceArea() {
  return (
    <>
      <section
        id="service"
        className=" pt-24 px-4 md:px-8 lg:px-16  bg-[#070707]"
      >
        <div className="container px-16">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-white wow fadeInUp delay-0-2s">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Website Creation */}
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Web Development</h4>
                <p>
                  Creating stunning websites tailored to your needs, including
                  static, dynamic, and e-commerce solutions. From development to
                  managing and maintaining, we've got you covered.
                </p>
              </div>
            </div>

            {/* Landing Page */}
            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Landing Page Re-creation</h4>
                <p>
                  Revamp your landing pages with a fresh, engaging design that
                  converts visitors into loyal customers.
                </p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Digital Marketing</h4>
                <p>
                  From social media management to SEO, SEM, influencer
                  marketing, and personal branding, we help you amplify your
                  digital presence and drive results.
                </p>
              </div>
            </div>

            {/* Video Creation */}
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Video Creation</h4>
                <p>
                  Enhance your brand with high-quality video edits, from reels
                  and YouTube videos to promotional content, 2D/3D VFX, and
                  captivating thumbnails.
                </p>
              </div>
            </div>

            {/* Design Services */}
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-1s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>05</h5>
                <h4>Graphic Design</h4>
                <p>
                  We create impactful designs, including illustrations,
                  brochures, posters, logos, event proposals, catalogs, and
                  2D/3D designs that leave a lasting impression.
                </p>
              </div>
            </div>

            {/* Student Hubs */}
            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-1-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>06</h5>
                <h4>Student Services</h4>
                <p>
                  Empowering students with resume building, project creation
                  (mini and final) with documentation, portfolio creation, and
                  interview preparation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

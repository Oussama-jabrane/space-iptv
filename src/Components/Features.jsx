import React from "react";
import PremiumApplication from "../assets/premium_application.png";
import PayPal from "../assets/paypal.png";
import RealTimeDelivery from "../assets/realtimedelivery.png";
import LiveSupport from "../assets/livesupport.png";
import StrongServers from "../assets/strongservers.png";
import HugePackages from "../assets/hugepackages.png";
import HugeDiscounts from "../assets/hugediscounts.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

function Features() {
  return (
    <div
      style={{
        maxHeight: "250vh",
      }}
      id="features"
      className="features-container"
    >
      <div className="intro">
        <h1>Discover Space IPTV</h1>
        <h3>
          Well...we are the best choice for you, here some of benefits of using
          our service:
        </h3>
      </div>
      <div className="features">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="feature">
              <img src={PayPal} className="cover-photo" />
              <div className="title">
                <h1>Secure & Safe Payments</h1>
              </div>
              <div className="description">
                <p>
                  Because We Trust In Our Servers, We Use Paypal Payment With
                  0.1% Refund/cases
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature">
              <img src={RealTimeDelivery} className="cover-photo" />
              <div className="title">
                <h1>Real-time Delivery</h1>
              </div>
              <div className="description">
                <p>
                  Our Team Has Developed Space IPTV For Better Use & Quick
                  Delivery With Instant Response.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature">
              <img src={LiveSupport} className="cover-photo" />
              <div className="title">
                <h1>24/7 Live Support</h1>
              </div>
              <div className="description">
                <p>
                  Space IPTV Provides 24/7 Online Private Customer Service With
                  Expert Team.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature">
              <img src={StrongServers} className="cover-photo" />
              <div className="title">
                <h1>Strong Servers</h1>
              </div>
              <div className="description">
                <p>
                  Space IPTV Provide Best And Strong Tested Server For Your
                  Devices
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature">
              <img src={HugePackages} className="cover-photo" />
              <div className="title">
                <h1>Huge Packages</h1>
              </div>
              <div className="description">
                <p>
                  We offer +19000 worldwide channels 4K & FHD & HD with +250
                  premium adults channels and +90000 movies/series
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature">
              <img src={HugeDiscounts} className="cover-photo" />
              <div className="title">
                <h1>Huge Discounts</h1>
              </div>
              <div className="description">
                <p>
                  We offer premium servers at over 50%+ off compared to the
                  actual price.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature">
              <img src={PremiumApplication} className="cover-photo" />
              <div className="title">
                <h1>Premium Application</h1>
              </div>
              <div className="description">
                <p>
                  We Provide +10 Premium Applications with different device
                  platform (Samsung, Android, LG, IOS...)
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Features;
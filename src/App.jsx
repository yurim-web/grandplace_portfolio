import MainSwiper from "./components/common/MainSwiper";
import "./components/css/common.css";
import "./components/css/page1.css";
import { useEffect, useRef } from "react";

import Video_page from "./components/layout/Video_page";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "./components/layout/Page1";
import Page2 from "./components/layout/Page2";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page1",
          start: "top top", // 애니메이션 시작 위치
          end: "bottom bottom", // 애니메이션 종료 위치
        },
      })
      .to(".img1", {
        y: -20, // 이미지가 위로 30px 이동
        repeat: -1, // 반복
        yoyo: true, // 위아래로 왔다갔다
        ease: "bounce.out", // 바운스 이징 적용
        duration: 2, // 애니메이션 지속 시간을 5초로 설정 (천천히)
      })
      .to(".img2", {
        y: 20, // 이미지가 아래로 20px 이동
        repeat: -1, // 반복
        yoyo: true, // 위아래로 왔다갔다
        ease: "bounce.out", // 바운스 이징 적용
        duration: 2, // 애니메이션 지속 시간을 5초로 설정 (천천히)
      });
  }, []);

  return (
    <div className="App">
      <section style={{ width: "100vw", height: "100vh" }}>
        <MainSwiper />
      </section>
      <Video_page />

      <section
        className="page1"
        style={{
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          padding: "90px 0px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Page1 />
      </section>

      <section
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "200px",
          alignItems: "center",
        }}
      >
        <Page2 />
      </section>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "800px 0px",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#474f6f",
            fontSize: "50px",
            fontFamily: "NotoSerif",
            fontWeight: "lighter",
            letterSpacing: "7px",
            textAlign: "center",
          }}
        >
          Special offers
        </h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "300px", position: "relative" }}
              src="pageimg_7.jpg"
              alt=""
            />
            <img
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "999px",
                position: "absolute",

                zIndex: 5,
              }}
              src="pageimg_7_1.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontFamily: "NotoSerif",
            }}
          >
            <p>Indoor Pool</p>
            <p>Outdoor Spa</p>
            <p>BBQ</p>
            <p>Goose Bedding</p>
            <p>Private House</p>
          </div>
          <div style={{ display: "flex" }}>
            <img src="pageimg_7.jpg" alt="" />
            <img src="pageimg_7_1.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

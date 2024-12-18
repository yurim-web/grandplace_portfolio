import MainSwiper from "./components/common/MainSwiper";
import "./components/css/common.css";
import "./components/css/page1.css";

import Video_page from "./components/layout/Video_page";
function App() {
  return (
    <div className="App">
      <section style={{ width: "100vw", height: "100vh" }}>
        <MainSwiper />
      </section>
      <Video_page />

      <section
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
        <h1
          style={{
            color: "#474f6f",
            fontSize: "150px",
            fontFamily: "NotoSerif",
            fontWeight: "lighter",
            letterSpacing: "7px",
            position: "relative",
          }}
        >
          Groundplace
        </h1>
        {/* <p style={{ fontSize: "20px", position: "absolute", right: "425px" }}>
          private poolvilla
        </p> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              transform: "rotate(270deg)",
              textAlign: "center",
              position: "absolute",
              left: "7%",
              fontSize: "20px",
              zIndex: 5,
            }}
          >
            <p style={{ fontSize: "30px", fontWeight: 600 }}>
              Groundplace private space
            </p>
            <p>It's a place where we are happy</p>
          </div>
          <div className="box">
            <img src="/pageimg_1.jpg" alt="" />
          </div>
          <img
            style={{
              position: "absolute",
              left: "5%",
              marginTop: "500px",
              width: "350px",
            }}
            src="/leaf.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default App;

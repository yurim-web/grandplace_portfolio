const Video_page = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px 0px",
        maxWidth: "1040px",
        margin: "0 auto",
        textAlign: "center",
        gap: "60px",
      }}
    >
      <h1
        style={{
          color: "#6e7ea5",
          fontWeight: 600,
          letterSpacing: "8px",
          fontSize: "30px",
        }}
      >
        [ GROUND PLACE ]
      </h1>
      <video muted autoPlay loop src="jeju.mp4"></video>
    </section>
  );
};

export default Video_page;

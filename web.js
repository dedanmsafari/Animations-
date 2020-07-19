let rotatingSquare = document.getElementById("web-animation").animate(
  [
    {
      backgroundColor: "#0f0",
      opacity: 1.0,
      transform: "rotate(0deg) translate3D(0,0,0)",
   
    },
    { backgroundColor: "#fff", opacity: 0.3 },
    {
      backgroundColor: "#00f",
      opacity: 1.0,
      transform: "rotate(360deg) translate3D(0,0,0)",
   
    },
  ],
  { duration: 3000, iterations: Infinity,easing:'ease-in-out' }
);

import "../Styling/reset.css";
import "../Styling/style.css";
import "../Styling/nav.css";
import "../Styling/footer.css";
import "./nav_footer.js";

const Abby = "VSfYwtCr0x0";
const Aileen = "nesjwfajFIM";
const Danny = "OCY7pB0Q4jc";
const Jacob = "pt0aDFxYEfM";
const Veer = "CvjY9WDI73w";

const videos = [Abby, Aileen, Danny, Jacob, Veer];
const videoWrapper = document.querySelector(".video-wrapper");
for (const video of videos) {
  console.log(video);
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + video + "?controls=0";
  videoWrapper.appendChild(iframe);
}

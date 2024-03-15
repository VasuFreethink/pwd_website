import AOS from "aos";
import "aos/dist/aos.css";

export default async ({ app }) => {
  // Wait for the app to be ready
  await app.waitForAos;

  // Initialize AOS
  AOS.init();
};

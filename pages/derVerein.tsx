import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const derVerein = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">Der Verein</div>
      <Footer />
    </div>
  );
};

export default derVerein;

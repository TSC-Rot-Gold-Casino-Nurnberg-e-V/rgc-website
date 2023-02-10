import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Kontakt = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">Kontakt</div>
      <Footer />
    </div>
  );
};

export default Kontakt;

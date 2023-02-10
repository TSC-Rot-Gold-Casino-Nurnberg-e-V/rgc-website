import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Angebot = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">Angebot</div>
      <Footer />
    </div>
  );
};

export default Angebot;

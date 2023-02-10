import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Veranstaltungen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">Veranstaltungen</div>
      <Footer />
    </div>
  );
};

export default Veranstaltungen;

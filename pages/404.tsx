import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-stone-50 grow flex items-center">
        <main className="mx-auto max-w-3xl bg-stone-50 grow p-6 md:p-8">
          404 - Sorry bro!
        </main>
      </div>
      <Footer />
    </div>
  );
}

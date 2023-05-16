import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-base-500">
      <main className="mx-auto max-w-3xl grow bg-base-500 p-6 md:p-8">
        <ContactForm />
      </main>
    </div>
  );
}

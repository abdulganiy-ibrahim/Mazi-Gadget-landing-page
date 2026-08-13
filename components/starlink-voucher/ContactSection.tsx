import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  return (
    <section className="bg-dark-bakground px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch md:gap-12">
        <div className="md:order-2">
          <ContactInfo />
        </div>
        
        <div className="md:order-1">
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
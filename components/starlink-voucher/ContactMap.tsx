const ADDRESS = "Dama Junction, along FUTMinna main campus, Minna, Niger State";

export default function ContactMap() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

  return (
    <div className="glow-border h-70 w-full overflow-hidden rounded-3xl border border-border sm:h-90 md:h-full md:min-h-105">
      <iframe
        src={mapSrc}
        title="Mazi Gadgets location map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
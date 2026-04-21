export default function PartnerMarquee() {
  const partners = ["Partner.co", "Nutrifii", "Lucim", "Slenderiiz", "Puritii"];
  
  return (
    <div className="py-16 text-center">
      <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8">
        In Partnership With Leading Global Innovators
      </p>
      <div className="flex justify-center gap-12 md:gap-24 flex-wrap px-8">
        {partners.map((partner) => (
          <span key={partner} className="font-serif text-2xl text-gray-800 font-medium">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
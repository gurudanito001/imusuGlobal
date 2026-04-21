export default function Footer() {
  return (
    <footer className="py-12 text-center text-sm bg-[#F4F6F5]">
      <div className="font-serif italic font-semibold text-[#0f3b21] text-lg mb-6">
        The Editorial Wellness Collective
      </div>
      <div className="flex justify-center gap-6 text-gray-500 mb-8">
        <a href="#" className="hover:text-[#0f3b21]">Affiliate Disclosure</a>
        <a href="#" className="hover:text-[#0f3b21]">Privacy Policy</a>
        <a href="#" className="hover:text-[#0f3b21]">Partner Program</a>
        <a href="#" className="hover:text-[#0f3b21]">Terms of Service</a>
      </div>
      <p className="text-xs text-gray-400">
        © 2024 The Editorial Wellness Collective. Trust is our primary ingredient.
      </p>
    </footer>
  );
}
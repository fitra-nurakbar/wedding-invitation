import Countdown from "@/components/Countdown";

export default function Cover() {
  return (
    <section id="cover" className="flex items-center justify-center">
      <div className="text-center px-6 animate-fade-in">
        <p className="text-sm font-roboto font-light tracking-widest mb-3">
          The Wedding Of
        </p>
        <h2 className="text-4xl font-yrsa mb-10">
          Ifha & Jefri
        </h2>
        <p className="text-lg tracking-widest">Minggu, 29 Maret 2026</p>
        <h3 className="font-roboto font-light tracking-widest text-lg my-3">
          SAVE THE DATE
        </h3>
        {/* CLIENT COMPONENT */}
        <Countdown />
      </div>
    </section>
  );
}

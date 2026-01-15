import Countdown from "@/components/Countdown";
import FadeUp from "./animation/FadeUp";

export default function Cover() {
  return (
    <section id="cover" className="container flex flex-col items-center justify-center">
      <div className="text-center animate-fade-in">
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
      <div className="flex flex-col items-center justify-between text-center bg-primary px-5 py-10 h-125">
        <div className="text-white flex justify-center items-center">
          <h3 className='text-7xl font-cinzel mb-5'>I</h3>
          <h3 className='text-7xl font-cinzel mt-5'>J</h3>
        </div>
        <FadeUp>
          <p className="text-sm text-white">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
            <br />
            <br />
            (QS. Ar-Rum: 21)
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-28 grid md:grid-cols-[1.4fr,1fr] gap-10 items-start">

        <div className="relative">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            Pablo Santana Suárez
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-neutral-300 relative">
            Full Stack Developer
          </h2>
          <div className="mt-5 h-1 w-full bg-purple-500 rounded"></div>
        </motion.div>

        <p className="mt-6 text-lg text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
          Soy un <span className="font-semibold">Full Stack Developer Junior</span> al que le encanta aprender y crecer cada día en el mundo del desarrollo web.  
          En el <span className="font-semibold">backend</span> trabajo creando APIs <span className="font-semibold">REST</span> y 
          <span className="font-semibold"> GraphQL</span> con tecnologías como 
          <span className="ml-1 font-semibold">NestJS</span>, 
          <span className="ml-1 font-semibold">Laravel</span> y 
          <span className="ml-1 font-semibold">Docker</span>.  
          En el <span className="font-semibold">frontend</span>, disfruto construyendo interfaces modernas y dinámicas con 
          <span className="ml-1 font-semibold">React</span>.  
          Siempre con ganas de explorar nuevas tecnologías y mejorar mis habilidades para aportar más valor en cada proyecto.
        </p>




          <div className="mt-10 inline-flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-lime-300/50 bg-white/5 px-5 py-3 text-base font-medium text-white shadow-[0_0_40px_-15px] shadow-lime-300/40 hover:shadow-lime-300/60 transition"
            >
              <Mail className="h-5 w-5" />
              Contact Me
              <span className="ml-2 block h-[2px] w-16 bg-lime-300/90 group-hover:w-24 transition-[width]" />
            </a>
          </div>

          {/* Tarjeta tech */}
          <div className="mt-10 max-w-md rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm uppercase tracking-wide text-neutral-300">Stack actual</div>
            <div className="mt-3 text-neutral-200">APIs REST / GraphQL • Docker • CI/CD</div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  imageUrl?: string;
  name: string;
  subtitle: string;
}

export default function Hero({ imageUrl, name, subtitle }: Props) {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center"
    >
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 [mask-image:linear-gradient(to_bottom,black,black,transparent)]" />


      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow">
          {name}
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-neutral-200 drop-shadow">
          {subtitle}
        </h2>
        <div className="mx-auto mt-3 h-1 w-44 bg-purple-500" />

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-white text-neutral-900 font-medium shadow hover:bg-neutral-200 transition"
          >
            Sobre mi
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-neutral-900 font-medium shadow hover:bg-neutral-200 transition"
          >
            Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}

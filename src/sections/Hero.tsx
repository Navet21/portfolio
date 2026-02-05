interface Props {
  imageUrl?: string;
  name: string;
  title: string;
  tagline: string;
}

export default function Hero({ imageUrl, name, title, tagline }: Props) {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/50 [mask-image:linear-gradient(to_bottom,black,black,transparent)]" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow">
          {name}
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white drop-shadow">
          {title}
        </h2>

        <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>

        <div className="mx-auto mt-6 h-1 w-44 bg-purple-500" />

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-neutral-900 font-medium shadow hover:bg-neutral-200 transition"
          >
            Ver proyectos en producción
          </a>

          <a
            href="https://github.com/Navet21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/30 text-white font-medium hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

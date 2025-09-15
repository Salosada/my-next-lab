/*
export default function Home() {
  return <h1>¡Cambio automático con Vercel 🔄!</h1>;
}
*/

/*
  export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{process.env.NEXT_PUBLIC_MESSAGE}</h1>
      <p>
        Bienvenido a mi primera app con <strong>Next.js</strong> 🚀
      </p>
      <ul>
        <li>✅ Deploy en Vercel</li>
        <li>✅ Variables de entorno</li>
        <li>✅ Rutas dinámicas</li>
      </ul>
      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
        © {new Date().getFullYear()} - Proyecto de prueba
      </footer>
    </main>
  );
}
*/

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <section className="text-center p-10">
        <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          {process.env.NEXT_PUBLIC_MESSAGE}
        </h1>
        <p className="text-lg mb-6">
          Bienvenido a mi primera app con <span className="font-semibold">Next.js</span> 🚀
        </p>
        <ul className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg space-y-2 text-left inline-block">
          <li>✅ Deploy en Vercel</li>
          <li>✅ Variables de entorno</li>
          <li>✅ Rutas dinámicas</li>
        </ul>
      </section>
      <footer className="mt-auto pb-6 text-sm text-white/80">
        © {new Date().getFullYear()} - Proyecto de prueba ✨
      </footer>
    </main>
  );
}

/*
export default function Home() {
  return <h1>¡Cambio automático con Vercel 🔄!</h1>;
}
*/
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


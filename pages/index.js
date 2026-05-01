import Link from "next/link";

const PRODUCTS = [
  { id: 1, name: "Widget Pro", price: 29.99, description: "Professional-grade widget for power users." },
  { id: 2, name: "Gadget Lite", price: 9.99, description: "Lightweight gadget for everyday use." },
  { id: 3, name: "Super Bundle", price: 49.99, description: "Everything you need in one package." },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 800, margin: "40px auto", padding: "0 16px" }}>
      <h1>Dogfood E-commerce — Stack 6</h1>
      <p>Shop our products below. Fast shipping. Zero hassle.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
        {PRODUCTS.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
            <h2 style={{ fontSize: 18 }}>{p.name}</h2>
            <p style={{ color: "#555" }}>{p.description}</p>
            <p style={{ fontWeight: "bold" }}>${p.price.toFixed(2)}</p>
            <Link href={`/checkout?id=${p.id}`}>
              <button style={{ padding: "8px 16px", background: "#0070f3", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}>
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

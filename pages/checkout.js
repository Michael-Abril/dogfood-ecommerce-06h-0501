import { useRouter } from "next/router";

export default function Checkout() {
  const { query } = useRouter();
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 500, margin: "40px auto", padding: "0 16px" }}>
      <h1>Checkout</h1>
      <p>Product ID: {query.id || "N/A"}</p>
      <form onSubmit={(e) => { e.preventDefault(); alert("Payment placeholder — order placed!"); }}>
        <div style={{ marginBottom: 12 }}>
          <label>Card Number<br />
            <input type="text" placeholder="4242 4242 4242 4242" style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Email<br />
            <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 24px", background: "#0070f3", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", width: "100%" }}>
          Place Order (Placeholder)
        </button>
      </form>
    </main>
  );
}

export default function handler(req, res) {
  res.status(200).json({ status: "healthy", service: "dogfood-ecommerce", stack: 6 });
}

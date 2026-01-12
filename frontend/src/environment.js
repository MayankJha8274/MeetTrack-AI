const server =
  import.meta?.env?.VITE_BACKEND_URL ||
  process.env.REACT_APP_BACKEND_URL ||
  "https://meettrack-ai.onrender.com";

export default server;


// frontend on vercel .
// backend on render .

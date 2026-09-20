import { Link, useRouteError } from "react-router";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "sans-serif" }}>
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for doesn't exist or an error occurred.</p>
      <Link to="/us-digital-environments" style={{ color: "blue", textDecoration: "underline" }}>Go Back Home</Link>
    </div>
  );
}

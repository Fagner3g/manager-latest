export default function Integrations() {
  return (
    <div>
      <h1>Integrations</h1>
    </div>
  );
}
Integrations.auth = {
  role: "teste",
  loading: <h1>Loading...</h1>,
  unauthorized: "/login-with-different-user", // redirect to this url
};

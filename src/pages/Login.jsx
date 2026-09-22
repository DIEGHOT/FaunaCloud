import AuthLayout from "../components/templates/AuthLayout";
import FormularioLogin from "../components/organisms/FormularioLogin";

function Login() {
  const handleLogin = (datos) => {
    alert(`Intentando iniciar sesión con: ${datos.email}`);
  };

  return (
    <AuthLayout>
      <FormularioLogin onLoginSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default Login;
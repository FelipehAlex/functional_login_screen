import "./styles.css";
import Rotas from "./rotas";
import { AuthProvider } from "./context/auth";

export default function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

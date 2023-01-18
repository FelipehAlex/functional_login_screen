import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="Container">
      <h2>Home</h2>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </div>
  );
}

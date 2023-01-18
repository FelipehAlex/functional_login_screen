import "./styles.css";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

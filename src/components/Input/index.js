import "./styles.css";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

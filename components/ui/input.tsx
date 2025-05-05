export function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded-xl p-2 w-full"
    />
  );
}

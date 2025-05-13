export function Input({ value, onChange, placeholder }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded-xl p-2 w-full"
    />
  );
}

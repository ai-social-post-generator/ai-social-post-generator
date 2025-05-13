export function Textarea({ value, readOnly = false }: {
  value: string;
  readOnly?: boolean;
}) {
  return (
    <textarea
      value={value}
      readOnly={readOnly}
      className="border rounded-xl p-2 w-full"
    />
  );
}

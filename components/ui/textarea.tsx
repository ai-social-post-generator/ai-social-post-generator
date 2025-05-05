export function Textarea({ value, className, readOnly }) {
  return (
    <textarea
      value={value}
      readOnly={readOnly}
      className={className}
    />
  );
}

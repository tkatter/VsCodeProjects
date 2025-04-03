export default function Service({ tip, onSelect, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value={0.1}>It was ok (10%)</option>
        <option value={0.15}>It was good (15%)</option>
        <option value={0.2}>It was AMAZING (20%)</option>
      </select>
    </div>
  );
}

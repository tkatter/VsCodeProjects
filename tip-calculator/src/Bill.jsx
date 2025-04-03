export default function Bill({ billValue, setBillValue }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="Bill value..."
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      ></input>
    </div>
  );
}

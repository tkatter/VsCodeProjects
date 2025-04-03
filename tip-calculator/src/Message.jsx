export default function Message({ billValue, yourTip, friendTip }) {
  const bill = billValue * 1;
  const tip = (bill * ((yourTip + friendTip) / 2)).toFixed(2) * 1;
  const total = !billValue ? "0" : bill + tip;

  return (
    <h2>
      You pay ${total} (${bill} + ${tip} tip)
    </h2>
  );
}

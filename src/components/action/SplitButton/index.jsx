export const SplitButton = ({ direction, onClick }) => (
  <button
    onClick={() => onClick(direction)}
    className="bg-white p-4 w-[3.75rem] border"
  >
    {direction}
  </button>
);

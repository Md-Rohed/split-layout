import { SplitButton } from "../action/SplitButton";

export const PartitionContent = ({ color, onSplit, onRemove }) => (
  <div
    className="absolute inset-0 flex items-center justify-center bg-opacity-75"
    style={{ backgroundColor: color }}
  >
    <SplitButton direction="V" onClick={onSplit} />
    <SplitButton direction="H" onClick={onSplit} />
    <button
      onClick={onRemove}
      className="px-2 py-1 m-1 bg-red-500 text-white rounded"
    >
      -
    </button>
  </div>
);

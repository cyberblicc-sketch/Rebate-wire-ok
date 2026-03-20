'use client';

interface ChecklistItem {
  label: string;
  checked: boolean;
}

interface MergedChecklistProps {
  items: ChecklistItem[];
  onToggle?: (index: number) => void;
}

export default function MergedChecklist({ items, onToggle }: MergedChecklistProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onToggle?.(i)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600"
            id={`checklist-item-${i}`}
          />
          <label
            htmlFor={`checklist-item-${i}`}
            className={`text-sm ${item.checked ? 'line-through text-slate-400' : 'text-slate-700'}`}
          >
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

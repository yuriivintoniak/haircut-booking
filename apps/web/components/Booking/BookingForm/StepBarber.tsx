import { User } from "lucide-react";
import { stylists, GRAY, ROSE, PANEL, BORDER, DARK } from "../constants";

type Props = {
  // selectedStylist: string;
  selectedStylist: string | null;
  onSelect: (stylist: string) => void;
};

export function StepBarber({ selectedStylist, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {stylists.map((s) => {
        const active = selectedStylist === s
        return (
          <button
            key={s}
            type="button"
            onClick={() => onSelect(s)}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all"
            style={
              active
                ? { backgroundColor: ROSE, borderColor: ROSE, color: DARK }
                : { backgroundColor: PANEL, borderColor: BORDER, color: GRAY }
            }
          >
            <User className="w-4 h-4" />
            {s}
          </button>
        );
      })}
    </div>
  );
}

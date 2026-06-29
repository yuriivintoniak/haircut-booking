import { Clock } from "lucide-react";
import { services, type Service, ORANGE, GRAY, ROSE, PANEL, BORDER, TEXT } from "../constants";

type Props = {
  // selectedService: Service
  selectedService: Service | null;
  onSelect: (service: Service) => void;
};

export function StepService({ selectedService, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {services.map((s) => {
        // const active = selectedService.name === s.name
        const isSelected = selectedService?.name === s.name;
        return (
          <button
            key={s.name}
            type="button"
            onClick={() => onSelect(s)}
            className="text-left rounded-xl border px-4 py-3.5 transition-all"
            style={{
              backgroundColor: isSelected ? "rgba(192,128,129,0.12)" : PANEL,
              borderColor: isSelected ? ROSE : BORDER,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sm" style={{ color: TEXT }}>
                {s.name}
              </span>
              <span className="font-bold text-sm" style={{ color: ORANGE }}>
                ${s.price}
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: GRAY }}>
              <Clock className="w-3 h-3" />
              {s.duration} min
            </span>
          </button>
        );
      })}
    </div>
  );
}

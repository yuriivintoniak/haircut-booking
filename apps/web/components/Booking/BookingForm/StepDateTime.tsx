import { cn } from "@repo/ui/lib/utils";
import { timeSlots } from "../constants";
import { Calendar } from "@repo/ui/components/calendar";

type StepDateTimeProps = {
  selectedDate: string | null;
  selectedTime: string | null;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
};

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}

export function StepDateTime({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: StepDateTimeProps) {
  return (
    <div>
      <h4 className="font-display text-chart-5 text-3xl mb-6 uppercase tracking-tight">
        Pick a Date & Time
      </h4>
      <div className="grid md:grid-cols-2 gap-8">
        <Calendar
          mode="single"
          // selected={selectedDate ? new Date(selectedDate) : undefined}
          selected={
            selectedDate ? new Date(selectedDate + "T00:00:00") : undefined
          }
          onSelect={(date) => {
            if (!date) return
            onDateChange(formatDate(date))
          }}
          // onSelect={(date) => onDateChange(date ? formatDate(date) : "")}
          disabled={{ before: new Date() }}
          className="rounded-sm bg-transparent border border-muted-foreground/30 p-5"
        />

        <div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              const disabled = !selectedDate;

              return (
                <button
                  key={time}
                  type="button"
                  disabled={disabled}
                  onClick={() => onTimeChange(time)}
                  className={cn(
                    "rounded-sm border py-3 text-sm font-medium transition-all",
                    "bg-transparent text-[#9F9F9F] border-muted-foreground/30",
                    disabled && "pointer-events-none",
                    isSelected && "bg-chart-5 text-primary border-chart-5"
                  )}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

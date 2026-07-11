import { Check } from "lucide-react";
import { Barber, type Service } from "../constants";

type BookingSummaryProps = {
  selectedService: Service | null;
  selectedBarber: Barber | null;
  selectedDate: string | null;
  selectedTime: string | null;
  canConfirm: boolean;
  onConfirm: () => void;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export function BookingSummary({
  selectedService,
  selectedBarber,
  selectedDate,
  selectedTime,
  canConfirm,
  onConfirm,
  isPending,
  isError,
  isSuccess,
}: BookingSummaryProps) {
  const rows = [
    { label: "Service", value: selectedService?.name ?? "—" },
    { label: "Barber", value: selectedBarber?.name ?? "—" },
    { label: "Date", value: selectedDate ?? "—" },
    { label: "Time", value: selectedTime ?? "—" },
  ];

  return (
    <div className="h-full flex flex-col rounded-sm border border-muted-foreground/30 p-6 md:p-8">
      <h3 className="font-display text-chart-5 text-3xl uppercase tracking-tight mb-6">
        Summary
      </h3>

      <ul className="flex flex-col">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between py-3 border-b border-muted-foreground/30">
            <span className="text-primary-foreground/60 text-xs uppercase tracking-widest">
              {row.label}
            </span>
            <span
              className={`text-sm ${
                row.value !== "—" ? "text-chart-5" : "text-primary-foreground/40"
              }`}
            >
              {row.value}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between py-3 font-medium rounded-sm">
        <span className="text-primary-accent text-sm uppercase tracking-widest">
          Total
        </span>
        <span className="font-display text-chart-5 text-2xl">
          ${selectedService?.price ?? 0}
        </span>
      </div>

      {/* Spacer pushes total + button to the bottom to match form height */}
      <div className="flex-1" />

      {isError && (
        <div className="mt-6 px-8 text-center text-primary-accent font-medium">
          Failed to confirm booking! Please try again.
        </div>
      )}

      {isSuccess ? (
        <div className="mt-6 px-8 py-3.5 text-center text-chart-5 font-semibold">
          Booking confirmed!
        </div>
      ) : (
        <button
          type="button"
          onClick={onConfirm}
          disabled={!canConfirm || isPending}
          className="w-full inline-flex items-center justify-center gap-2 bg-chart-5 rounded-sm mt-6 px-8 py-3.5 font-semibold cursor-pointer disabled:cursor-default transition-opacity hover:opacity-90 disabled:opacity-70"
        >
          <Check className="w-5 h-5" />
          {isPending ? "Confirming..." : "Confirm Booking"}
        </button>
      )}
    </div>
  );
}

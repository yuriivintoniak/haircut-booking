export function formatAppointmentAt(date: string, time: string) {
  const [timePart, period] = time.split(" ");

  if (!timePart || !period) {
    throw new Error("Invalid time format");
  }

  const [hoursString, minutesString] = timePart.split(":");

  if (!hoursString || !minutesString) {
    throw new Error("Invalid time format");
  }

  let hours = Number(hoursString);
  const minutes = Number(minutesString);

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const appointmentDate = new Date(date);
  appointmentDate.setHours(hours, minutes, 0, 0);

  return appointmentDate.toISOString();
}

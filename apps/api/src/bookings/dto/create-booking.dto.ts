import { IsDateString, IsString } from "class-validator";

export class CreateBookingDto {
  @IsString()
  userId: string;

  @IsString()
  service: string;

  @IsString()
  barber: string;

  @IsDateString()
  appointmentAt: string;
}

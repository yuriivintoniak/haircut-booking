import axios from "axios";
import { httpClient } from "..";
import { ICreateBooking } from "../../types/booking.interface";

const PATH_PREFIX = "/bookings";

export const CREATE_BOOKING = "CREATE_BOOKING";

export const createBooking = async (payload: ICreateBooking) => {
  try {
    const { data } = await httpClient.post(PATH_PREFIX, payload);
    return data;
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    throw error.response?.data;
  }
};

import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useBookStore = create((set) => ({
    bookings: [],
    isBooking: false,
    isLoadingBookings: false,

  
    createBooking: async (data) => {
        set({ isBooking: true });
        try {
          console.log("Sending booking data:", data);
          const res = await axiosInstance.post("/booking/create", data);
          set((state) => ({ bookings: [...state.bookings, res.data] }));
          toast.success("Booking created successfully.");
        } catch (error) {
          console.error("Error creating booking:", error.response || error.message);
          toast.error(error.response?.data?.message || "Failed to create booking.");
        } finally {
          set({ isBooking: false });
        }
      },
      

  
}));

import Booking from "../models/booking.model.js";
import User from "../models/user.model.js";

export const createBooking = async (req, res) => {
  const { userId, phoneNumber, seatingPreference, numberOfGuests, reservationDate, reservationTime } = req.body;

  try {
    // Check for missing fields
    if (!userId || !phoneNumber || !seatingPreference || !numberOfGuests || !reservationDate || !reservationTime) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate user existence
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Validate reservation date
    const currentDate = new Date();
    const reservation = new Date(reservationDate);
    if (reservation < currentDate) {
      return res.status(400).json({ message: "Reservation date must be in the future." });
    }

    // Create and save booking
    const newBooking = new Booking({
      user: userId,
      phoneNumber,
      seatingPreference,
      numberOfGuests,
      reservationDate,
      reservationTime,
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully.",
      booking: {
        id: newBooking._id,
        user: userId,
        phoneNumber: newBooking.phoneNumber,
        seatingPreference: newBooking.seatingPreference,
        numberOfGuests: newBooking.numberOfGuests,
        reservationDate: newBooking.reservationDate,
        reservationTime: newBooking.reservationTime,
      },
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: errors.join(", ") });
    }

    console.error("Error in createBooking controller:", error.message);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // Adjust validation as per your region's phone number format
        },
        message: "Phone number must be 10 digits.",
      },
    },
    seatingPreference: {
      type: String,
      enum: ["Indoor", "Outdoor", "Terrace"],
      required: true,
    },
    numberOfGuests: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    reservationDate: {
      type: Date, // Changed from String to Date
      required: true,
    },
    reservationTime: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^([0-1]?\d|2[0-3]):([0-5]\d)$/.test(v); // 24-hour time format
        },
        message: "Reservation time must be in HH:mm format.",
      },
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

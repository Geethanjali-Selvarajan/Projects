import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createBooking } from "../contoller/booking.controller.js";

const router = express.Router();

// POST route for creating a booking
router.post("/create", protectRoute, createBooking);

export default router;

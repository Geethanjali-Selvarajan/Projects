import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Layout from "./../components/Layout/Layout";
import { useAuthStore } from "../store/useAuthStore";
import { useBookStore } from "../store/useBookStore";

const Booking = () => {
  const { authUser } = useAuthStore();
  const { createBooking, isBooking } = useBookStore();

  const [formData, setFormData] = useState({
    numberOfGuests: "",
    seatingPreference: "",
    phoneNumber: "",
    reservationDate: "",
    reservationTime: "",
  });

  const [openDialog, setOpenDialog] = useState(false);  // State for Dialog visibility

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingData = {
      userId: authUser._id, // Include userId from authUser
      name: authUser.fullName,
      email: authUser.email,
      ...formData, // Other form data
    };

    await createBooking(bookingData);
    
    // Reset the form fields (excluding name and email)
    setFormData({
      numberOfGuests: "",
      seatingPreference: "",
      phoneNumber: "",
      reservationDate: "",
      reservationTime: "",
    });

    // Open the dialog after successful booking
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const galleryBoxStyle = {
    marginBottom: "20px",
    padding: "40px",
    textAlign: "center",
    color: "black",
    fontSize: "30px",
    backgroundColor: "white",
    maxWidth: "100%",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "300px",
  };

  return (
    <Layout>
      <Container style={{ marginTop: "40px" }}>
        <Grid container spacing={9}>
          {/* Box 1 */}
          <Grid item xs={12} md={5} style={{ marginTop: "110px" }}>
            <Box sx={galleryBoxStyle}>
              <img
                src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais"
                alt="GalleryImage3"
                style={imageStyle}
              />
              <Typography>
                <br />
                <p style={{ fontSize: "15px" }}>
                  We believe in turning ordinary moments into extraordinary memories. Secure your table and let us
                  create a dining experience to remember.
                  <br />
                  <br />
                </p>
                <p>
                  Opening times:
                  <br />
                  Monday – Sunday
                  <br />
                  10.00am – 10.00pm
                </p>
              </Typography>
            </Box>
          </Grid>

          {/* Box 2 */}
          <Grid item xs={12} md={7}>
            <Box sx={galleryBoxStyle}>
              <Grid container spacing={3} justify="center" alignItems="center" style={{ minHeight: "80vh", padding: "20px" }}>
                <Grid style={{ textAlign: "center" }}>
                  <Typography variant="h5" gutterBottom>
                    Book a Table
                    <br />
                    <br />
                    <hr />
                    <br />
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Name"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          required
                          value={authUser?.fullName || "N/A"}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          type="email"
                          required
                          value={authUser?.email || "N/A"}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          variant="outlined"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange("phoneNumber")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="seating-label">Seating Preference</InputLabel>
                          <Select
                            labelId="seating-label"
                            id="seating"
                            value={formData.seatingPreference}
                            onChange={handleChange("seatingPreference")}
                            label="Seating Preference"
                          >
                            <MenuItem value="Indoor">Indoor Dining</MenuItem>
                            <MenuItem value="Outdoor">Outdoor Dining</MenuItem>
                            <MenuItem value="Terrace">The Terrace</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="guests-label">Number of Guests</InputLabel>
                          <Select
                            labelId="guests-label"
                            id="guests"
                            value={formData.numberOfGuests}
                            onChange={handleChange("numberOfGuests")}
                            label="Number of Guests"
                          >
                            {[...Array(10).keys()].map((i) => (
                              <MenuItem key={i + 1} value={i + 1}>
                                {i + 1} {i + 1 === 1 ? "person" : "people"}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Reservation Date"
                          type="date"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                          value={formData.reservationDate}
                          onChange={handleChange("reservationDate")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Reservation Time"
                          type="time"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                          value={formData.reservationTime}
                          onChange={handleChange("reservationTime")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="inherit" disabled={isBooking}>
                          {isBooking ? "Booking..." : "Reserve Table"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Dialog for confirmation message */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Booking Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Your table has been successfully booked!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default Booking;

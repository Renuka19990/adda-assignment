
# Facility Booking:

Facility Booking Module
The Facility Booking Module is a simple system for managing bookings of facilities within an apartment complex. It allows residents to book facilities such as the clubhouse and tennis court for their personal use.

# Features
Book facilities with specified time slots and rates.
Prevent overlapping bookings.
Calculate booking costs based on the selected time slots.
# Usage
Installation
Clone this repository to your local machine:
git clone https://github.com/Renuka19990/adda-assignment

# Navigate to the project directory:
cd adda-assignment
Install dependencies:


# Install dependencies:
npm install


# To run the unit tests:
node facilityBooking.test.js

#to run the code
node index.js

# Usage Example
You can interact with the Facility Booking Module by editing the index.js file. Below is an example of how to use the module:

``const FacilityBooking = require('./facilityBooking');

// Create a new instance of the FacilityBooking class
const bookingSystem = new FacilityBooking();

try {
    // Example bookings
    console.log(bookingSystem.book('Clubhouse', '26-10-2020', '16:00', '22:00')); // Booked, Rs. 3000
    console.log(bookingSystem.book('Tennis Court', '26-10-2020', '16:00', '20:00')); // Booked, Rs. 200
    console.log(bookingSystem.book('Clubhouse', '26-10-2020', '16:00', '22:00')); // Booking Failed, Already Booked
    console.log(bookingSystem.book('Tennis Court', '26-10-2020', '17:00', '21:00')); // Booking Failed, Already Booked
} catch (error) {
    console.error(error.message);
}
``

# Folder Structure
facility-booking/
index.js: Entry point for interacting with the booking system.
facilityBooking.js: Contains the implementation of the FacilityBooking class.
facilityBooking.test.js: Contains unit tests for the FacilityBooking class.

const FacilityBooking = require("./facilityBooking");

const bookingSystem = new FacilityBooking();

try {
  console.log(bookingSystem.book("Clubhouse", "26-10-2020", "16:00", "22:00")); 
  console.log(
    bookingSystem.book("Tennis Court", "26-10-2020", "16:00", "20:00")
  );
  console.log(bookingSystem.book("Clubhouse", "26-10-2020", "16:00", "22:00")); 
  console.log(
    bookingSystem.book("Tennis Court", "26-10-2020", "17:00", "21:00")
  ); 
} catch (error) {
  console.error(error.message);
}

const FacilityBooking = require("./facilityBooking");
const assert = require("assert");

function runTests() {
  const bookingSystem = new FacilityBooking();

  let result = bookingSystem.book("Clubhouse", "26-10-2020", "16:00", "22:00");
  assert.strictEqual(result, "Booked, Rs. 3000");

  result = bookingSystem.book("Tennis Court", "26-10-2020", "16:00", "20:00");
  assert.strictEqual(result, "Booked, Rs. 200");

  result = bookingSystem.book("Clubhouse", "26-10-2020", "16:00", "22:00");
  assert.strictEqual(result, "Booking Failed, Already Booked");

  result = bookingSystem.book("Tennis Court", "26-10-2020", "17:00", "21:00");
  assert.strictEqual(result, "Booking Failed, Already Booked");

  console.log("All tests passed!");
}

runTests();

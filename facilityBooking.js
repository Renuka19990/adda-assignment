class FacilityBooking {
  constructor() {
    this.facilities = {
      Clubhouse: [
        { start: "10:00", end: "16:00", rate: 100 },
        { start: "16:00", end: "22:00", rate: 500 },
      ],
      "Tennis Court": [{ start: "00:00", end: "24:00", rate: 50 }],
    };
    this.bookings = {};
  }

  timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  calculateCost(facility, startTime, endTime) {
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);
    let totalCost = 0;

    for (const slot of this.facilities[facility]) {
      const slotStart = this.timeToMinutes(slot.start);
      const slotEnd = this.timeToMinutes(slot.end);

      if (endMinutes <= slotStart || startMinutes >= slotEnd) {
        continue;
      }

      const overlapStart = Math.max(startMinutes, slotStart);
      const overlapEnd = Math.min(endMinutes, slotEnd);
      const hours = (overlapEnd - overlapStart) / 60;

      totalCost += hours * slot.rate;
    }

    return totalCost;
  }

  isAvailable(facility, date, startTime, endTime) {
    if (!this.bookings[date]) {
      this.bookings[date] = {};
    }

    if (!this.bookings[date][facility]) {
      this.bookings[date][facility] = [];
    }

    for (const booking of this.bookings[date][facility]) {
      if (!(endTime <= booking.startTime || startTime >= booking.endTime)) {
        return false;
      }
    }

    return true;
  }

  book(facility, date, startTime, endTime) {
    if (!this.facilities[facility]) {
      throw new Error(`Facility ${facility} does not exist`);
    }

    if (this.isAvailable(facility, date, startTime, endTime)) {
      const cost = this.calculateCost(facility, startTime, endTime);
      this.bookings[date][facility].push({ startTime, endTime });
      return `Booked, Rs. ${cost}`;
    } else {
      return `Booking Failed, Already Booked`;
    }
  }
}

module.exports = FacilityBooking;

function timeConversion(s) {
    let period = s.slice(0-2); // Get AM or PM
    let timeParts = s.slice(0, -2).split(":"); // Remove AM/PM and split into parts
    let hours = parseInt(timeParts[0], 10);
    
    if (period === "AM" && hours === 12) {
        timeParts[0] = "00";
    } else if (period === "PM" && hours !== 12) {
        timeParts[0] = (hours + 12).toString();
    }
    
    return timeParts.join(":");
}

// Example usage
console.log(timeConversion("07:05:45PM")); // Output: "19:05:45"
console.log(timeConversion("12:01:00PM")); // Output: "12:01:00"
console.log(timeConversion("12:01:00AM")); // Output: "00:01:00"
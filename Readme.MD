# Speed Detector Function

## Description
The `speedDetector` function is designed to assess the speed of a vehicle and determine if it is within the legal speed limit. If the speed is over the limit, it calculates the number of demerit points to be assigned to the driver. Exceeding a certain number of points results in a suspended license.

## Functionality
- The function accepts one argument: `speedInput`, which represents the speed of the vehicle.
- If the input is negative, null, undefined, or an empty string, it returns "Invalid Speed."
- If the speed is within the legal limit (0 to 70 km/s), it returns "OK".
- If the speed exceeds the limit, it calculates demerit points. Every 5 km/s over the limit equals one demerit point.
- If the driver accumulates more than 12 points, their license is considered suspended.



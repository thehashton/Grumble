import { getDistanceFromLatLonInKm } from "../distanceCalculator";

test('should pass my lickle test', function() {
    expect(getDistanceFromLatLonInKm(33.8736765376576, -1.765765765675, 50.7186356978817, -1.12935802905177)).toBe(1873.7867799962207);
})

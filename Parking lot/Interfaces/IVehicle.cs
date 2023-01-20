using ParkingLot.Constants;


namespace ParkingLot.Interfaces
{
    public interface IVehicle
    {
        public VechicleType VehicleType { get; }
        public string VehicleNumber { get; set; }
    }
}

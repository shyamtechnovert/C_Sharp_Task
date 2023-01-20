using ParkingLot.Constants;
using ParkingLot.Interfaces;

namespace ParkingLot.Models
{
    public class HeavyWheeler : IVehicle
    {
        public VechicleType VehicleType { get { return VechicleType.HeavyWheeler; } }

        public string _VehicleNumber;
        public string VehicleNumber
        {
            get { return _VehicleNumber; }
            set { _VehicleNumber = value; }
        }

    }
}

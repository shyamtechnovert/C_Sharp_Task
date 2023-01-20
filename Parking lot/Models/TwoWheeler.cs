using ParkingLot.Constants;
using ParkingLot.Interfaces;

namespace ParkingLot.Models
{
    public class TwoWheeler : IVehicle
    {
        public VechicleType VehicleType { get { return VechicleType.TwoWheeler; } }

        private string _VehicleNumber;
        public string VehicleNumber
        {
            get { return _VehicleNumber; }
            set { _VehicleNumber = value; }
        }

    }
}

using ParkingLot.Constants;
using ParkingLot.Interfaces;

namespace ParkingLot.Models
{
    public class FourWheeler : IVehicle
    {
        public VechicleType VehicleType { get { return VechicleType.FourWheeler; } }

        private string _VehicleNumber;
        public string VehicleNumber
        {
            get { return _VehicleNumber; }
            set { _VehicleNumber = value; }
        }

    }
}

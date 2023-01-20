using ParkingLot.Constants;
using ParkingLot.Interfaces;


namespace ParkingLot.Models
{
    class FourWheelerSlot : ISlot
    {
        VechicleType ISlot.VehicleType { get { return VechicleType.FourWheeler; } }
        public bool Avalibility { get; set; }
        public int SlotPosition { get; set; }
        public string SlotID { get { return "SLFO" + SlotPosition; } }
    }
}

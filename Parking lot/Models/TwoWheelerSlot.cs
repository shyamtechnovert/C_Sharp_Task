using ParkingLot.Constants;
using ParkingLot.Interfaces;

namespace ParkingLot.Models
{
    class TwoWheelerSlot : ISlot
    {
        VechicleType ISlot.VehicleType { get { return VechicleType.TwoWheeler; } }
        public bool Avalibility { get; set; }
        public int SlotPosition { get; set; }
        public string SlotID { get { return "SLTW" + SlotPosition; } }        
    }
}
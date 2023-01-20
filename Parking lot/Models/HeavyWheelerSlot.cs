using ParkingLot.Constants;
using ParkingLot.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingLot.Models
{
    class HeavyWheelerSlot : ISlot
    {
        VechicleType ISlot.VehicleType { get { return VechicleType.HeavyWheeler; } }
        public bool Avalibility { get; set; }
        public int SlotPosition { get; set; }
        public string SlotID { get { return "SLHY" + SlotPosition; } }
    }
}

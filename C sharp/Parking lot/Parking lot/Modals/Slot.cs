using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking_lot.Modals
{
    public class Slot
    {
        public VechicleType VehicleType;
        public bool Avalibility;
        private string _SlotID;
        public int SlotPosition;

        public string SlotID
        {
            get {
                if (VehicleType == VechicleType.TwoWheeler)
                {
                    _SlotID = "SLTW" + SlotPosition;
                }
                else if (VehicleType == VechicleType.FourWheeler)
                {
                    _SlotID = "SLFO" + SlotPosition;
                }
                else if (VehicleType == VechicleType.HeavyWheeler)
                {
                    _SlotID = "SLHY" + SlotPosition;
                }
                return _SlotID;
            }
        }
        public Slot(VechicleType vehicleType, int slotPosition, bool avalibility)
        {
            VehicleType = vehicleType;
            Avalibility = avalibility;
            SlotPosition = slotPosition;
        }


    }
}

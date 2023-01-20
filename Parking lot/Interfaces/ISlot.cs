using ParkingLot.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingLot.Interfaces
{
    public interface ISlot
    {
        public VechicleType VehicleType { get; }

        
        public bool Avalibility { get; set; }
        public int SlotPosition { get; set; }

        public string SlotID { get; }
        //{
        //    get {
        //        if (VehicleType == VechicleType.TwoWheeler)
        //        {
        //            _SlotID = "SLTW" + SlotPosition;
        //        }
        //        else if (VehicleType == VechicleType.FourWheeler)
        //        {
        //            _SlotID = "SLFO" + SlotPosition;
        //        }
        //        else if (VehicleType == VechicleType.HeavyWheeler)
        //        {
        //            _SlotID = "SLHY" + SlotPosition;
        //        }
        //        return _SlotID;
        //    }
    }

}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Parking_lot.Modals
{
    public enum VechicleType
    {
        TwoWheeler,
        FourWheeler,
        HeavyWheeler,
    }

    public class Ticket
    {
        public string VehicleNumber { get; set; } = "";
        public string SlotID { get; set; } = "";
        public string InTime { get; set; } = DateTime.Now.ToString("T");
        public string OutTime { get; set; } = "";
        private string _TicketId;
        public VechicleType? VehicleType;
        public string TicketId
        {
            get
            {
                if (VehicleType == VechicleType.TwoWheeler && VehicleNumber != "")
                {
                    _TicketId = "TIC" + VehicleNumber.ToUpper() + "TW";
                }
                else if (VehicleType == VechicleType.FourWheeler && VehicleNumber != "")
                {
                    _TicketId = "TIC" + VehicleNumber.ToUpper() + "FO";
                }
                else if (VehicleType == VechicleType.HeavyWheeler && VehicleNumber != "")
                {
                    _TicketId = "TIC" + VehicleNumber.ToUpper() + "HY";
                }
                return _TicketId;
            }
        }        
    }
}

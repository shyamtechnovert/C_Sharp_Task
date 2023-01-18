using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Parking_lot.Constants;

namespace Parking_lot.Modals
{
    

    public class Ticket
    {
        
        public string SlotID { get; set; } = "";
        public TimeSpan InTime { get; set; } = DateTime.Now.TimeOfDay;
        public TimeSpan? OutTime { get; set; }

        private string _TicketId;
        
        public Vehicle vehicle;
        public string TicketId
        {
            get
            {
                if (vehicle.VehicleType == VechicleType.TwoWheeler && vehicle.VehicleNumber != "")
                {
                    _TicketId = "TIC" + vehicle.VehicleNumber.ToUpper() + "TW";
                }
                else if (vehicle.VehicleType == VechicleType.FourWheeler && vehicle.VehicleNumber != "")
                {
                    _TicketId = "TIC" + vehicle.VehicleNumber.ToUpper() + "FO";
                }
                else if (vehicle.VehicleType == VechicleType.HeavyWheeler && vehicle.VehicleNumber != "")
                {
                    _TicketId = "TIC" + vehicle.VehicleNumber.ToUpper() + "HY";
                }
                return _TicketId;
            }
        }        
    }
}

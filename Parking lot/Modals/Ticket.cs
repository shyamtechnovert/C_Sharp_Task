
using ParkingLot.Constants;

namespace ParkingLot.Modals
{
    

    public class Ticket
    {
        public string SlotID { get; set; } = "";
        public DateTime InTime { get; set; } = DateTime.Now;
        public DateTime OutTime { get; set; } = DateTime.Parse("00:00:00");

        private string _TicketId;
        
        public Vehicle vehicle;
        public string TicketId
        { get
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

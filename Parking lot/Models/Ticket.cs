
using ParkingLot.Constants;

namespace ParkingLot.Models
{
    

    public class Ticket
    {
        public string SlotID { get; set; } = "";
        public DateTime InTime { get; set; } = DateTime.Now;
        public DateTime OutTime { get; set; } = DateTime.Parse("00:00:00");

        private static string _TicketId;
        
        public Vehicle vehicle;
        public string TicketId
        {            
            get
            {
                var trimedString = String.Concat(vehicle.VehicleNumber.Where(i => !Char.IsWhiteSpace(i)));
                if (vehicle.VehicleType == VechicleType.TwoWheeler && vehicle.VehicleNumber != "")
                {
                    _TicketId = "TIC" + trimedString.ToUpper() + "TW";
                }
                else if (vehicle.VehicleType == VechicleType.FourWheeler && vehicle.VehicleNumber != "")
                {
                    _TicketId = "TIC" + trimedString.ToUpper() + "FO";
                }
                else if (vehicle.VehicleType == VechicleType.HeavyWheeler && vehicle.VehicleNumber != "")
                {
                    _TicketId = "TIC" + trimedString.ToUpper() + "HY";
                }
                return _TicketId;
                
            }
        }        
    }
}

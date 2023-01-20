
using ParkingLot.Models;
using ParkingLot.Constants;


namespace ParkingLot.Services
{
    public class ParkingOperations
    {   
        public List<Slot> parkingSlots= new List<Slot>();
        public List<Ticket> parkingTicketsIssued = new List<Ticket>();
        
       
        public ParkingOperations(int TwoWheelerLimit, int FourWheelerLimit, int HeavyWheelerLimit)
        {            
            for (int i = 0; i < (TwoWheelerLimit + FourWheelerLimit + HeavyWheelerLimit); i++)
            {
                if (i >= 0 && i < TwoWheelerLimit)
                {                    
                    parkingSlots.Add(new Slot(VechicleType.TwoWheeler, i, true));
                }
                else if (i >= TwoWheelerLimit && i < TwoWheelerLimit + FourWheelerLimit)
                {                    
                    parkingSlots.Add(new Slot(VechicleType.FourWheeler, i, true));
                }
                else if (i >= TwoWheelerLimit + FourWheelerLimit)
                {                    
                    parkingSlots.Add(new Slot(VechicleType.HeavyWheeler,i, true));
                }
            }            
        }       
    }
}

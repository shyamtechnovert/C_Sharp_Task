
using ParkingLot.Models;
using ParkingLot.Constants;
using ParkingLot.Interfaces;

namespace ParkingLot.Services
{
    public class ParkingLotInitialization
    {   
        public List<ISlot> parkingSlots= new List<ISlot>();
        public List<Ticket> parkingTicketsIssued = new List<Ticket>();
        public int TwoWheelerLimit, FourWheelerLimit, HeavyWheelerLimit;

        void SlotCreater(ISlot value,int postion)
        {
            value.SlotPosition = postion;            
            value.Avalibility = true;
            parkingSlots.Add(value);
        } 
        
        public void Initilize()
        {
            for (int i = 0; i < TwoWheelerLimit; i++)
            {
                var slotCreation = new TwoWheelerSlot();
                SlotCreater(slotCreation, i);
            }

            for (int i = 0; i < FourWheelerLimit; i++)
            {
                var slotCreation = new FourWheelerSlot();
                SlotCreater(slotCreation, i);
            }

            for (int i = 0; i < HeavyWheelerLimit; i++)
            {
                var slotCreation = new HeavyWheelerSlot();
                SlotCreater(slotCreation, i);
            }
        }
    }
}

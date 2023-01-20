using ParkingLot.Models;
using ParkingLot.Interfaces;

namespace ParkingLot.Services
{
    public static class UnparkingVehicle
    {
        public static void ClearSlot(this ParkingLotInitialization parking, string id)
        {
            Ticket matchedTicket = parking.parkingTicketsIssued.Where(ticket => ticket.TicketId == id).First();
            PrintTicket.Print(matchedTicket, true);

            ISlot matchedSlot = parking.parkingSlots.Where(slot => slot.SlotID == matchedTicket.SlotID).First();
            matchedSlot.Avalibility = true;
        }


        public static void UnParkVehicle(this ParkingLotInitialization parking)
        {
            Console.Write("Enter the Ticket Id :  ");
            string ticketId = Console.ReadLine();
            bool checkingExistance = parking.parkingTicketsIssued.Any(ticket => (ticket.TicketId == ticketId && ticket.OutTime == DateTime.Parse("00:00:00")));

            if (checkingExistance)
            {
                ClearSlot(parking,ticketId);
            }
            else
            {
                Console.WriteLine("Invalid Ticket ID !!! \n");
            }
        }
    }
}

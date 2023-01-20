using ParkingLot.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingLot.Services
{
    public static class UnparkingVehicle
    {
        public static void ClearSlot(this ParkingOperations parking, string id)
        {
            Ticket matchedTicket = parking.parkingTicketsIssued.Where(ticket => ticket.TicketId == id).First();
            PrintTicket.Print(matchedTicket, true);

            Slot matchedSlot = parking.parkingSlots.Where(slot => slot.SlotID == matchedTicket.SlotID).First();
            matchedSlot.Avalibility = true;
        }


        public static void UnParkVehicle(this ParkingOperations parking)
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

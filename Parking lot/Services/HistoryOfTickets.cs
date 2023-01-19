﻿

using ParkingLot.Modals;
using ParkingLot.Services;

namespace ParkingLot.Services
{
   public static class HistoryOfTickets
   {
        public static void LogOfTickets(this ParkingOperations parking)
        {   

            var checkedOutTickets = parking.parkingTicketsIssued.Where(ticket => ticket.OutTime != DateTime.Parse("00:00:00"));
            var notCheckedOutTickets = parking.parkingTicketsIssued.Where(ticket => ticket.OutTime == DateTime.Parse("00:00:00"));


            if (notCheckedOutTickets.Count() > 0)
            {
                Console.WriteLine("Not-Checked Out Tickets!! :- \n");
                foreach (Ticket ticket in notCheckedOutTickets)
                {
                    parking.PrintTicket(ticket, false);
                }
            }
            else
            {
                Console.WriteLine("No Not-Checked Out Tickets!! \n");
            }

            if (checkedOutTickets.Count() > 0)
            {
                Console.WriteLine("Checked Out Tickets :- \n");
                foreach (Ticket ticket in checkedOutTickets)
                {
                    parking.PrintTicket(ticket, true);
                }
            }
            else
            {
                Console.WriteLine("No Checked Out Tickets!! \n");
            }
        }
    }
}
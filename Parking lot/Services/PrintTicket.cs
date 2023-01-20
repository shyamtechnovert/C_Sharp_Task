using ParkingLot.Models;


namespace ParkingLot.Services
{
    public static class PrintTicket
    {   
        public static void Print(Ticket ticket, bool checkFlag)
        {
            if (checkFlag)
            {
                Console.WriteLine("\n ----- Ticket is Checked Out !!!  ----- \n");
                Console.WriteLine($"Your TicketID :  {ticket.TicketId} \nYour Vehicle Number :  {ticket.vehicle.VehicleNumber} \nYour Slot :  {ticket.SlotID} \nIn-Time:  {ticket.InTime.ToString("T")}");
                if (ticket.OutTime == DateTime.Parse("00:00:00"))
                {
                    ticket.OutTime = DateTime.Now;
                    Console.WriteLine("Out-Time:  " + ticket.OutTime.ToString("T") + "\n");
                }
                else
                {
                    Console.WriteLine("Out-Time:  " + ticket.OutTime.ToString("T") + "\n");
                }
            }
            else
            {
                Console.WriteLine($"Your TicketID :  {ticket.TicketId} \nYour Vehicle Number :  {ticket.vehicle.VehicleNumber} \nYour Slot :  {ticket.SlotID} \nIn-Time:  {ticket.InTime.ToString("T")}\n");
            }
        }
    }
}

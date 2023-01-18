using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Parking_lot.Modals;
using Parking_lot.Constants;


namespace Parking_lot.Services
{
    public class ParkingOperations
    {   
        List<Slot> parkingSlots= new List<Slot>();
        List<Ticket> parkingTicketsIssued = new List<Ticket>();
        
        int twoWheelerLimit = 0;    
        int fourWheelerLimit = 0;
        int heavyWheelerLimit = 0;
        
        public ParkingOperations(int TwoWheelerLimit, int FourWheelerLimit, int HeavyWheelerLimit)
        {            
            twoWheelerLimit = TwoWheelerLimit;
            fourWheelerLimit = FourWheelerLimit;
            heavyWheelerLimit = HeavyWheelerLimit;           

            for (int i = 0; i < (TwoWheelerLimit + FourWheelerLimit + HeavyWheelerLimit); i++)
            {
                if (i >= 0 && i < TwoWheelerLimit)
                {
                    
                    parkingSlots.Add(new Slot(VechicleType.TwoWheeler, i, true));

                }
                else if (i >= TwoWheelerLimit && i < TwoWheelerLimit + FourWheelerLimit)
                {
                    
                    parkingSlots.Add(new Slot(VechicleType.FourWheeler,i, true));
                }
                else if (i >= TwoWheelerLimit + FourWheelerLimit)
                {
                    
                    parkingSlots.Add(new Slot(VechicleType.HeavyWheeler,i, true));
                }
            }            
        }
        
        public void ClearSlot(string id)
        {           
            Ticket matchedTicket = parkingTicketsIssued.Where(ticket => ticket.TicketId == id).First();
            PrintTicket(matchedTicket,true);

            Slot matchedSlot = parkingSlots.Where(slot => slot.SlotID== matchedTicket.SlotID).First();   
            matchedSlot.Avalibility= true;
        }

        public void PrintTicket(Ticket ticket, bool checkFlag)
        {

            if (checkFlag)
            {   Console.WriteLine($"Your TicketID :  {ticket.TicketId} \nYour Vehicle Number :  {ticket.vehicle.VehicleNumber} \nYour Slot :  {ticket.SlotID} \nIn-Time:  {ticket.InTime}");
                if (ticket.OutTime == null)
                {
                    ticket.OutTime = DateTime.Now.TimeOfDay;
                    Console.WriteLine("Out-Time:  " + ticket.OutTime + "\n");
                }
                else
                {
                    Console.WriteLine("Out-Time:  " + ticket.OutTime + "\n");
                }
                
            }
            else
            {
                Console.WriteLine($"Your TicketID :  {ticket.TicketId} \nYour Vehicle Number :  {ticket.vehicle.VehicleNumber} \nYour Slot :  {ticket.SlotID} \nIn-Time:  {ticket.InTime}\n");
            }
        }

        public  void HistoryOfTickets()
        {
            var checkedOutTickets = parkingTicketsIssued.Where(ticket => ticket.TicketId != "");
            var notCheckedOutTickets = parkingTicketsIssued.Where(ticket => ticket.TicketId == "");


            if(notCheckedOutTickets.Count() > 0)
            {
                Console.WriteLine("Not-Checked Out Tickets!! :- \n");
                foreach(Ticket ticket in notCheckedOutTickets)
                {
                    PrintTicket(ticket,false);
                }
            }
            else
            {
                Console.WriteLine("No Not-Checked Out Tickets!! \n");
            }

            if(checkedOutTickets.Count() > 0)
            {
                Console.WriteLine("Checked Out Tickets :- \n");
                foreach(Ticket ticket in checkedOutTickets)
                {
                    PrintTicket(ticket,true);
                }
            }
            else
            {
                Console.WriteLine("No Checked Out Tickets!! \n");
            }


            
        }

        public string NearestSlot(VechicleType type)
        {
            if (!Enum.IsDefined(typeof(VechicleType), type))
            {
                
                return "error";
            }
            var nearestSlot = parkingSlots.Where(slot => slot.VehicleType == type && slot.Avalibility==true ).FirstOrDefault();
            if(nearestSlot != null)
            {
                nearestSlot.Avalibility = false;
                return nearestSlot.SlotID;

            }
            return "";
        }

        public void CreatingTicket(VechicleType type,string slotID)
        {
            if (slotID == "")
            {
                Console.WriteLine("No Slots");
                return;
            }

            if (slotID == "error")
            {
                Console.WriteLine("Invalid Input!!");
                return;
            }            
            
            Console.Write("Enter the Vehicle number : ");
            string vehicleNumber = Console.ReadLine();
            
            while (String.IsNullOrWhiteSpace(vehicleNumber))
            {
                Console.WriteLine("No value entered,please try again");
                vehicleNumber = Console.ReadLine();
            }

            Vehicle vehicle = new Vehicle();
            vehicle.VehicleType = type;
            vehicle.VehicleNumber = vehicleNumber;

            Ticket createTicket = new Ticket();
            createTicket.SlotID = slotID;
            createTicket.vehicle = vehicle;
            parkingTicketsIssued.Add(createTicket);           
            Console.WriteLine("Ticket is created !! \n");
            PrintTicket(createTicket, false);
        }

        
        public void SlotDetails()
        {
            var countArray = new int[3];

            countArray[0] = parkingSlots.Where(i => i.VehicleType == VechicleType.TwoWheeler && i.Avalibility==false).Count();

            countArray[1] = parkingSlots.Where(i => i.VehicleType == VechicleType.FourWheeler && i.Avalibility == false).Count();

            countArray[2] = parkingSlots.Where(i => i.VehicleType == VechicleType.HeavyWheeler && i.Avalibility == false).Count();

            Console.WriteLine($"Parking Lot Details  :  \nType             Total Slots           Remaining");
            Console.WriteLine("Two Wheeler       " + twoWheelerLimit + "                     " + (twoWheelerLimit - countArray[0]));
            Console.WriteLine("Four Wheeler      " + fourWheelerLimit + "                     " + (fourWheelerLimit - countArray[1]));
            Console.WriteLine("Heavy Wheeler     " + heavyWheelerLimit + "                     " + (heavyWheelerLimit - countArray[2])+"\n");
        }

        public void ParkVehicle()
        {
            Console.WriteLine("Enter the car type :\n\n1. Two Wheeler \n2. Four Wheeler\n3. Heavy Vehicle\n");
            Console.Write("Your Selection :  ");

            VechicleType selectedOption = (VechicleType)Enum.Parse(typeof(VechicleType), Console.ReadLine());
            CreatingTicket(selectedOption, NearestSlot(selectedOption));
        }

        public void UnPackVehicle()
        {
            Console.Write("Enter the Ticket Id :  ");
            string ticketId = Console.ReadLine();
            bool checkingExistance = parkingTicketsIssued.Any(ticket => (ticket.TicketId==ticketId && ticket.OutTime==null));
            
            if (checkingExistance)
            {
                ClearSlot(ticketId);
            }
            else
            {
                Console.WriteLine("Invalid Ticket ID !!! \n");
            }
        }
    }
}

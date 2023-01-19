
using ParkingLot.Modals;
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

        public string? NearestSlot(VechicleType type)
        {
            if (!Enum.IsDefined(typeof(VechicleType), type))
            {
                Console.WriteLine("\n----- Invalid Input!!! -----\n");
                return null;
            }

            var nearestSlot = parkingSlots.Where(slot => slot.VehicleType == type && slot.Avalibility ).FirstOrDefault();
            if(nearestSlot != null)
            {
                nearestSlot.Avalibility = false;
                return nearestSlot.SlotID;
            }

            else
            {
                Console.WriteLine("\n-----  No Slots  -----\n");
                return null;
            }            
        }

        public void CreatingTicket(VechicleType type,string slotID)
        {       
            Console.Write("Enter the Vehicle number : ");
            string vehicleNumber = Console.ReadLine();           

            while (String.IsNullOrWhiteSpace(vehicleNumber))
            {
                Console.WriteLine("No value entered,please try again");
                vehicleNumber = Console.ReadLine();
            }

            if (parkingTicketsIssued.Any(ticket => ticket.vehicle.VehicleNumber == vehicleNumber && ticket.OutTime == null))
            {
                Console.WriteLine("\n-----  Duplicate Ticket!!!  -----\n");
                return;
            }

            Vehicle vehicle = new Vehicle();
            vehicle.VehicleType = type;
            vehicle.VehicleNumber = vehicleNumber;

            Ticket createTicket = new Ticket();
            createTicket.SlotID = slotID;
            createTicket.vehicle = vehicle;

            parkingTicketsIssued.Add(createTicket);           
            Console.WriteLine("\n-----  Ticket is created !!  -----\n");
            PrintTicket(createTicket, false);
        }

        public int CheckingAvailability(VechicleType type,bool flag) {

            if (flag)
            {
                return parkingSlots.Where(i => i.VehicleType == type).Count();
            }
            else
            {
                return parkingSlots.Where(i => i.VehicleType == type && i.Avalibility == true).Count();
            }
        }

        public void SlotDetails()
        { 
            Console.WriteLine("Parking Lot Details  :  \nType             Total Slots           Remaining");
            Console.WriteLine("Two Wheeler       " + CheckingAvailability(VechicleType.TwoWheeler,true)  + "                     " + CheckingAvailability(VechicleType.TwoWheeler, false));
            Console.WriteLine("Four Wheeler      " + CheckingAvailability(VechicleType.FourWheeler,true) + "                     " + CheckingAvailability(VechicleType.FourWheeler, false));
            Console.WriteLine("Heavy Wheeler     " + CheckingAvailability(VechicleType.HeavyWheeler,true) + "                     " + CheckingAvailability(VechicleType.HeavyWheeler, false) + "\n");
        }

        public void ParkVehicle()
        {
            Console.WriteLine("Enter the vehicle type :\n\n1. Two Wheeler \n2. Four Wheeler\n3. Heavy Vehicle\n");
            Console.Write("Your Selection :  ");

            VechicleType selectedOption = (VechicleType)Enum.Parse(typeof(VechicleType), Console.ReadLine());
            var nearestSlot = NearestSlot(selectedOption);
            if(nearestSlot != null) CreatingTicket(selectedOption,nearestSlot);
        }

        public void UnPackVehicle()
        {
            Console.Write("Enter the Ticket Id :  ");
            string ticketId = Console.ReadLine();
            bool checkingExistance = parkingTicketsIssued.Any(ticket => (ticket.TicketId==ticketId && ticket.OutTime == DateTime.Parse("00:00:00")));
            
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

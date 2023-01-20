using ParkingLot.Models;
using ParkingLot.Constants;
using ParkingLot.Interfaces;

namespace ParkingLot.Services
{
    public static class ParkingVehicle
    {
        public static string? NearestSlot(this ParkingLotInitialization parking, VechicleType type)
        {
            if (!Enum.IsDefined(typeof(VechicleType), type))
            {
                Console.WriteLine("\n----- Invalid Input!!! -----\n");
                return null;
            }

            var nearestSlot = parking.parkingSlots.Where(slot => slot.VehicleType == type && slot.Avalibility).FirstOrDefault();
            if (nearestSlot != null)
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

        public static bool ValidateVehicleNumber(this string vehicleNumber) {
            
            if (vehicleNumber.Length != 12)
            {
                Console.WriteLine("Vehicle Number not Valid!");
                return false;
            }
            
            if (!int.TryParse(vehicleNumber[2..4],out _) || !!int.TryParse(vehicleNumber[5..], out _))
            {
                Console.WriteLine("Vehicle Number not Valid");
                return false;
            }
            return true;
            
        }

        public static void CreatingTicket(this ParkingLotInitialization parking,VechicleType type, string slotID)
        {
            Console.Write("Enter the Vehicle number in the format (eg - TS 00 A 1234 ) : ");
            string vehicleNumber = Console.ReadLine();

            while (String.IsNullOrWhiteSpace(vehicleNumber))
            {
                Console.WriteLine("No value entered,please try again");
                vehicleNumber = Console.ReadLine();
            }

            if (parking.parkingTicketsIssued.Any(ticket => ticket.vehicle.VehicleNumber == vehicleNumber && ticket.OutTime == null))
            {
                Console.WriteLine("\n-----  Duplicate Ticket!!!  -----\n");
                return;
            }

            var isvalidVehicleNumber = ValidateVehicleNumber(vehicleNumber);
            if (!isvalidVehicleNumber) return;

            void TicketCreaterHelper(IVehicle vehicle)
            {
                vehicle.VehicleNumber = vehicleNumber;
                var createTicket = new Ticket { SlotID = slotID, vehicle = vehicle, };
                parking.parkingTicketsIssued.Add(createTicket);
                Console.WriteLine("\n-----  Ticket is created !!  -----\n");
                PrintTicket.Print(createTicket, false);
            }

            Ticket createTicket;

            if (type == VechicleType.TwoWheeler)
            {
                IVehicle twoWheeler = new TwoWheeler();                
                TicketCreaterHelper(twoWheeler);                

            }
            else if(type== VechicleType.FourWheeler)
            {
                IVehicle fourWheeler = new FourWheeler();
                TicketCreaterHelper(fourWheeler);
                
            }
            else if(type== VechicleType.HeavyWheeler)
            {
                IVehicle heavyWheeler = new HeavyWheeler();
                TicketCreaterHelper(heavyWheeler);                
            }            

        }

        public static void ParkVehicle(this ParkingLotInitialization parking)
        {
            Console.WriteLine("Enter the vehicle type :\n\n1. Two Wheeler \n2. Four Wheeler\n3. Heavy Vehicle\n");
            Console.Write("Your Selection :  ");

            VechicleType selectedOption = (VechicleType)Enum.Parse(typeof(VechicleType), Console.ReadLine());
            var nearestSlot = parking.NearestSlot(selectedOption);
            if (nearestSlot != null) CreatingTicket(parking,selectedOption, nearestSlot);
        }
    }
}

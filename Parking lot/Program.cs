

using ParkingLot.Services;


public class Program
{
    public static void Main(string[] args)
    {           
        Console.WriteLine("Initializing a parking lot.\n");       

        Console.WriteLine("No of spaces to be allotted for Two Wheelers : ");
        int twoWheelerLimit = Convert.ToInt16(Console.ReadLine());


        Console.WriteLine("No of spaces to be allotted for Four Wheelers : ");
        int fourWheelerLimit = Convert.ToInt16(Console.ReadLine());

        Console.WriteLine("No of spaces to be allotted for Heavy Vehicles : ");
        int heavyWheelerLimit = Convert.ToInt16(Console.ReadLine());


        ParkingOperations Operations = new ParkingOperations(twoWheelerLimit, fourWheelerLimit, heavyWheelerLimit);

        Console.WriteLine("Parking Lot Menu - \n");

        while (true)
        {

            Console.WriteLine("1. See Parking Lot current occupancy details. \n2. Park Vehicle and Issue Ticket. \n3. Un-park Vehicle. \n4. History of Tickets \n5. Exit");
            Console.Write("Your Choice :  ");
            string selectedOption = Console.ReadLine();

            while(String.IsNullOrWhiteSpace(selectedOption))
            {
                Console.Write("Invalid Input Please select again  : ");
                selectedOption = Console.ReadLine();
            }

            switch (Convert.ToInt16(selectedOption))
            {
                case 1:
                    Operations.SlotAvailability();
                    break;

                case 2:
                    Operations.ParkVehicle();
                    break;

                case 3:
                    Operations.UnParkVehicle();
                    break;
                case 4:
                    Operations.LogOfTickets();
                    break;
                case 5:
                    Environment.Exit(0);
                    break;
                default:
                    Console.WriteLine("-----Invalid Selection-----\n");
                    break;
            }

        }
    }

        
}

using ParkingLot.Constants;


namespace ParkingLot.Services
{
    public static class SlotDetails
    {
        public static int CheckingAvailability(this ParkingOperations parking,VechicleType type, bool flag)
        {

            if (flag)
            {
                return parking.parkingSlots.Where(i => i.VehicleType == type).Count();
            }
            else
            {
                return parking.parkingSlots.Where(i => i.VehicleType == type && i.Avalibility == true).Count();
            }
        }

        public static void SlotAvailability(this ParkingOperations parking)
        {
            Console.WriteLine("Parking Lot Details  :  \nType             Total Slots           Remaining");
            Console.WriteLine("Two Wheeler       " + CheckingAvailability(parking,VechicleType.TwoWheeler, true) + "                     " + CheckingAvailability(parking, VechicleType.TwoWheeler, false));
            Console.WriteLine("Four Wheeler      " + CheckingAvailability(parking, VechicleType.FourWheeler, true) + "                     " + CheckingAvailability(parking, VechicleType.FourWheeler, false));
            Console.WriteLine("Heavy Wheeler     " + CheckingAvailability(parking, VechicleType.HeavyWheeler, true) + "                     " + CheckingAvailability(parking, VechicleType.HeavyWheeler, false) + "\n");
        }
    }
}

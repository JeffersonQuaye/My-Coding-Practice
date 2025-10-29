import java.util.Scanner;
import java.text.NumberFormat;

public class App {
    final static byte Month_In_Years = 12;
    final static byte Percent = 100;
    public static void main(String[] args) {
        NumberFormat currency = NumberFormat.getCurrencyInstance();

        int Principal = (int)readNumber("Principal: ", 1000, 1_000_000);
        float annualRate = (float)readNumber("Annual Interest Rate: ", 0, 30);
        int years = (int)readNumber("Period (Years): ", 0, 30);
    
        printMortgage(currency, Principal, annualRate, years);

        printPaymentSchedule(currency, Principal, annualRate, years);
    }

    private static void printMortgage(NumberFormat currency, int Principal, float annualRate, int years) {
        double mortgage = calculateMortgage(Principal, annualRate, years);
        System.out.println();
        System.out.println("Mortgage");
        System.out.println("--------");
        System.out.println("Your monthly payment is : " + currency.format(mortgage));
    }

    private static void printPaymentSchedule(NumberFormat currency, int Principal, float annualRate, int years) {
        System.out.println();
        System.out.println("Payment Schedule");
        System.out.println("----------------");
        for (short month = 1; month <= years * Month_In_Years; month++) {
            double balance = mortgageBalance(Principal, annualRate, years, month);
            System.out.println(currency.format(balance));
        }
    }

    //Mortgage Calculation Method
    public static double calculateMortgage(int Principal, float annualRate, int years){
        double mortgage;

        int totalMonths = years * Month_In_Years;
        float monthlyRate = annualRate / Percent / Month_In_Years;

        mortgage = Principal * ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) -1));    
        return mortgage;
    }

    //Prompt Generation Method
    public static double readNumber(String prompt, double min, double max){
        Scanner scanner  = new Scanner(System.in);
        float value;
        
        while (true) {
            System.out.print(prompt);
            value = scanner.nextFloat();
            if (value >= min && value <= max) {
                break;
            } else {
                System.out.println("Enter an number greater than " + min + " and less than or equal to " + max);
            }
        }
        return value;     
    }

    public static double mortgageBalance(int Principal, float annualRate, int years, int numberOfPayments ) {
        double balance = 0;

        int totalMonths = years * Month_In_Years;
        float monthlyRate = annualRate / Percent / Month_In_Years;

        balance = Principal * (Math.pow(1 + monthlyRate, totalMonths) - Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 +    monthlyRate, totalMonths) - 1);

        return balance;
    } 
}
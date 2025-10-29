using System;
using CSharpFundamentals.Maths;

namespace CSharpFundamentals
{
    class Program
    {
        static void Main(string[] args)
        {
            Person john = new Person();
            john.FirstName = "John";
            john.LastName = "Snow";
            john.Introduce();

            Calculator calculator = new Calculator();
            var result = calculator.Add(1,2);
            Console.Writeline(result);
        }
    }
}


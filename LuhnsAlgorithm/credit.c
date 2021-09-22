#include <cs50.h>
#include <stdio.h>
#include <math.h>


int main(void)
{

    long card_number = get_long("Number: ");
  

    int counter1 = 0;
    int counter2 = 0;

    long long temp_num1 = card_number;

    long long temp_num2 = (card_number - (card_number % 10)) / 10;


///last and every other digit
    while (temp_num1 > 0)
    {
        int digit = temp_num1 % 10;
        temp_num1 = (temp_num1 - digit) / 100;
        counter1 += digit;
    }


//first digits to check 
    int first_digit, first_two_digits;

//second to last digit and every other
    while (temp_num2 > 0)
    {
        int digit = temp_num2 % 10;
        temp_num2 = (temp_num2 - digit) / 100;



        if (digit * 2 > 9)
        {
            digit = ((digit * 2) % 10) + ((digit * 2) / 10);
            counter2 += digit;
        }
        else
        {
            counter2 += digit * 2;
        }



        if (temp_num2 > 0 && temp_num2 < 100)
        {
            first_digit = temp_num2 / 10;
        }

        if (temp_num2 > 0 && temp_num2 < 100)
        {
            first_two_digits = temp_num2;
        }
    }


//total which needs to be checked if ends with 0
    int total = counter1 + counter2;



//printig correct card names with conditions which need to be met in boolean

    if ((card_number >= 340000000000000 && card_number <= 379999999999999) && total % 10 == 0. && (first_two_digits == 34
            || first_two_digits == 37))
    {
        printf("AMEX\n");
    }
    else if ((card_number >= 5100000000000000 && card_number <= 5599999999999999) && total % 10 == 0)
    {
        printf("MASTERCARD\n");
    }
    else if ((card_number >= 1000000000000 && card_number <= 9999999999999999) && (first_digit == 4 || first_two_digits == 4)
             && total % 10 == 0)
    {
        printf("VISA\n");
    }
    else
    {
        printf("INVALID\n");
    }


}
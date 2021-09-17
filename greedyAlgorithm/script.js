#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)
{

    ///promt user to enter correct input, float or integer greater than 0.01
    float change;
    do
    {
        change = get_float("Change owned: ");

    }
    while (change < 0);

    //converting dolars to cents
    int cents = round(change * 100);

    //define counter for all for categories of coins

    int quarters = 0;
    int dimes = 0;
    int nickles = 0;
    int pennies = 0;

    //start looping through and subtract coins with adding 1 everytime the condition is met

    while (cents >= 25)
    {
        cents -= 25;
        quarters ++;
    }


    while (cents < 25 && cents >= 10)
    {
        cents -= 10;
        dimes ++;
    }


    while (cents < 10 && cents >= 5)
    {
        cents -= 5;
        nickles ++;
    }



    while (cents < 5 && cents > 0)
    {
        cents -= 1;
        pennies ++;
    }

    //summarizing all conuters to get total number of coins
    int sum = quarters + dimes + nickles + pennies;

    //printing total number of coins
    printf("%i\n",  sum);

}
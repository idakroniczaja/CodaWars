#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height;
    do
    {
        height = get_int("Height of the pyramid: ");

    }
    while (height < 1 || height > 8);

    for (int i = 1; i <= height; i++)
    {
        for (int k = height - 1; k >= i; k--)
        {
            printf(" ");
        }

        for (int j = 1; j <= i; j++)
        {
            printf("#");
            

         
        }
        printf("  ");
            
        for (int j = 1; j <= i; j++)
        {
            printf("#");
        }
            
            


        printf("\n");
    }

}
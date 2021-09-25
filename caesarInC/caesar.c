#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>


int main(int argc, string argv[])
{
    //checks whether the program was run with a single command-line argument
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    //checks if the argument is an integer
    else
    {

        // add 1 to the sum if character is digit, if all characters are digit that means sum has to be equal to the length of input
        int sum = 0;
        for (int i = 0, n = strlen(argv[1]); i < n; i++)
        {
            if (isdigit(argv[1][i]))
            {
                sum += 1;
            }
            else
            {
                sum += 0;
            }
        }


        if (sum == strlen(argv[1]))
        {
            int key = atoi(argv[1]);


            //prompting user to provide a text
            string plaintext = get_string("plaintext: ");
            //printf("%s\n", plaintext);
            string ciphertext = plaintext;

            //iterating over users input and converting each letter key
            for (int i = 0, n = strlen(plaintext); i < n; i++)
            {
                //checking if character is alpha, then chage it, otherwise leave the caracter as is
                if (isalpha(plaintext[i]))
                {
                    //Getting asci index for every character of the text
                    int asci_index = plaintext[i];

                    //checking if it is upper case and defining its place

                    if (isupper(plaintext[i]))
                    {
                        int c = (((asci_index - 65) + key) % 26) + 65;
                        ciphertext[i] = c;
                    }
                    //checking if it is upper case and defining its place
                    if (islower(plaintext[i]))
                    {
                        int c = (((asci_index - 97) + key) % 26) + 97;
                        printf("ciphertext: %c\n", c);
                        ciphertext[i] = c;
                    }

                }
                else
                {
                    plaintext[i] = plaintext[i];
                }
            }

            printf("ciphertext: %s\n", ciphertext);
        }
        else
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }



    }
}
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    //checking for correct argument
    if (argc != 2)
    {
        printf("Usage: ./recover image\n");
        return 1;
    }
    else
    {
      // Open card.raw
        char *input_name = argv[1];
        FILE *input_pointer = fopen(input_name, "r");

        if (input_pointer == NULL)
        {
            printf("Error: cannot open %s\n", input_name);
            return 2;
        }



       // Initialise variables
        BYTE buffer[512];
        int count = 0;
        FILE *output = NULL;
        char filename[8];


     // Repeat until end of card:
    while (fread(&buffer, 512, 1, input_pointer) == 1)
    {
         // If start of a new JPEG (0xff 0xd8 0xff 0xe*):
            if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
            {
                 // If not first JPEG, close previous
                if (!(count == 0))
                {
                    fclose(output);
                }
                      // Initialise file
                sprintf(filename, "%03i.jpg", count);
                output = fopen(filename, "w");
                count++;
            }

                // If JPEG has been found, write to file
            if (!(count == 0))
            {
                fwrite(&buffer, 512, 1, output);
            }

    }
        fclose(input_pointer);
        fclose(output);
        return 0;


    }

}


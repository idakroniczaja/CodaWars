// Modifies the volume of an audio file

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

// Number of bytes in .wav header
const int HEADER_SIZE = 44;

int main(int argc, char *argv[])
{
    // Check command-line arguments
    if (argc != 4)
    {
        printf("Usage: ./volume input.wav output.wav factor\n");
        return 1;
    }

    // Open files and determine scaling factor
    FILE *input = fopen(argv[1], "r");
    if (input == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    FILE *output = fopen(argv[2], "w");
    if (output == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    float factor = atof(argv[3]);

    // TODO: Copy header from input file to output file
    //1. Read header from input file
    //-create an arr of 44 integers of uint8_t to store header uint8_t header[n] and allocate ;
    uint8_t header[HEADER_SIZE];
    fread(header, HEADER_SIZE, 1, input);
    fwrite(header, HEADER_SIZE,1, output);


    int16_t buffer;



    // TODO: Read samples from input file and write updated data to output file
    //3. Read sample from input file
    while (fread(&buffer, sizeof(int16_t), 1, input))
    {
    //4. Multiply sample value by the volume factor

            buffer *= factor;

     fwrite(&buffer, sizeof(int16_t),1, output);
    }



    // Close files
    fclose(input);
    fclose(output);

}


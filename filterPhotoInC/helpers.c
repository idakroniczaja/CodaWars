#include "helpers.h"
#include <stdlib.h>
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    //Loop through height of image, each row of pixels
    for (int i = 0; i < height; i++)
    {
        //loop through width of image, each pixel is image[i][j]
        for (int j = 0; j < width; j++)
        {
            //calculate average value of color
            double avg = (image[i][j].rgbtBlue + image[i][j].rgbtGreen + image[i][j].rgbtRed ) / 3.0;
            //set each color to that value
            image[i][j].rgbtRed = image[i][j].rgbtBlue = image[i][j].rgbtGreen = round(avg);
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
     //looping over columns
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width / 2.00; j++)
        {
            RGBTRIPLE tmp = image[i][j];
            image[i][j] = image[i][width - 1 - j];
            image[i][width - 1 - j] = tmp;
        }
    }



    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{

    return;
}

// Detect edges
void edges(int height, int width, RGBTRIPLE image[height][width])
{
    return;
}


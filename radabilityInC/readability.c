#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    // Get input words from both players
    string text = get_string("Text: ");

    //Get numbers of letters in text
    int letters = count_letters(text);

    //Get number of words in text
    int words = count_words(text);

    //Get number of sentences in text
    int sentences = count_sentences(text);

    //Get Coleman-Liau index
    float L = (letters * 100) / (float) words;
    float S = (sentences * 100) / (float) words;

    float index = 0.0588 * L - 0.296 * S - 15.8;

    //Rounding to the nearest integer
    int grade = round(index);


    //Print grades depending on value of index
    if (grade >= 16)
    {
        printf("Grade 16+\n");
    }

    else if (grade < 1)
    {
        printf("Before Grade 1\n");
    }
    else
    {
        printf("Grade %i\n", grade);
    }


}


int count_sentences(string text)
{
    int sentence = 0;

    for (int i = 0, n = strlen(text); i < n; i++)
    {
        if (text[i] == '.' || text[i] == '?' || text[i] == '!')
        {
            sentence += 1;
        }
        else
        {
            sentence += 0;
        }
    }
    return sentence;
}

int count_words(string text)
{
    int words = 1;

    for (int i = 0, n = strlen(text); i < n; i++)
    {
        if (text[i] == ' ')
        {
            words += 1;
        }
        else
        {
            words += 0;
        }
    }
    return words;
}

int count_letters(string text)
{
    int letters = 0;

    for (int i = 0, n = strlen(text); i < n; i++)
    {
        if ((text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= 'a' && text[i] <= 'z'))
        {
            letters += 1;
        }
        else
        {
            letters += 0;
        }
    }
    return letters;
}
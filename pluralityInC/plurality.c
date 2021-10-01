include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct
{
    string name;
    int votes;
}
candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: plurality [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
    }

    int voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        // Check for invalid vote
        if (!vote(name))
        {
            printf("Invalid vote.\n");
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    // iterate over array of candidates, looking for a name
    for (int i = 0; i < candidate_count; i++)
    {
        //if you find it, update vote total by incrementing it by 1 and return true
        if (strcmp(candidates[i].name, name) == 0)
        {
            candidates[i].votes ++;
            return true;
        }
    }
    //if no candidate found, don't update vote total and return false

    return false;

}

// Print the winner (or winners) of the election
void print_winner(void)
{
    //defining greatest value, to start comparing from the first elem in array
    int max = candidates[0].votes;


    string winners[MAX];


    //iterate over the array of candidates
    for (int i = 0; i < candidate_count; i++)
    {
        //findind max value by comparing each element and if it is greater than previosu one, assign that value to max
        if (candidates[i].votes >= max)
        {
            max = candidates[i].votes;
        }

    }
    // Print the name of  the candidate who has the most votes
    //If ther is more than one candidates with most votes, print their names on separate lines

    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes == max)
        {
            winners[i] = candidates[i].name;
            printf("%s\n", winners[i]);

        }
    }


    return;
}

#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max voters and candidates
#define MAX_VOTERS 100
#define MAX_CANDIDATES 9

// preferences[i][j] is jth preference for voter i
int preferences[MAX_VOTERS][MAX_CANDIDATES];

// Candidates have name, vote count, eliminated status
typedef struct
{
    string name;
    int votes;
    bool eliminated;
}
candidate;

// Array of candidates
candidate candidates[MAX_CANDIDATES];

// Numbers of voters and candidates
int voter_count;
int candidate_count;

// Function prototypes
bool vote(int voter, int rank, string name);
void tabulate(void);
bool print_winner(void);
int find_min(void);
bool is_tie(int min);
void eliminate(int min);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: runoff [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX_CANDIDATES)
    {
        printf("Maximum number of candidates is %i\n", MAX_CANDIDATES);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
        candidates[i].eliminated = false;
    }

    voter_count = get_int("Number of voters: ");
    if (voter_count > MAX_VOTERS)
    {
        printf("Maximum number of voters is %i\n", MAX_VOTERS);
        return 3;
    }

    // Keep querying for votes
    for (int i = 0; i < voter_count; i++)
    {

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            // Record vote, unless it's invalid
            if (!vote(i, j, name))
            {
                printf("Invalid vote.\n");
                return 4;
            }
        }

        printf("\n");
    }


    // Keep holding runoffs until winner exists
    while (true)
    {
        // Calculate votes given remaining candidates
        tabulate();

        // Check if election has been won
        bool won = print_winner();
        if (won)
        {
            break;
        }

        // Eliminate last-place candidates
        int min = find_min();
        bool tie = is_tie(min);

        // If tie, everyone wins
        if (tie)
        {
            for (int i = 0; i < candidate_count; i++)
            {
                if (!candidates[i].eliminated)
                {
                    printf("%s\n", candidates[i].name);
                }
            }
            break;
        }

        // Eliminate anyone with minimum number of votes
        eliminate(min);

        // Reset vote counts back to zero
        for (int i = 0; i < candidate_count; i++)
        {
            candidates[i].votes = 0;
        }
    }
    return 0;
}


// Record preference if vote is valid
bool vote(int voter, int rank, string name)
{

       // Look for a candidate called name from array of candidates
       for (int i = 0; i < candidate_count; i++)
       {
            // If candidate found,
            if (strcmp(candidates[i].name, name) == 0)
            {
                //update preferences so that they are the voter's rank preference, and return true
                preferences[voter][rank] = i;
                //printf("prferences %i\n", preferences[voter][rank]);
                return true;
            }
       }

    // If no candidate found, don't update any preferene and return false
    return false;
}

// Tabulate votes for non-eliminated candidates
void tabulate(void)
{

    // go over preferences array (rows)


     for (int i = 0; i < voter_count; i++)
     {
         //check first ranked candidate for each voter
         //if candidate has not been eliminated, add vote to the candidate of 1sr rank

                int prefered_candidate = preferences[i][0];

             if (candidates[prefered_candidate].eliminated == false)
             {
                 candidates[prefered_candidate].votes ++;

             }
         //if candidate on first place has been eliminated, go to the next candidate which has not been eliminated
             else
             {
                prefered_candidate = preferences[i][1];
                candidates[prefered_candidate].votes ++;
             }
     }


    return;
}

// Print the winner of the election, if there is one
bool print_winner(void)
{
    // if candidate has more than half the votes, print winners name and return true
    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes > voter_count / 2)
        {
            printf("%s\n", candidates[i].name);
            return true;
        }

    }

    //else if nobodu has won return false
    return false;
}

// Return the minimum number of votes any remaining candidate has
int find_min(void)
{
    int min;
    // loop through candidates
    for (int i = 0; i < candidate_count; i++)
    {

         min = candidates[0].votes;

        if (candidates[i].votes <= min && candidates[i].eliminated == false)
        {
            min = candidates[i].votes;
        }
        else
        {
            min = candidates[i - 1].votes;
        }
    }
    return min;
}

// Return true if the election is tied between all candidates, false otherwise
bool is_tie(int min)
{
    int count_remaining_candidates = 0;
    int count_votes_equal_to_min = 0;

    for (int i = 0; i < candidate_count; i++)
    {
         if (candidates[i].votes == min)
         {
             count_votes_equal_to_min ++;
         }

         if (candidates[i].eliminated == false)
         {
             count_remaining_candidates ++;
         }

    }

         //if  all remaining candidates have votes equal to min return true
    if (count_remaining_candidates == count_votes_equal_to_min)
    {
        return true;
    }

    //returns false if election is not tied between all remaining candidates
        else return false;


}

// Eliminate the candidate (or candidates) in last place
void eliminate(int min)
{
    // iterate over candidates
     for (int i = 0; i < candidate_count; i++)
     {
         //find candidate with min votes
         if (candidates[i].votes == min)
         {
             //and set eliminate to true
             candidates[i].eliminated = true;
             candidates[i].votes = 0;
         }

     }

    return;
}

#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import random


def get_player_move():
    """Asks the user to enter a move as 'r', 'p', or 's', and return it"""
    return raw_input("Choose your move [r|p|s]: ").lower()


def get_computer_move():
    """Randomly generates the computer's move and
    returns it in the form of 'r', 'p', or 's'"""
    return "rps"[random.randint(0,2)]


def determine_winner(player_move, comp_move):
    """Takes in a player move and computer move each as 'r', 'p', or 's',
    and returns the winner as 'player', 'computer', or 'tie'"""
    if player_move == comp_move:
        return "tie"
    elif (player_move == "r" and comp_move == "s") or \
         (player_move == "s" and comp_move == "p") or \
         (player_move == "p" and comp_move == "r"):
        return "player"
    else:
        return "computer"


def print_scoreboard(player_wins, comp_wins, ties):
    """Prints out the scoreboard neatly.  Returns nothing."""
    print("Player Score: %s" % player_wins)
    print("Computer Score: %s" % comp_wins)
    print("Ties: %s" % ties)


def get_move_name(short_move):
    """Takes in 'r', 'p', or 's', and returns 'Rock', 'Paper, or
    'Scissors' respectively. Use this to neatly print move choices"""
    if short_move == 'r':
        return "Rock"
    elif short_move == 'p':
        return "Paper"
    else:
        return "Scissors"

#Simulates a game of rock paper scissors
def play_game():

    number_rounds = raw_input("How many rounds would you like to play?: ") #Ask the user how many rounds they would like to play
    computerScore = 0 #Create a variable to keep track of the computer's score
    playerScore = 0 #Create a variable to keep track of the player's score
    ties = 0 #Create a variable to keep track of the number of ties

    for i in range(int(number_rounds)): #The for loop uses range() to run a number of times equal to the number of rounds the user wanted to play
        playMove = get_player_move() #Gets the player's move and stores it
        print ("Player move: " + get_move_name(playMove)) #Prints the stored player move for readability

        computerMove = get_computer_move() #Gets the computer's move and stores i
        print ("Computer move: " + get_move_name(computerMove)) #Prints the stored computer's move for readability

        winner = determine_winner(playMove, computerMove) #Determines the winner and stores it in a variable "winner"
        #String comparisons to compare with the return value of determine_winner (stored in winner)
        if (winner == "computer"):
            computerScore = computerScore+1
        elif (winner =="player"):
            playerScore = playerScore+1
        else:
            ties = ties+1

    print (" ") #break line
    print_scoreboard(playerScore, computerScore, ties) #Prints the scoreboard outside of the for loop, that is after all rounds have been played

#-------------------------------------------------------------------------------------------------------------------------------------------------------
play_game() #Calls the actual function to play the game

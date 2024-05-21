# OVERVIEW
I started off with the base functionality of making the rps functional for 1
round. Then I made it workable with 3 rounds (best of 5) by putting it inside of a loop.
Although I started the process with PEDAC, it got messy quickly after I started
adding bug fixes and started getting new ideas for features.

I struggled a lot with code organization here. Much like writing an essay, good
code is written clearly and concisely. Part of this requires knowing when to
extract out logic into its own object/function. I need to work on this.

I also did PEDAC for one round of RPS. After I finished that and I went to
implement the logic for a full game (3 rounds) and found my initial planning to
have been inadequate. I heard this happens for bigger programs so in the future,
maybe I should implement multiple PEDACS by 1st breaking down into its biggest
chunks. 

## LESSONS
- naming Functions
- Code File organization
  - divided into section
- Git Tag to add milestones (v1.0) for instance
- Extracting logic into its own object & knowing when to do this
  - Not my own idea. I got it by looking at someone else's code review and the
    TA's comment

# PRECODE
## PROB
- `Input`: {string} userChoice, {string} computerChoice
  - rock, paper, scissors, lizard, spock
- `Output`: {string} result of who won rock paper scissors

### RULES
- rock > scissors
- rock > lizard
- paper > rock
- paper > spock
- scissors > paper
- scissors > lizard
- spock > rock
- spock > scissors
- lizard > paper
- lizard > spock

## EX
### BASE CASES
```
- playRPS('rock','scissors') => 'user wins'
- playRPS('rock','rock') => "stalemate. It's a tie"
- playRPS('rock', 'paper') => 'Computer wins. You lose.'
```

### EDGE CASES
- input is not a valid response. Valid responses include ['rock','paper','scissors', 'spock', 'lizard']
```
- playRPS('ro', 'sci') => 'user wins'
- playRPS(1, 2) => reprompt for valid response
```

## DATA
### STRUCTURES
- `Array: MOVES

### OTHER VARS
- userChoice
- computerChoice

## IP (Informal Pseudocode)

### HIGH-LEVEL
- Main Process: playRPS(userChoice, computerChoice)
```
- GET input from user
+ SET $userChoice = input
  ~ WHILE userChoice is Invalid (*SUBPROCESS*) 
    - GET input from user
    = SET userChoice = input
+ SET $computerChoice
= SET $computerChoice randomly(*SUBPROCESS*)
- Compare userChoice to computerChoice (*SUBPROCESS*)
+ PRINT result 
- Ask user if they want to play again
```

### SUB-PROCESSES
#### UX Enhancements
- displayMessage
  * adds => to messages
- displayWinner
- displayRules (advanced, opt)
  * if user types in 'rule' => show the rules  
- type rules to get the rules anytime

#### Validation
- isValidResponse(response)
  * checks to see if entered input is valid
- isValidYes

#### CORE FUNCTIONALITY
- getUserChoice()
- getComputerChoice()
  * generate random number between 1-5
- getWinner()
  * generate winner from game

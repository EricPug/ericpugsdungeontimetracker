# Eric Pug's Dungeon Time Tracker

A Foundry VTT module for tracking time during dungeon crawls. 

Keep track of turns, calculate elapsed time, current time, and create a log of the action.

Designed for Old-School Essentials

![image](https://github.com/user-attachments/assets/1cae8059-449f-47d0-a077-aee6832e07f5)


## Features
- **Turn Tracker**: Check off turns as they pass.
- 1 Sheet = 24 hours of dungeon time.
- **Time Started**: Set the hour your party entered the dungeon with the dropdown.
- **Total Elapsed Time**: Time spent in the dungeon is calculated from the checked boxes.
- **Current Time**: Shows the in-game time (e.g., "18:30" or "06:00 Day 2") based on start time + elapsed turns.
- **Referee's Notes**: Text area for logging events
- "Add Time" button to add the current time to the notes automatically.
- **Persistent**: All data saves to the actor.

## Installation
1. **Download**: Get the latest zip from [Releases](https://github.com/EricPug/ericpugsdungeontimetracker/releases) (or clone this repo).
2. **Extract**: Unzip to `FoundryVTT/Data/modules/ericpugsdungeontimetracker`.
3. **Enable**: In Foundry VTT, go to *Game Settings > Manage Modules*, enable "Eric Pug's Dungeon Time Tracker".
4.a **Add Actor**: Create an actor open its sheet, and select this tracker from the sheet options.
4.b **Add from compendium**: Create a copy from the included compendium.

## Usage
- **Set Start Time**: Pick the hour your party enters 'dungeon time'.
- **Track Turns**: Check boxes as turns pass.
- **Watch Time**: "Total Elapsed Time" and "Current Time" update automatically.
- **Timed Events**: Torches burn out, the party must rest, wandering monsters are checked... it's all marked right there.
- **Log Events**: Click "Add Time" to stamp the current time in "Referee's Notes", then type what happened (e.g., "08:40 Day 2 Giant slug ate a mule").
- **Long dungeon delve?**: Create a new actor for a fresh tracker for each day.
- **End of game session log**: Copy the text out of the Referee's Notes for a record of what happened.

- **Day Two?**: Each sheet has 1 day of checkboxes. If the time elapsed rolls over midnight, then the sheet prints the time plus "Day 2".



## License
This work is licensed under a Creative Commons Attribution 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/

Attribution: EricPug (https://github.com/EricPug)

---
Made with grit and caffeine by EricPug.

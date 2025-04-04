# Eric Pug's Dungeon Time Tracker

A Foundry VTT module for tracking time and events in your dungeon crawls. 
Designed for Old-School Essentials, it keeps track of turns, calculates elapsed time, current time, and a log of the action. 
Each checkbox is a 10-minute turn—tick them off, watch the clock, and log what happens.
When a day passes, make a new tracker.
At the end of a session, copy out all the logs.

## Features
- **Turn Tracker**: 144 checkboxes (6x4x6 grid) for 24 hours of dungeon time. Mark turns as they pass.
- **Time Started**: Set the hour your party entered (00:00 to 23:00) via a dropdown.
- **Total Elapsed Time**: Calculates time spent in the dungeon (e.g., "2 hours, 30 minutes") from checked boxes.
- **Current Time**: Shows the in-game time (e.g., "18:30" or "06:00 Day 2") based on start time + elapsed turns.
- **Referee's Notes**: Text area for logging events, with an "Add Time" button to add the current time.
- **Persistent**: All data saves to the actor’s flags.



![image](https://github.com/user-attachments/assets/29257af2-cd2d-4b84-b24f-235adf16289c)




## Installation
1. **Download**: Grab the latest zip from [Releases](https://github.com/EricPug/ericpugsdungeontimetracker/releases) (or clone this repo).
2. **Extract**: Unzip to `FoundryVTT/Data/modules/ericpugsdungeontimetracker`.
3. **Enable**: In Foundry VTT, go to *Game Settings > Manage Modules*, enable "Eric Pug's Dungeon Time Tracker".
4. **Add Actor**: Create an actor (character or NPC), open its sheet, and select this tracker from the sheet options.

## Usage
- **Open the Sheet**: Assign it to an actor and open it up.
- **Set Start Time**: Pick the hour your party enters 'dungeon time' (e.g., "18:00").
- **Track Turns**: Check boxes as turns pass—each is 10 minutes.
- **Watch Time**: "Total Elapsed Time" and "Current Time" update automatically.
- **Timed Events**: Torches burn out, the party must rest, wandering monsters are checked... it's all marked right there.
- **Log Events**: Click "Add Time" to stamp the current time in "Referee's Notes", then type what happened (e.g., "08:40 Day 2 Giant slug ate a mule").
- **New Session?**: Create a new actor for a fresh tracker—notes and times persist per instance.

- **Day Two?**: Each sheet has 1 day of checkboxes. If the time elapsed rolls over midnight, then the sheet prints the time plus "Day 2". You could of course start a new sheet if you want.

## Why It Exists
Dungeon crawling—tracking turns manually kind of sucks. And so often people wonder 'how long have we been down here?' or 'what time is it'. 
And I don't want to bother counting turns and doing the math.
Plus I needed a log that kept track of what was going on... **while things were going on.**

## License
MIT License.

---
Made with grit and caffeine by EricPug.

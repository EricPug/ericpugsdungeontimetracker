# Eric Pug's Dungeon Time Tracker

A Foundry VTT module for tracking time and events in your dungeon crawls.

Designed for Old-School Essentials, it keeps track of turns, calculates elapsed time, current time, and a log of the action. 

Each checkbox is a 10-minute turn—tick them off, watch the clock, and log what happens.

When a day passes, make a new tracker.

At the end of a session, copy out all the Referee's Notes.

## Features
- **Turn Tracker**: 1 Sheet = 144 checkboxes = 24 hours of dungeon time.
- Check off turns as they pass.
- **Time Started**: Set the hour your party entered the dungeon with the dropdown.
- **Total Elapsed Time**: Calculates time spent in the dungeon is calculated for you from the checked boxes.
- **Current Time**: Shows the in-game time (e.g., "18:30" or "06:00 Day 2") based on start time + elapsed turns.
- **Referee's Notes**: Text area for logging events,
- "Add Time" button to add the current time to the notes automatically.
- **Persistent**: All data saves to the actor.


![image](https://github.com/user-attachments/assets/e5ed3364-3d84-4bf4-afe2-5b1171cf9397)


## Installation
1. **Download**: Get the latest zip from [Releases](https://github.com/EricPug/ericpugsdungeontimetracker/releases) (or clone this repo).
2. **Extract**: Unzip to `FoundryVTT/Data/modules/ericpugsdungeontimetracker`.
3. **Enable**: In Foundry VTT, go to *Game Settings > Manage Modules*, enable "Eric Pug's Dungeon Time Tracker".
4. **Add Actor**: Create an actor open its sheet, and select this tracker from the sheet options.

## Usage
- **Set Start Time**: Pick the hour your party enters 'dungeon time'.
- **Track Turns**: Check boxes as turns pass—each is 10 minutes.
- **Watch Time**: "Total Elapsed Time" and "Current Time" update automatically.
- **Timed Events**: Torches burn out, the party must rest, wandering monsters are checked... it's all marked right there.
- **Log Events**: Click "Add Time" to stamp the current time in "Referee's Notes", then type what happened (e.g., "08:40 Day 2 Giant slug ate a mule").
- **Long dungeon delve?**: Create a new actor for a fresh tracker for each day.
- **End of game session log**: Copy the text out of the Referee's Notes for a record of what happened.

- **Day Two?**: Each sheet has 1 day of checkboxes. If the time elapsed rolls over midnight, then the sheet prints the time plus "Day 2". You could of course start a new sheet if you want.

## Why It Exists
Tracking turns manually sucks. So often people wonder 'how long have we been down here?' or 'what time is it?'. 
I don't want to bother counting turns and figuring it out.
Plus I needed a log that kept track of what was going on... **while things were going on.**

## License
MIT License.

---
Made with grit and caffeine by EricPug.

# Eric Pug's Dungeon Time Tracker

A Foundry VTT module for tracking time and events in your dungeon crawls. Designed for old-school play (like Old-School Essentials), it keeps tabs on turns, elapsed time, and referee notes with zero fuss. Each checkbox is a 10-minute turn—tick them off, watch the clock, and log what happens.

## Features
- **Turn Tracker**: 144 checkboxes (6x4x6 grid) for 24 hours of dungeon time. Mark turns as they pass.
- **Time Started**: Set the hour your party entered (00:00 to 23:00) via a dropdown.
- **Total Elapsed Time**: Auto-calculates time spent (e.g., "2 hours, 30 minutes") from checked boxes.
- **Current Time**: Shows the in-game time (e.g., "18:30" or "06:00 Day 2") based on start time + elapsed turns.
- **Referee's Notes**: Text area for logging events, with an "Add Time" button to stamp the current time at the bottom (e.g., "07:20 Day 2\nThief died by poisoned dagger").
- **Persistent**: All data (checkboxes, start time, notes) saves to the actor’s flags—new instances start fresh.

## Installation
1. **Download**: Grab the latest zip from [Releases](https://github.com/EricPug/ericpugsdungeontimetracker/releases) (or clone this repo).
2. **Extract**: Unzip to `FoundryVTT/Data/modules/ericpugsdungeontimetracker`.
3. **Enable**: In Foundry VTT, go to *Game Settings > Manage Modules*, enable "Eric Pug's Dungeon Time Tracker".
4. **Add Actor**: Create an actor (character or NPC), open its sheet, and select this tracker from the sheet options.

## Usage
- **Open the Sheet**: Assign it to an actor and open it up.
- **Set Start Time**: Pick the hour your party enters (e.g., "18:00").
- **Track Turns**: Check boxes as turns pass—each is 10 minutes.
- **Watch Time**: "Total Elapsed Time" and "Current Time" update automatically.
- **Log Events**: Click "Add Time" to stamp the current time in "Referee's Notes", then type what happened (e.g., "08:40 Day 2\nGiant slug evaded").
- **New Session?**: Create a new actor for a fresh tracker—notes and times persist per instance.

## Why It Exists
Born from the chaos of dungeon crawling—tracking turns manually sucks, and we needed a log that didn’t break. It’s a referee’s best friend for old-school games.

## License
MIT License—use it, tweak it, share it. Do what you want, just don’t sue me.

---
Made with grit and caffeine by EricPug.

class EricPugsDungeonTimeTracker extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["sheet", "actor", "ericpugs-dungeon-time-tracker"],
      template: "modules/ericpugsdungeontimetracker/templates/ericpugs-dungeon-tracker.html",
      width: 850,
      height: 900,
      resizable: true,
      title: "Eric Pug's Dungeon Time Tracker"
    });
  }

  async getData() {
    const data = await super.getData();

    // ✅ Set custom icon once if still using Foundry's default
    if (this.actor.img === "icons/svg/mystery-man.svg" && !this.actor.getFlag("ericpugsdungeontimetracker", "iconSet")) {
      await this.actor.update({ 
        img: "modules/ericpugsdungeontimetracker/images/icon.png"
      });
      await this.actor.setFlag("ericpugsdungeontimetracker", "iconSet", true);
    }

    let tracker = [];
    let checkedCount = 0;
    for (let row = 0; row < 6; row++) {
      let rowData = [];
      for (let col = 0; col < 4; col++) {
        let groupData = [];
        for (let checkbox = 0; checkbox < 6; checkbox++) {
          const checked = this.actor.getFlag("ericpugsdungeontimetracker", `tracker.${row}.${col}.${checkbox}`) || false;
          groupData.push(checked);
          if (checked) checkedCount++;
        }
        rowData.push(groupData);
      }
      tracker.push(rowData);
    }
    data.tracker = tracker;
    data.notes = this.actor.getFlag("ericpugsdungeontimetracker", "notes") || "";

    // Time Started
    data.startHour = this.actor.getFlag("ericpugsdungeontimetracker", "startHour") || "00:00";
    data.hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);

    // Total Elapsed Time
    const totalMinutes = checkedCount * 10;
    const elapsedHours = Math.floor(totalMinutes / 60);
    const elapsedMinutes = totalMinutes % 60;
    data.elapsedTime = elapsedHours > 0 ? `${elapsedHours} hour${elapsedHours > 1 ? "s" : ""}, ${elapsedMinutes} minute${elapsedMinutes !== 1 ? "s" : ""}` : `${elapsedMinutes} minute${elapsedMinutes !== 1 ? "s" : ""}`;

    // Current Time
    const startHourNum = parseInt(data.startHour.split(":")[0]);
    const totalHours = startHourNum + elapsedHours;
    const currentHour = totalHours % 24;
    const currentMinutes = elapsedMinutes;
    const day = Math.floor(totalHours / 24) + 1;
    data.currentTime = `${currentHour.toString().padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}${day > 1 ? ` Day ${day}` : ""}`;

    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find(".tracker-checkbox").off("change").on("change", async (event) => {
      const row = event.currentTarget.dataset.row;
      const col = event.currentTarget.dataset.col;
      const checkboxIndex = event.currentTarget.dataset.checkboxIndex;
      const checked = event.currentTarget.checked;
      await this.actor.setFlag("ericpugsdungeontimetracker", `tracker.${row}.${col}.${checkboxIndex}`, checked);
    });

    html.find("#referee-notes").off("blur").on("blur", async (event) => {
      const notes = event.currentTarget.value;
      await this.actor.setFlag("ericpugsdungeontimetracker", "notes", notes);
    });

    html.find("#start-time").off("change").on("change", async (event) => {
      const startHour = event.currentTarget.value;
      await this.actor.setFlag("ericpugsdungeontimetracker", "startHour", startHour);
    });

    html.find(".insert-time").off("click").on("click", async (event) => {
      event.preventDefault();
      // Recalculate current time
      let checkedCount = 0;
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
          for (let checkbox = 0; checkbox < 6; checkbox++) {
            if (this.actor.getFlag("ericpugsdungeontimetracker", `tracker.${row}.${col}.${checkbox}`)) checkedCount++;
          }
        }
      }
      const totalMinutes = checkedCount * 10;
      const elapsedHours = Math.floor(totalMinutes / 60);
      const elapsedMinutes = totalMinutes % 60;
      const startHour = this.actor.getFlag("ericpugsdungeontimetracker", "startHour") || "00:00";
      const startHourNum = parseInt(startHour.split(":")[0]);
      const totalHours = startHourNum + elapsedHours;
      const currentHour = totalHours % 24;
      const day = Math.floor(totalHours / 24) + 1;
      const currentTime = `${currentHour.toString().padStart(2, "0")}:${elapsedMinutes.toString().padStart(2, "0")}${day > 1 ? ` Day ${day}` : ""}`;

      // Append to notes
      const notes = this.actor.getFlag("ericpugsdungeontimetracker", "notes") || "";
      const newNotes = notes + (notes ? "\n" : "") + currentTime + "\n";
      await this.actor.setFlag("ericpugsdungeontimetracker", "notes", newNotes);
      html.find("#referee-notes").val(newNotes);
    });
  }
}

Hooks.once("init", () => {
  Actors.registerSheet("core", EricPugsDungeonTimeTracker, {
    types: ["character", "npc"],
    makeDefault: false,
    label: "Eric Pug's Dungeon Time Tracker"
  });
});

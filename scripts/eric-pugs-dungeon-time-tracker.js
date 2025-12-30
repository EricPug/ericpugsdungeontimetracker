class EricPugsDungeonTimeTracker extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["sheet", "actor", "ericpugs-dungeon-time-tracker"],
      template: "modules/eric-pugs-dungeon-time-tracker/templates/eric-pugs-dungeon-time-tracker.html",
      width: 640,
      height: 640,
      resizable: true,
      title: "Eric Pug's Dungeon Time Tracker"
    });
  }

  async getData() {
    const data = await super.getData();

    if (this.actor.img === "icons/svg/mystery-man.svg" && !this.actor.getFlag("eric-pugs-dungeon-time-tracker", "iconSet")) {
      await this.actor.update({ 
        img: "modules/eric-pugs-dungeon-time-tracker/images/icon.png"
      });
      await this.actor.setFlag("eric-pugs-dungeon-time-tracker", "iconSet", true);
    }

    let tracker = [];
    let checkedCount = 0;
    for (let row = 0; row < 6; row++) {
      let rowData = [];
      for (let col = 0; col < 4; col++) {
        let groupData = [];
        for (let checkbox = 0; checkbox < 6; checkbox++) {
          const checked = this.actor.getFlag("eric-pugs-dungeon-time-tracker", `tracker.${row}.${col}.${checkbox}`) || false;
          groupData.push(checked);
          if (checked) checkedCount++;
        }
        rowData.push(groupData);
      }
      tracker.push(rowData);
    }
    data.tracker = tracker;
    data.notes = this.actor.getFlag("eric-pugs-dungeon-time-tracker", "notes") || "";

    // Time Started
    data.startHour = this.actor.getFlag("eric-pugs-dungeon-time-tracker", "startHour") || "00:00";
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

    // Handle tab switching
    html.find(".tab-button").off("click").on("click", (event) => {
      event.preventDefault();
      const tabName = event.currentTarget.dataset.tab;
      
      // Remove active class from all buttons and content
      html.find(".tab-button").removeClass("active");
      html.find(".tab-content").removeClass("active");
      
      // Add active class to clicked button and corresponding content
      html.find(`.tab-button[data-tab="${tabName}"]`).addClass("active");
      html.find(`.tab-content[data-tab-content="${tabName}"]`).addClass("active");
    });

    html.find(".tracker-checkbox").off("change").on("change", async (event) => {
      const row = event.currentTarget.dataset.row;
      const col = event.currentTarget.dataset.col;
      const checkboxIndex = event.currentTarget.dataset.checkboxIndex;
      const checked = event.currentTarget.checked;
      await this.actor.setFlag("eric-pugs-dungeon-time-tracker", `tracker.${row}.${col}.${checkboxIndex}`, checked);
    });

    html.find("#referee-notes").off("blur").on("blur", async (event) => {
      const notes = event.currentTarget.value;
      await this.actor.setFlag("eric-pugs-dungeon-time-tracker", "notes", notes);
    });

    html.find("#start-time").off("change").on("change", async (event) => {
      const startHour = event.currentTarget.value;
      await this.actor.setFlag("eric-pugs-dungeon-time-tracker", "startHour", startHour);
    });

    html.find(".insert-time").off("click").on("click", async (event) => {
      event.preventDefault();
      // Recalculate current time
      let checkedCount = 0;
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
          for (let checkbox = 0; checkbox < 6; checkbox++) {
            if (this.actor.getFlag("eric-pugs-dungeon-time-tracker", `tracker.${row}.${col}.${checkbox}`)) checkedCount++;
          }
        }
      }
      const totalMinutes = checkedCount * 10;
      const elapsedHours = Math.floor(totalMinutes / 60);
      const elapsedMinutes = totalMinutes % 60;
      const startHour = this.actor.getFlag("eric-pugs-dungeon-time-tracker", "startHour") || "00:00";
      const startHourNum = parseInt(startHour.split(":")[0]);
      const totalHours = startHourNum + elapsedHours;
      const currentHour = totalHours % 24;
      const day = Math.floor(totalHours / 24) + 1;
      const currentTime = `${currentHour.toString().padStart(2, "0")}:${elapsedMinutes.toString().padStart(2, "0")}${day > 1 ? ` Day ${day}` : ""}`;

      // Append to notes
      const notes = this.actor.getFlag("eric-pugs-dungeon-time-tracker", "notes") || "";
      const newNotes = notes + (notes ? "\n" : "") + currentTime + "\n";
      await this.actor.setFlag("eric-pugs-dungeon-time-tracker", "notes", newNotes);
      html.find("#referee-notes").val(newNotes);
    });
  }
}

// Preload the template during init
Hooks.once("init", async () => {
  await loadTemplates(["modules/eric-pugs-dungeon-time-tracker/templates/eric-pugs-dungeon-time-tracker.html"]);
  Actors.registerSheet("core", EricPugsDungeonTimeTracker, {
    types: ["character", "npc"],
    makeDefault: false,
    label: "Eric Pug's Dungeon Time Tracker"
  });
});
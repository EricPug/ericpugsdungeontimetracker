class EricPugsDungeonTimeTracker extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["sheet", "actor", "ericpugs-dungeon-time-tracker"],
      template: "modules/ericpugsdungeontimetracker/templates/ericpugs-dungeon-tracker.html",
      width: 1000,
      height: 1000,
      resizable: true,
      title: "Eric Pug's Dungeon Time Tracker"
    });
  }

  getData() {
    const data = super.getData();
    let tracker = [];
    for (let row = 0; row < 6; row++) {
      let rowData = [];
      for (let col = 0; col < 4; col++) {
        let groupData = [];
        for (let checkbox = 0; checkbox < 6; checkbox++) {
          const checked = this.actor.getFlag("ericpugsdungeontimetracker", `tracker.${row}.${col}.${checkbox}`) || false;
          groupData.push(checked);
        }
        rowData.push(groupData);
      }
      tracker.push(rowData);
    }
    data.tracker = tracker;
    data.notes = this.actor.getFlag("ericpugsdungeontimetracker", "notes") || "";
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
  }
}

Hooks.once("init", () => {
  Actors.registerSheet("core", EricPugsDungeonTimeTracker, {
    types: ["character", "npc"],
    makeDefault: false,
    label: "Eric Pug's Dungeon Time Tracker"
  });
});
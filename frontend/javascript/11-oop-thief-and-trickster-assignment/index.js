const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  //## Thief
  //
  // 1. Class `Thief` yang memiliki properti tambahan job dengan value thief, dan skill tambahan `robbedBlind` berupa function.
  //
  // 2. `robbedBlind` memiliki efek mengubah stealChance menjadi 75% dengan membayar 10 gold.
  //    - Apabila gold player (sendiri) kurang dari 10 gold, kembalikan message "Aku terlalu miskin"
  robbedBlind() {
    // TODO: answer here
    if (this.getGold() < 10) {
      return "Aku terlalu miskin";
    }
    this.setGold(this.getGold() - 10);
    this.setStealChance(0.75);
  }

  steal(player) {
    // TODO: answer here
    if (player.gold < 5) {
      return "Lawan terlalu miskin";
    }

    if (this.randomizer() < this.getStealChance()) {
      player.setGold(player.getGold() - 5);
      this.setGold(this.getGold() + 5);

      if (player.job === "Trickster") {
        return player.distractionPurse(this);
      }

      player.setHasBeenRobbed(true);
      return "Berhasil mencuri 5 gold";
    } else {
      this.setHasBeenRobbed(false);
      return "Gagal mencuri, coba lain kali";
    }
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance;
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance;
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    // TODO: answer here
    if (rng < this.distractionPurseChance) {
      if (player.getGold() < 10) {
        this.setGold(player.getGold());
        player.setGold(0);
        return "Berhasil mencuri balik semua uang lawan";
      }
      player.setGold(player.getGold() - 10);
      this.setGold(this.getGold() + 10);

      return "Berhasil mencuri balik 10 gold";
    }
    return "Gagal mencuri balik";
  }

  steal(player) {
    // TODO: answer here
    if (player.gold < 5) {
      return "Lawan terlalu miskin";
    }

    if (this.randomizer() < this.getStealChance()) {
      player.setGold(player.getGold() - 5);
      this.setGold(this.getGold() + 5);

      if (player.job === "Trickster") {
        return player.distractionPurse(this);
      }

      player.setHasBeenRobbed(true);
      return "Berhasil mencuri 5 gold";
    } else {
      this.setHasBeenRobbed(false);
      return "Gagal mencuri, coba lain kali";
    }
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};

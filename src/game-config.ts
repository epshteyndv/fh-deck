export interface CardConfig {
  name: string;
}

export interface CharacterConfig {
  name: string;
  cover: string;
  maxCards: number;
  cards: CardConfig[]
}

export interface GameConfig {
  [id: string]: CharacterConfig
}

export const characters: GameConfig = {
  "bn": {
    name: "Banner Spear",
    cover: "fh-bn-back",
    maxCards: 10,
    cards: [
      {name: "fh-at-all-costs"},
      {name: "fh-combined-effort"},
      {name: "fh-deflecting-maneuver"},
      {name: "fh-javelin"},
      {name: "fh-pincer-movement"},
      {name: "fh-rallying-cry"},
      {name: "fh-regroup"},
      {name: "fh-set-for-the-charge"},
      {name: "fh-tip-of-the-spear"},
      {name: "fh-unbreakable-wall"},
      {name: "fh-driving-inspiration"},
      {name: "fh-incendiary-throw"},
      {name: "fh-resolved-courage"},
      {name: "fh-meat-grinder"},
      {name: "fh-pinning-charge"},
      {name: "fh-head-of-the-hammer"},
      {name: "fh-let-them-come"},
      {name: "fh-air-support"},
      {name: "fh-boldening-blow"},
      {name: "fh-explosive-epicenter"},
      {name: "fh-hold-the-line"},
      {name: "fh-barricade"},
      {name: "fh-bolstering-shout"},
      {name: "fh-lead-from-afar"},
      {name: "fh-tri-thrust"},
      {name: "fh-sweeping-aid"},
      {name: "fh-taunting-howl"},
      {name: "fh-hail-of-spears"},
      {name: "fh-take-no-prisoners"},
    ]
  },
  "pc": {
    name: "Pain Conduit",
    cover: "fh-pc-back",
    maxCards: 10,
    cards: [
      { name: "fh-blood-ritual"},
      { name: "fh-cleansing-fire"},
      { name: "fh-explosive-wounds"},
      { name: "fh-line-of-transference"},
      { name: "fh-scarred-effigy"},
      { name: "fh-shared-affliction"},
      { name: "fh-swift-vengeance"},
      { name: "fh-the-agony-of-others"},
      { name: "fh-transferred-injury"},
      { name: "fh-unending-torment"},
      { name: "fh-delayed-malady"},
      { name: "fh-pleasure-in-pain"},
      { name: "fh-unstable-effigy"},
      { name: "fh-infection-purge"},
      { name: "fh-reversal-of-fate"},
      { name: "fh-burned-at-both-ends"},
      { name: "fh-reprisal"},
      { name: "fh-down-to-the-dirt"},
      { name: "fh-mirrored-misery"},
      { name: "fh-chained-by-despair"},
      { name: "fh-chained-by-spite"},
      { name: "fh-hopelessness"},
      { name: "fh-phantom-limb"},
      { name: "fh-penance"},
      { name: "fh-reject-the-gift"},
      { name: "fh-wave-of-anguish"},
      { name: "fh-wracked-with-pain"},
      { name: "fh-redemption"},
      { name: "fh-the-end-of-everything"},
    ]
  },
  "df": {
    name: "Drifter",
    cover: "fh-df-back",
    maxCards: 12,
    cards: [
      { name: "fh-bloodletting" },
      { name: "fh-continuous-health" },
      { name: "fh-crushing-weight" },
      { name: "fh-deadly-shot" },
      { name: "fh-draining-arrows" },
      { name: "fh-precision-aim" },
      { name: "fh-prudent-preparation" },
      { name: "fh-relentless" },
      { name: "fh-sustained-momentum" },
      { name: "fh-unbreakable" },
      { name: "fh-vile-assault" },
      { name: "fh-violent-inheritance" },
      { name: "fh-destructive-fury" },
      { name: "fh-fortitude" },
      { name: "fh-no-remorse" },
      { name: "fh-ever-forward" },
      { name: "fh-shockwave" },
      { name: "fh-dual-bow" },
      { name: "fh-fierce-barrage" },
      { name: "fh-chunk-of-flesh" },
      { name: "fh-gift-of-the-prey" },
      { name: "fh-break-through" },
      { name: "fh-survivalist" },
      { name: "fh-accurate-strikes" },
      { name: "fh-consume-stamina" },
      { name: "fh-like-the-wind" },
      { name: "fh-unending-fight" },
      { name: "fh-against-all-odds" },
      { name: "fh-inevitable-conclusion" },
      { name: "fh-everlasting" },
      { name: "fh-use-every-part" },
    ]
  }
}


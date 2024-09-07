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
      {name: "fh-blood-ritual"},
      {name: "fh-cleansing-fire"},
      {name: "fh-explosive-wounds"},
      {name: "fh-line-of-transference"},
      {name: "fh-scarred-effigy"},
      {name: "fh-shared-affliction"},
      {name: "fh-swift-vengeance"},
      {name: "fh-the-agony-of-others"},
      {name: "fh-transferred-injury"},
      {name: "fh-unending-torment"},
      {name: "fh-delayed-malady"},
      {name: "fh-pleasure-in-pain"},
      {name: "fh-unstable-effigy"},
      {name: "fh-infection-purge"},
      {name: "fh-reversal-of-fate"},
      {name: "fh-burned-at-both-ends"},
      {name: "fh-reprisal"},
      {name: "fh-down-to-the-dirt"},
      {name: "fh-mirrored-misery"},
      {name: "fh-chained-by-despair"},
      {name: "fh-chained-by-spite"},
      {name: "fh-hopelessness"},
      {name: "fh-phantom-limb"},
      {name: "fh-penance"},
      {name: "fh-reject-the-gift"},
      {name: "fh-wave-of-anguish"},
      {name: "fh-wracked-with-pain"},
      {name: "fh-redemption"},
      {name: "fh-the-end-of-everything"},
    ]
  },

  "df": {
    name: "Drifter",
    cover: "fh-df-back",
    maxCards: 12,
    cards: [
      {name: "fh-bloodletting"},
      {name: "fh-continuous-health"},
      {name: "fh-crushing-weight"},
      {name: "fh-deadly-shot"},
      {name: "fh-draining-arrows"},
      {name: "fh-precision-aim"},
      {name: "fh-prudent-preparation"},
      {name: "fh-relentless"},
      {name: "fh-sustained-momentum"},
      {name: "fh-unbreakable"},
      {name: "fh-vile-assault"},
      {name: "fh-violent-inheritance"},
      {name: "fh-destructive-fury"},
      {name: "fh-fortitude"},
      {name: "fh-no-remorse"},
      {name: "fh-ever-forward"},
      {name: "fh-shockwave"},
      {name: "fh-dual-bow"},
      {name: "fh-fierce-barrage"},
      {name: "fh-chunk-of-flesh"},
      {name: "fh-gift-of-the-prey"},
      {name: "fh-break-through"},
      {name: "fh-survivalist"},
      {name: "fh-accurate-strikes"},
      {name: "fh-consume-stamina"},
      {name: "fh-like-the-wind"},
      {name: "fh-unending-fight"},
      {name: "fh-against-all-odds"},
      {name: "fh-inevitable-conclusion"},
      {name: "fh-everlasting"},
      {name: "fh-use-every-part"},
    ]
  },

  "bb": {
    name: "Blinkblade",
    cover: "fh-bb-back",
    maxCards: 10,
    cards: [
      {name: "fh-blurry-jab"},
      {name: "fh-cascading-reaction"},
      {name: "fh-drive-recharge"},
      {name: "fh-hit-and-run"},
      {name: "fh-kinetic-transfer"},
      {name: "fh-overdrive"},
      {name: "fh-power-leak"},
      {name: "fh-sap-speed"},
      {name: "fh-temporal-displacement"},
      {name: "fh-twin-strike"},
      {name: "fh-borrowed-time"},
      {name: "fh-experimental-adjustment"},
      {name: "fh-sand-in-the-hourglass"},
      {name: "fh-reckless-augmentation"},
      {name: "fh-systems-reboot"},
      {name: "fh-double-time"},
      {name: "fh-make-it-count"},
      {name: "fh-potential-energy"},
      {name: "fh-precision-timing"},
      {name: "fh-breakneck-speed"},
      {name: "fh-flashing-flurry"},
      {name: "fh-stab-them-all"},
      {name: "fh-the-knifes-edge"},
      {name: "fh-phasing-blades"},
      {name: "fh-rushed-to-the-end"},
      {name: "fh-fastest-alive"},
      {name: "fh-quantum-uncertainty"},
      {name: "fh-fractured-timeline"},
      {name: "fh-reverse-the-flow"},
    ]
  },

  "bo": {
    name: "Boneshaper",
    cover: "fh-bo-back",
    maxCards: 12,
    cards: [
      {name: "fh-angry-spirits"},
      {name: "fh-command-the-wretched"},
      {name: "fh-damned-horde"},
      {name: "fh-dark-tidings"},
      {name: "fh-decaying-will"},
      {name: "fh-eternal-torment"},
      {name: "fh-fell-remedy"},
      {name: "fh-flow-of-the-black-river"},
      {name: "fh-life-in-death"},
      {name: "fh-malicious-conversion"},
      {name: "fh-returned-servant"},
      {name: "fh-transfer-of-essence"},
      {name: "fh-approach-oblivion"},
      {name: "fh-exploding-corpse"},
      {name: "fh-wrath-of-the-turned-earth"},
      {name: "fh-bone-dagger"},
      {name: "fh-unearthed-horror"},
      {name: "fh-grave-digging"},
      {name: "fh-putrid-cloud"},
      {name: "fh-critical-failure"},
      {name: "fh-flesh-shield"},
      {name: "fh-solid-bones"},
      {name: "fh-unforgivable-methods"},
      {name: "fh-rotting-multitude"},
      {name: "fh-twisted-decree"},
      {name: "fh-recycled-limbs"},
      {name: "fh-soul-claim"},
      {name: "fh-endless-numbers"},
      {name: "fh-wailing-from-beyond"},
      {name: "fh-behold-the-shrouded-sun"},
      {name: "fh-unholy-prowess"},
    ]
  },

  "dw": {
    name: "Deathwalker",
    cover: "fh-dw-back",
    maxCards: 11,
    cards: [
      {name: "fh-anger-of-the-dead"},
      {name: "fh-black-barrage"},
      {name: "fh-call-of-doom"},
      {name: "fh-call-to-the-abyss"},
      {name: "fh-dark-fog"},
      {name: "fh-eclipse"},
      {name: "fh-fluid-night"},
      {name: "fh-lingering-rot"},
      {name: "fh-shadow-step"},
      {name: "fh-strength-of-the-abyss"},
      {name: "fh-sunless-apparition"},
      {name: "fh-forceful-spirits"},
      {name: "fh-rest-in-the-shade"},
      {name: "fh-wave-of-anguish"},
      {name: "fh-deepening-despair"},
      {name: "fh-restless-spirits"},
      {name: "fh-dead-bolt"},
      {name: "fh-ritual-sacrifice"},
      {name: "fh-fleeting-dusk"},
      {name: "fh-pulled-across"},
      {name: "fh-dominate"},
      {name: "fh-medium"},
      {name: "fh-the-night-takes-shape"},
      {name: "fh-vengeful-storm"},
      {name: "fh-hungry-grasps"},
      {name: "fh-proliferation-of-the-abyss"},
      {name: "fh-frozen-in-fear"},
      {name: "fh-lashing-tendrils"},
      {name: "fh-black-lance"},
      {name: "fh-when-your-time-comes"},
    ]
  },

  "ge": {
    name: "Geminate",
    cover: "fh-ge-back",
    maxCards: 14,
    cards: [
      {name: "fh-changelings-boon"},
      {name: "fh-drag-down"},
      {name: "fh-draining-pincers"},
      {name: "fh-firefly-swarm"},
      {name: "fh-flailing-tendrils"},
      {name: "fh-hail-of-thorns"},
      {name: "fh-harvest-the-essence"},
      {name: "fh-hornbeetle-carapace"},
      {name: "fh-hornet-stingers"},
      {name: "fh-icebound-quills"},
      {name: "fh-into-my-embrace"},
      {name: "fh-mind-spike"},
      {name: "fh-scarab-flight"},
      {name: "fh-selfless-offering"},
      {name: "fh-feeding-frenzy"},
      {name: "fh-reckless-jab"},
      {name: "fh-reshape-the-guise"},
      {name: "fh-smoldering-hatred"},
      {name: "fh-locust-host"},
      {name: "fh-venomous-barbs"},
      {name: "fh-dragonfly-surge"},
      {name: "fh-mandible-storm"},
      {name: "fh-luminous-descent"},
      {name: "fh-thresh-and-flail"},
      {name: "fh-chitinous-horde"},
      {name: "fh-formless-grace"},
      {name: "fh-corrosive-acids"},
      {name: "fh-hirudotherapy"},
      {name: "fh-alluring-pheromones"},
      {name: "fh-two-pronged-entrapment"},
      {name: "fh-accelerated-metabolism"},
      {name: "fh-oscillating-entity"},
      {name: "fh-harbinger-of-ruin"},
      {name: "fh-voice-of-salvation"},
    ]
  },

  "dt": {
    name: "Deepwraith",
    cover: "fh-dt-back",
    maxCards: 10,
    cards: [
      {name: "fh-black-scythe"},
      {name: "fh-hollow-aura"},
      {name: "fh-ink-cloud"},
      {name: "fh-lacerating-stabs"},
      {name: "fh-mantle-of-dread"},
      {name: "fh-skewer-the-flesh"},
      {name: "fh-skull-collection"},
      {name: "fh-staring-into-the-abyss"},
      {name: "fh-succumb-to-fear"},
      {name: "fh-tumultuous-panic"},
      {name: "fh-haunting-brutality"},
      {name: "fh-morbid-camouflage"},
      {name: "fh-soul-hunger"},
      {name: "fh-lie-in-wait"},
      {name: "fh-slipping-into-death"},
      {name: "fh-crippling-terror"},
      {name: "fh-pinning-spines"},
      {name: "fh-crushing-darkness"},
      {name: "fh-grim-trophies"},
      {name: "fh-death-spiral"},
      {name: "fh-extra-decoration"},
      {name: "fh-claw-of-doom"},
      {name: "fh-the-remorseless-deep"},
      {name: "fh-dire-frenzy"},
      {name: "fh-hasten-the-end"},
      {name: "fh-rip-from-the-bone"},
      {name: "fh-unseen-horror"},
      {name: "fh-black-night-of-the-deep"},
      {name: "fh-consume-the-helpless"},
    ]
  },

  "ff": {
    name: "Frozen Fist",
    cover: "fh-ff-back",
    maxCards: 8,
    cards: [
      {name: "fh-cold-boulder"},
      {name: "fh-encased-punch"},
      {name: "fh-frost-eruption"},
      {name: "fh-fury-of-the-mountain"},
      {name: "fh-ice-blast"},
      {name: "fh-one-with-the-mountain"},
      {name: "fh-piercing-pummel"},
      {name: "fh-voice-from-below"},
      {name: "fh-freezing-shell"},
      {name: "fh-primal-bellow"},
      {name: "fh-shard-launch"},
      {name: "fh-crushing-crystals"},
      {name: "fh-draw-of-the-bedrock"},
      {name: "fh-frozen-over"},
      {name: "fh-lacerating-eruption"},
      {name: "fh-packed-solid"},
      {name: "fh-the-mountains-fist"},
      {name: "fh-ice-uppercut"},
      {name: "fh-preserved-fury"},
      {name: "fh-glacier-slam"},
      {name: "fh-thick-frost"},
      {name: "fh-gift-of-the-mountain"},
      {name: "fh-seeing-stars"},
      {name: "fh-draw-strength"},
      {name: "fh-shattering-blow"},
      {name: "fh-bring-down-the-mountain"},
      {name: "fh-frozen-spike"},
    ]
  },

  "if": {
    name: "Infuser",
    cover: "fh-if-back",
    maxCards: 11,
    cards: [
      {name: "fh-boon-of-the-tempest"},
      {name: "fh-bounty-of-the-earth"},
      {name: "fh-caress-of-the-night"},
      {name: "fh-emerald-edge"},
      {name: "fh-formless-bladestorm"},
      {name: "fh-onyx-shards"},
      {name: "fh-rising-momentum"},
      {name: "fh-slashing-cyclone"},
      {name: "fh-stoic-vigilance"},
      {name: "fh-torrential-cleave"},
      {name: "fh-unstoppable-impulse"},
      {name: "fh-battle-prowess"},
      {name: "fh-crystalline-aegis"},
      {name: "fh-imbue-with-life"},
      {name: "fh-remote-impact"},
      {name: "fh-veil-of-protection"},
      {name: "fh-guide-the-flow"},
      {name: "fh-reinforced-riposte"},
      {name: "fh-coalescing-darkness"},
      {name: "fh-desperate-throw"},
      {name: "fh-gemstone-resonance"},
      {name: "fh-obsidian-spear"},
      {name: "fh-gale-barrage"},
      {name: "fh-propulsive-tailwind"},
      {name: "fh-diamondization"},
      {name: "fh-malachite-shockwave"},
      {name: "fh-swift-pivot"},
      {name: "fh-untether-the-shackles"},
      {name: "fh-ancient-rites-of-power"},
      {name: "fh-sky-splitting-strike"},
    ]
  },

  "py": {
    name: "Pyroclast",
    cover: "fh-py-back",
    maxCards: 10,
    cards: [
      {name: "fh-cloud-of-ash"},
      {name: "fh-cooling"},
      {name: "fh-eruption"},
      {name: "fh-flowing-fire"},
      {name: "fh-igneous-path"},
      {name: "fh-lava-bomb"},
      {name: "fh-liquid-stone"},
      {name: "fh-melted-armor"},
      {name: "fh-quenched-rage"},
      {name: "fh-under-pressure"},
      {name: "fh-force-of-the-earth"},
      {name: "fh-metamorphic-rock"},
      {name: "fh-wildfire"},
      {name: "fh-deep-fury"},
      {name: "fh-searing-smoke"},
      {name: "fh-hardened-spike"},
      {name: "fh-living-magma"},
      {name: "fh-hand-of-flame"},
      {name: "fh-heat-wave"},
      {name: "fh-magma-orbs"},
      {name: "fh-rain-of-fire"},
      {name: "fh-obsidian-shield"},
      {name: "fh-return-to-the-source"},
      {name: "fh-erupting-rage"},
      {name: "fh-swelter"},
      {name: "fh-cinder-lance"},
      {name: "fh-feed-the-beast"},
      {name: "fh-calamity"},
      {name: "fh-stone-armor"},
    ]
  },

  "sd": {
    name: "Showdancer",
    cover: "fh-sd-back",
    maxCards: 11,
    cards: [
      {name: "fh-blizzard"},
      {name: "fh-chilling-impact"},
      {name: "fh-cold-therapy"},
      {name: "fh-cross-winds"},
      {name: "fh-enticing-breeze"},
      {name: "fh-frigid-growth"},
      {name: "fh-gathering-force"},
      {name: "fh-lifting-gust"},
      {name: "fh-natures-breath"},
      {name: "fh-snowball"},
      {name: "fh-whiteout"},
      {name: "fh-blinding-vortex"},
      {name: "fh-the-spirits-call"},
      {name: "fh-white-winds"},
      {name: "fh-birds-in-a-tempest"},
      {name: "fh-tornado"},
      {name: "fh-cold-snap"},
      {name: "fh-polar-vortex"},
      {name: "fh-biting-frost"},
      {name: "fh-zephyr-barrier"},
      {name: "fh-shifting-snow"},
      {name: "fh-whipping-gale"},
      {name: "fh-frozen-brand"},
      {name: "fh-refreshing-flurry"},
      {name: "fh-freezing-storm"},
      {name: "fh-storm-wall"},
      {name: "fh-surging-blow"},
      {name: "fh-the-endless-white"},
      {name: "fh-snowblind"},
      {name: "fh-winds-of-change"},
    ]
  },

  "ta": {
    name: "Trapper",
    cover: "fh-ta-back",
    maxCards: 9,
    cards: [
      {name: "fh-boar-catcher"},
      {name: "fh-caltrops"},
      {name: "fh-electrified-net"},
      {name: "fh-enticing-bait"},
      {name: "fh-exploding-decoy"},
      {name: "fh-flurry-of-nails"},
      {name: "fh-furry-facade"},
      {name: "fh-honeypot"},
      {name: "fh-spike-pit"},
      {name: "fh-dismantle"},
      {name: "fh-improvised-improvement"},
      {name: "fh-spring-loaded"},
      {name: "fh-path-of-pain"},
      {name: "fh-unavoidable-outcome"},
      {name: "fh-extra-teeth"},
      {name: "fh-pyrotechnics"},
      {name: "fh-dangerous-ground"},
      {name: "fh-stalkers-spoils"},
      {name: "fh-lure-of-the-snare"},
      {name: "fh-proficient-hunter"},
      {name: "fh-cage-of-thorns"},
      {name: "fh-persistent-pitfalls"},
      {name: "fh-foxhole"},
      {name: "fh-grasping-hazards"},
      {name: "fh-magnetic-shards"},
      {name: "fh-spike-strip"},
      {name: "fh-dangerous-cargo"},
      {name: "fh-mother-of-all-traps"},
    ]
  },
}


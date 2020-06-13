const images = {
  mapIcons: require('./POI_mapicons-sharedassets0.assets-419.png'),
  clanIcons: {
    hellhorned: require('./clan-icons/tile000.png'),
    awoken: require('./clan-icons/tile001.png'),
    melting: require('./clan-icons/tile002.png'),
    stygian: require('./clan-icons/tile003.png'),
    umbra: require('./clan-icons/tile004.png'),
    blight: require('./clan-icons/tile005.png')
  },
  backframes: {
    unit: require('./backframe/unit_backframe_normal_nonchampion-sharedassets0.assets-1071.png'),
    spell: require('./backframe/spell_backframe_normal-sharedassets0.assets-742.png'),
    champion: require('./backframe/unit_backframe_normal_champion-sharedassets0.assets-473.png'),
    relic: require('./backframe/junk_backframe-sharedassets0.assets-933.png')
  },
  frames: {
    rounded : {
      hellhorned: require('./frame/unit_cardframe_lava-sharedassets0.assets-481.png'),
      stygian: require('./frame/unit_cardframe_stygian-sharedassets0.assets-1108.png'),
      umbra: require('./frame/unit_cardframe_umbra-sharedassets0.assets-948.png'),
      awoken: require('./frame/unit_cardframe_vines-sharedassets0.assets-856.png'),
      melting: require('./frame/unit_cardframe_wax-sharedassets0.assets-474.png'),
      blight: ''
    },
    square: {
      hellhorned: require('./frame/spell_cardframe_lava-sharedassets0.assets-700.png'),
      blight: require('./frame/spell_cardframe_metal-sharedassets0.assets-512.png'),
      stygian: require('./frame/spell_cardframe_stygian-sharedassets0.assets-423.png'),
      umbra: require('./frame/spell_cardframe_umbra-sharedassets0.assets-371.png'),
      awoken: require('./frame/spell_cardframe_vines-sharedassets0.assets-456.png'),
      melting: require('./frame/spell_cardframe_wax-sharedassets0.assets-905.png')
    }
  },
  nameplates: {
    unit: require('./nameplate/unit_nameplate_normal_nonchampion-sharedassets0.assets-505.png'),
    champion: require('./nameplate/unit_nameplate_normal_nonchampion-sharedassets0.assets-505.png'),
    spell: require('./nameplate/spell_nameplate_normal-sharedassets0.assets-538.png'),
    relic: require('./nameplate/junk_nameplate-sharedassets0.assets-1014.png')
  },
  rarity: {
    common: require('./nameplate/unit_nameplatebacking_common-sharedassets0.assets-759.png'),
    uncommon: require('./nameplate/unit_nameplatebacking_uncommon-sharedassets0.assets-813.png'),
    rare: require('./nameplate/unit_nameplatebacking_rare-sharedassets0.assets-509.png'),
    champion: require('./nameplate/unit_nameplatebacking_champ-sharedassets0.assets-669.png')
  },
  chatbox: require('./ChatterBubble-sharedassets0.assets-877.png'),
  button: require('./button_default-sharedassets0.assets-702.png'),
  buttonHover: require('./button_hover-sharedassets0.assets-536.png'),
  scene: {
    metal: require("./scene/CLR_Metal_03-sharedassets0.assets-818.png"),
    awning: require("./scene/Merch_Awning-sharedassets0.assets-404.png"),
    bg: require("./scene/Merch_BG-sharedassets0.assets-1028.png"),
    buttonHover:
      require("./scene/Merch_Button_Leave_Rollover-sharedassets0.assets-1122.png"),
    counter: require("./scene/Merch_Counter-sharedassets0.assets-969.png"),
  },
  pips: [
    require('./pips/1.png'),
    require('./pips/2.png'),
    require('./pips/3.png'),
    require('./pips/4.png'),
    require('./pips/5.png'),
    require('./pips/6.png')
  ]
};

export default images;

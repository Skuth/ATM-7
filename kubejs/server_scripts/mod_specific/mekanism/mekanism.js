onEvent('recipes', e => {
  e.shaped('mekanism:creative_energy_cube', ['ATA', 'VCV', 'ATA'], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    V: 'allthemodium:vibranium_block',
    C: 'mekanism:ultimate_energy_cube'
  }).id('kubejs:mekanism/creative_energy_cube')
  e.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:ingots/allthemodium'
  }).id(`kubejs:mekanism/digital_miner`)
  e.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: '#forge:ingots/vibranium'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  e.shaped('mekanism:chemical_oxidizer', ['RCR', 'PDT', 'RCR'], {
    R: 'mekanism:alloy_infused',
    C: 'mekanism:basic_control_circuit',
    P: 'mekanism:personal_chest',
    D: 'mekanism:dynamic_tank',
    T: 'mekanism:basic_chemical_tank'
  }).id(`kubejs:mekanism/chemical_oxidizer`)
  e.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/steel',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: 'mekanism:personal_chest'
  }).id(`kubejs:mekanism/robit`)
  e.shaped('mekanism:laser_tractor_beam', ['P', 'L'], {
    P: 'mekanism:personal_chest',
    L: 'mekanism:laser_amplifier'
  }).id(`kubejs:mekanism/laser_tractor_beam`)
  e.shaped(Item.of('mekanism:mekasuit_helmet', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_helmet'
  }).id(`kubejs:mekanism/mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_chestplate'
  }).id(`kubejs:mekanism/mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_leggings'
  }).id(`kubejs:mekanism/mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_boots'
  }).id(`kubejs:mekanism/mekasuit_boots`)

  mekanismMetals.forEach(metal => {
    e.remove({id: `mekanism:processing/${metal}/ore/from_dust`})
  })

  removeRecipeByID(e, [
    /^mekanism:processing\/.*\/storage_blocks\/from_ingots/,
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:processing/diamond/to_dust',
    'mekanism:gas_conversion/salt_to_hydrogen_chloride',
    'mekanism:chemical_oxidizer',
    'mekanism:robit',
    'mekanism:laser_tractor_beam'

  ])
  removeRecipeByOutput(e, [
    'mekanism:upgrade_anchor'
  ])
})

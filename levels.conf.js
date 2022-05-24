/**
 * The initialisation functions for the games
 * @type {function[]}
 */
var level_functions = [falling_blocks, rugby, football_keeper];

/**
 * The initialisation function activated at the start of the game
 * @type {function}
 */
var default_level = start_menu;

/**
 * the name of the current level.
 * This is an optional variable, so you don't have to set it, but it might be usefull in some cases
 * @type {string}
 */
var current_level_name = "start menu";

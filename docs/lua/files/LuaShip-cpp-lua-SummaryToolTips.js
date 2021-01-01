﻿NDSummary.OnToolTipsLoaded("File:LuaShip.cpp.lua",{479:"<div class=\"NDToolTip TClass LLua\"><div class=\"TTSummary\">Class representing a ship. Inherits from ModelBody.</div></div>",481:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Determines if the ship is the player ship</div></div>",482:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Replaces the ship with a new ship of the specified type.</div></div>",483:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Returns a string describing the ship type</div></div>",484:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Returns a string describing the ship class</div></div>",485:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Sets the hull mass of the ship to the given precentage of its maximum.</div></div>",486:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Sets the thruster fuel tank of the ship to the given precentage of its maximum.</div></div>",487:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Destroys the ship in an explosion</div></div>",488:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the current skin object of the ship.</div></div>",489:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the skin of the ship.</div></div>",490:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Changes the pattern used for texturing the ship.</div></div>",491:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Changes the ship\'s label text. This is the text that appears beside the ship in the HUD.</div></div>",492:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Changes the ship\'s name text.&nbsp; This is the name text that appears beside the ship in the HUD.</div></div>",493:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Spawns a container right next to the ship.</div></div>",494:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the station that the ship is currently docked with</div></div>",495:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Undock from the station currently docked with</div></div>",496:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Blast off if landed on a surface.</div></div>",497:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Spawn a missile near the ship.</div></div>",498:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Activates ECM of ship, destroying nearby missile with probability proportional to proximity.</div></div>",499:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Ready the ship to jump to the given system. This does not perform any check regarding hyperdrive class, range, fuel. Nor does it respect minimum legal distance for hyperjump. For those features use Ship.HyperjumpTo instead.</div></div>",500:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Abort the upcoming hyperjump</div></div>",501:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Find out whether a ship can take damage or not.</div></div>",502:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Make a ship invulnerable to damage (or not).&nbsp; Note: Invulnerability is not currently stored in the save game.</div></div>",503:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current state of the landing gear.</div></div>",504:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current flight state of a ship as a string.</div></div>",505:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current flight control state.</div></div>",506:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the ship\'s flight control state.</div></div>",507:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current SetSpeed speed in m/s.</div></div>",508:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current SetSpeed target of the ship.</div></div>",509:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">If the landing gear of the ship is up, start lowering it, and vice versa.</div></div>",510:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the ships velocity</div></div>",511:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return some ship stats.</div></div>",512:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the ship\'s position</div></div>",517:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if the ship is docked.</div></div>",518:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if the ship is landed.</div></div>",519:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current hyperspace countdown in seconds.</div></div>",520:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current hyperspace destination.</div></div>",521:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if a hyperspace countdown is currently running.</div></div>",522:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the state of the directional thrusters.</div></div>",523:"<div class=\"NDToolTip TGroup LLua\"><div class=\"TTSummary\">The AI methods are the script\'s equivalent of the autopilot. They are high-level commands to instruct the ship to fly somewhere and possibly take some action when it arrives (like dock or attack).</div></div>",524:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Attack a target ship and continue until it is destroyed</div></div>",525:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Crash into the target ship.</div></div>",526:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to the vicinity of a given physics body</div></div>",527:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and dock with a given station</div></div>",528:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and enter a low orbit around a given planet or star</div></div>",529:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and enter a medium orbit around a given planet or star</div></div>",530:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and enter a high orbit around a given planet or star</div></div>",531:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Cancel the current AI command</div></div>",532:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Update the ship\'s statistics with regards to equipment changes</div></div>",534:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The current alert status of the ship. A Constants.ShipAlertStatus string.</div></div>",535:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The current flight state of the ship. A Constants.ShipFlightState string.</div></div>",536:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The internal id of the ship type. This value can be passed to &lt;ShipType.GetShipType&gt; to retrieve information about this ship type.</div></div>",537:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The current amount of fuel, as a percentage of full</div></div>",538:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Remaining thruster fuel mass in tonnes.</div></div>",539:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Remaining hull integrity in tonnes. Ship damage reduces hull integrity.&nbsp; When this reaches 0, the ship is destroyed.</div></div>",540:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Remaining shield strength in tonnes. As shields are depleted, the shield strength decreases. When this reaches 0, the shields are fully depleted and the hull is exposed to damage.</div></div>",541:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Maximum shield strength for installed shields. Measured in tonnes.</div></div>",542:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Furthest possible hyperjump given current hyperspace fuel available.&nbsp; Measured in light-years.</div></div>",543:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Furthest possible hyperjump assuming no limits to available hyperspace fuel.&nbsp; Measured in light-years.</div></div>",544:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Mass of the ship including hull, equipment and cargo, but excluding thruster fuel mass. Measured in tonnes.</div></div>",545:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Hull capacity used by equipment and cargo. Measured in tonnes.</div></div>",546:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Hull capacity used by cargo only (not equipment). Measured in tonnes.</div></div>",547:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Total space remaining. Measured in tonnes.</div></div>"});
﻿NDSummary.OnToolTipsLoaded("LuaClass:Ship",{642:"<div class=\"NDToolTip TClass LLua\"><div class=\"TTSummary\">Class representing a ship. Inherits from ModelBody.</div></div>",644:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Determines if the ship is the player ship</div></div>",645:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Replaces the ship with a new ship of the specified type.</div></div>",646:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Returns a string describing the ship type</div></div>",647:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Returns a string describing the ship class</div></div>",648:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Sets the hull mass of the ship to the given precentage of its maximum.</div></div>",649:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Sets the thruster fuel tank of the ship to the given precentage of its maximum.</div></div>",650:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Destroys the ship in an explosion</div></div>",651:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the current skin object of the ship.</div></div>",652:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the skin of the ship.</div></div>",653:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Changes the pattern used for texturing the ship.</div></div>",654:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Changes the ship\'s label text. This is the text that appears beside the ship in the HUD.</div></div>",655:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Changes the ship\'s name text.&nbsp; This is the name text that appears beside the ship in the HUD.</div></div>",656:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Spawns a container right next to the ship.</div></div>",657:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the station that the ship is currently docked with</div></div>",658:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Undock from the station currently docked with</div></div>",659:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Blast off if landed on a surface.</div></div>",660:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Spawn a missile near the ship.</div></div>",661:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Activates ECM of ship, destroying nearby missile with probability proportional to proximity.</div></div>",662:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Ready the ship to jump to the given system. This does not perform any check regarding hyperdrive class, range, fuel. Nor does it respect minimum legal distance for hyperjump. For those features use Ship.HyperjumpTo instead.</div></div>",663:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Abort the upcoming hyperjump</div></div>",664:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Find out whether a ship can take damage or not.</div></div>",665:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Make a ship invulnerable to damage (or not).&nbsp; Note: Invulnerability is not currently stored in the save game.</div></div>",666:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current state of the landing gear.</div></div>",667:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current flight state of a ship as a string.</div></div>",668:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current flight control state.</div></div>",669:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the ship\'s flight control state.</div></div>",670:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current SetSpeed speed in m/s.</div></div>",671:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current SetSpeed target of the ship.</div></div>",672:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">If the landing gear of the ship is up, start lowering it, and vice versa.</div></div>",673:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the ships velocity</div></div>",674:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return some ship stats.</div></div>",675:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the ship\'s position</div></div>",680:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if the ship is docked.</div></div>",681:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if the ship is landed.</div></div>",682:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current hyperspace countdown in seconds.</div></div>",683:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the current hyperspace destination.</div></div>",684:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if a hyperspace countdown is currently running.</div></div>",685:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return the state of the directional thrusters.</div></div>",16:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:GetEquipSlotCapacity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the maximum number of a particular type of equipment this ship can hold. This is the number of items that can be held, not the mass.&nbsp; AddEquip will take care of ensuring the hull capacity is not exceeded.</div></div>",17:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:GetEquipCountOccupied(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Return the number of item in a given slot</div></div>",18:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype18\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:CountEquip(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">item,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the number of a given equipment or cargo item in a given equipment slot</div></div>",19:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype19\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:AddEquip(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">item,</td></tr><tr><td class=\"PName first last\">count,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add an equipment or cargo item to its appropriate equipment slot</div></div>",20:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.GetEquip = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">slot,</td></tr><tr><td class=\"PName first last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get a list of equipment in a given equipment slot</div></div>",21:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype21\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.GetEquipFree = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the amount of free space in a given equipment slot</div></div>",22:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype22\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.SetEquip = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">slot,</td></tr><tr><td class=\"PName first last\">index,</td></tr><tr><td class=\"PName first last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Overwrite a single item of equipment in a given equipment slot</div></div>",23:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.RemoveEquip = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">item,</td></tr><tr><td class=\"PName first last\">count,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove one or more of a given equipment type from its appropriate cargo slot</div></div>",24:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.IsHyperjumpAllowed = <span class=\"SHKeyword\">function</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if hyperjump is allowed, return bool and minimum allowed altitude / distance.</div></div>",25:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype25\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.HyperjumpTo = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">path,</td></tr><tr><td class=\"PName first last\">is_legal</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Hyperjump ship to system. Makes sure the ship has a hyper drive, that target is withn range, and ship has enough fuel, before initiating the hyperjump countdown. In addition, through the optional argument, the ship can fly to a safe distance, compliant with local authorities\' regulation, before initiating the jump.</div></div>",26:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:FireMissileAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">which_missile,</td></tr><tr><td class=\"PName first last\">target</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Fire a missile at the given target</div></div>",27:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:StartSensor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">idx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Starts the equipped sensor</div></div>",28:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:StopSensor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">idx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Stops the equipped sensor</div></div>",29:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype29\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.Refuel = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">amount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Use the content of the cargo to refuel</div></div>",30:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.Jettison = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">equip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Jettison one unit of the given cargo type.&nbsp; The item must be present in the ship\'s equipment/cargo set, and will be removed by this call.</div></div>",31:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype31\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">local isNotAlreadyEnrolled = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">crewmember</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Enroll a [Character] as a member of the ship\'s crew</div></div>",32:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.Dismiss = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">crewMember</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Dismiss a [Character] as a member of the ship\'s crew</div></div>",33:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype33\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.GenerateCrew = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Generates a full crew complement for a ship that has no initialised crew list.&nbsp; Intended to be run automatically by [EachCrewMember] when querying arbitrary ships.</div></div>",34:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.CrewNumber = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the number of the current crew employed on the ship.</div></div>",35:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype35\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.EachCrewMember = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns an iterator function which returns each crew member in turn</div></div>",36:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype36\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.HasCorrectCrew = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determine whether a ship has the minimum crew required for launch</div></div>",686:"<div class=\"NDToolTip TGroup LLua\"><div class=\"TTSummary\">The AI methods are the script\'s equivalent of the autopilot. They are high-level commands to instruct the ship to fly somewhere and possibly take some action when it arrives (like dock or attack).</div></div>",687:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Attack a target ship and continue until it is destroyed</div></div>",688:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Crash into the target ship.</div></div>",689:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to the vicinity of a given physics body</div></div>",690:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and dock with a given station</div></div>",691:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and enter a low orbit around a given planet or star</div></div>",692:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and enter a medium orbit around a given planet or star</div></div>",693:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Fly to and enter a high orbit around a given planet or star</div></div>",694:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Cancel the current AI command</div></div>",695:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Update the ship\'s statistics with regards to equipment changes</div></div>",697:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The current alert status of the ship. A Constants.ShipAlertStatus string.</div></div>",698:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The current flight state of the ship. A Constants.ShipFlightState string.</div></div>",699:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The internal id of the ship type. This value can be passed to &lt;ShipType.GetShipType&gt; to retrieve information about this ship type.</div></div>",700:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The current amount of fuel, as a percentage of full</div></div>",701:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Remaining thruster fuel mass in tonnes.</div></div>",702:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Remaining hull integrity in tonnes. Ship damage reduces hull integrity.&nbsp; When this reaches 0, the ship is destroyed.</div></div>",703:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Remaining shield strength in tonnes. As shields are depleted, the shield strength decreases. When this reaches 0, the shields are fully depleted and the hull is exposed to damage.</div></div>",704:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Maximum shield strength for installed shields. Measured in tonnes.</div></div>",705:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Furthest possible hyperjump given current hyperspace fuel available.&nbsp; Measured in light-years.</div></div>",706:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Furthest possible hyperjump assuming no limits to available hyperspace fuel.&nbsp; Measured in light-years.</div></div>",707:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Mass of the ship including hull, equipment and cargo, but excluding thruster fuel mass. Measured in tonnes.</div></div>",708:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Hull capacity used by equipment and cargo. Measured in tonnes.</div></div>",709:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Hull capacity used by cargo only (not equipment). Measured in tonnes.</div></div>",710:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Total space remaining. Measured in tonnes.</div></div>"});
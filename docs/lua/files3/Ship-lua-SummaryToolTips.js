﻿NDSummary.OnToolTipsLoaded("File3:Ship.lua",{14:"<div class=\"NDToolTip TClass LLua\"><div class=\"TTSummary\">Class representing a ship. Inherits from Body.</div></div>",16:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:GetEquipSlotCapacity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the maximum number of a particular type of equipment this ship can hold. This is the number of items that can be held, not the mass.&nbsp; AddEquip will take care of ensuring the hull capacity is not exceeded.</div></div>",17:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:GetEquipCountOccupied(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Return the number of item in a given slot</div></div>",18:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype18\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:CountEquip(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">item,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the number of a given equipment or cargo item in a given equipment slot</div></div>",19:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype19\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:AddEquip(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">item,</td></tr><tr><td class=\"PName first last\">count,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add an equipment or cargo item to its appropriate equipment slot</div></div>",20:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype20\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.GetEquip = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">slot,</td></tr><tr><td class=\"PName first last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get a list of equipment in a given equipment slot</div></div>",21:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype21\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.GetEquipFree = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the amount of free space in a given equipment slot</div></div>",22:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype22\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.SetEquip = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">slot,</td></tr><tr><td class=\"PName first last\">index,</td></tr><tr><td class=\"PName first last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Overwrite a single item of equipment in a given equipment slot</div></div>",23:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.RemoveEquip = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">item,</td></tr><tr><td class=\"PName first last\">count,</td></tr><tr><td class=\"PName first last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove one or more of a given equipment type from its appropriate cargo slot</div></div>",24:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.IsHyperjumpAllowed = <span class=\"SHKeyword\">function</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if hyperjump is allowed, return bool and minimum allowed altitude / distance.</div></div>",25:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype25\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.HyperjumpTo = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">path,</td></tr><tr><td class=\"PName first last\">is_legal</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Hyperjump ship to system. Makes sure the ship has a hyper drive, that target is withn range, and ship has enough fuel, before initiating the hyperjump countdown. In addition, through the optional argument, the ship can fly to a safe distance, compliant with local authorities\' regulation, before initiating the jump.</div></div>",26:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:FireMissileAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">which_missile,</td></tr><tr><td class=\"PName first last\">target</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Fire a missile at the given target</div></div>",27:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:StartSensor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">idx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Starts the equipped sensor</div></div>",28:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Ship:StopSensor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">idx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Stops the equipped sensor</div></div>",29:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype29\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.Refuel = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">amount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Use the content of the cargo to refuel</div></div>",30:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.Jettison = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">equip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Jettison one unit of the given cargo type.&nbsp; The item must be present in the ship\'s equipment/cargo set, and will be removed by this call.</div></div>",31:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype31\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">local isNotAlreadyEnrolled = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">crewmember</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Enroll a [Character] as a member of the ship\'s crew</div></div>",32:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.Dismiss = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">crewMember</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Dismiss a [Character] as a member of the ship\'s crew</div></div>",33:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype33\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.GenerateCrew = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Generates a full crew complement for a ship that has no initialised crew list.&nbsp; Intended to be run automatically by [EachCrewMember] when querying arbitrary ships.</div></div>",34:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.CrewNumber = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the number of the current crew employed on the ship.</div></div>",35:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype35\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.EachCrewMember = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns an iterator function which returns each crew member in turn</div></div>",36:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype36\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Ship.HasCorrectCrew = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determine whether a ship has the minimum crew required for launch</div></div>"});
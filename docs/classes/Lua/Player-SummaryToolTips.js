﻿NDSummary.OnToolTipsLoaded("LuaClass:Player",{421:"<div class=\"NDToolTip TClass LLua\"><div class=\"TTSummary\">Class representing the player. Inherits from Ship</div></div>",423:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s navigation target</div></div>",424:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the player\'s navigation target</div></div>",425:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the &quot;set speed&quot; of player\'s ship</div></div>",426:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the &quot;set speed&quot; of player\'s ship</div></div>",427:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s combat target</div></div>",428:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the player\'s combat target</div></div>",429:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s hyperspace target</div></div>",430:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set the player\'s hyperspace target</div></div>",431:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Return true if the player is using the mouse to rotate the ship (typically RMB held)</div></div>",432:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s ship\'s maximum Δv (excluding hydrogen in cargo space)</div></div>",433:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s ship\'s current Δv capacity (excluding hydrogen in cargo space)</div></div>",434:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s ship\'s remaining Δv capacity (excluding hydrogen in cargo space)</div></div>",435:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s ship\'s current acceleration in a direction.</div></div>",436:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the distance the player\'s ship needs to decelerate with thruster from speed</div></div>",437:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the time remaining until start of maneuver in seconds</div></div>",438:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the current maneuver velocity in m/s</div></div>",439:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get the player\'s ship\'s current heading, pitch and roll (all in radians)</div></div>",440:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Set rotation dampening on or off of player\'s ship</div></div>",441:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get rotation dampening state of player\'s ship</div></div>",442:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Toggle rotation dampening on/off</div></div>",443:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Get altitude, speed, and position of player\'s ship</div></div>",38:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype38\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:AddCrime (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">crime,</td></tr><tr><td class=\"PName first last\">fine,</td></tr><tr><td class=\"PName first last\">faction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add a crime to the player\'s criminal record</div></div>",39:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype39\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:GetCrimeRecord (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">faction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get players past criminal record of and total payed fine for faction</div></div>",40:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype40\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:GetCrimeOutstanding (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">faction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get players current outstanding criminal record and total unpayed fine for faction</div></div>",41:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype41\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:ClearCrimeFine (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">faction,</td></tr><tr><td class=\"PName first last\">forget</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clear the current record of outstanding fines and crimes for player</div></div>",42:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype42\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:ClearCrimeRecordHistory (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">faction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clear the player\'s crime record history, excluding current unpayed offences</div></div>",43:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype43\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">function</span> Player:GetMoney ()</div></div><div class=\"TTSummary\">Get the player\'s current money</div></div>",44:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype44\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:SetMoney (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">m</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the player\'s money</div></div>",45:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype45\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function</span> Player:AddMoney (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">m</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add an amount to the player\'s money</div></div>"});
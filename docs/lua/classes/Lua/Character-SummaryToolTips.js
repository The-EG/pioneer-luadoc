﻿NDSummary.OnToolTipsLoaded("LuaClass:Character",{92:"<div class=\"NDToolTip TClass LLua\"><div class=\"TTSummary\">A character sheet, used to keep characteristics of any non-player character which should be persistent, allowing re-use of characters over time and across Lua scripts.</div></div>",94:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Boolean value; true if this instance of the table is for the player.&nbsp; Only one character sheet should be that of the player.&nbsp; Useful if there\'s the slightest chance of the player\'s own sheet getting mixed up with those of NPCs.</div></div>",95:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Name of character</div></div>",96:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Gender of character.&nbsp; If true, character is female.&nbsp; If false, male.</div></div>",97:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Seed for predictable randomness, if one is required.</div></div>",98:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Job title, for use in BBS faces</div></div>",99:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Boolean value; whether this character is available for use by a mission.&nbsp; Used to &quot;lock&quot; a persistent character, so that two missions don\'t use the same character at the same time.&nbsp; Not particularly meaningful for transient characters.</div></div>",100:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Count of the number of times a script has used this character.&nbsp; Used to determine how well used a character is.</div></div>",101:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The game time, in seconds since 12:00 01-01-3200, that this character was last saved.</div></div>",102:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">The system path of the station or system at which this character was last saved.&nbsp; Save() sets this to that of Game.player, since character sheets have no intrinsic location.&nbsp; Can be directly set immediately after the call to Save() if it needs to be some other path.</div></div>",103:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Boolean attribute. If set to a true value, character is deceased and all test rolls will fail.</div></div>",104:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer attribute for RPG style dice tests.&nbsp; PlayerRelationship is intended to reflect the character\'s willingness to accommodate the player.&nbsp; Tested with 4xD16; useful values are 4 (despise) to 65 (adore).&nbsp; Modifiers can cause numbers outside this range to become useful (see TestRoll).</div></div>",105:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer attribute for RPG style dice tests.&nbsp; Luck is intended to reflect the character\'s innate good fortune.&nbsp; Tested with 4xD16; useful values are 4 (never lucky) to 65 (always lucky).&nbsp; Modifiers can cause numbers outside this range to become useful (see TestRoll).</div></div>",106:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer attribute for RPG style dice tests.&nbsp; Intelligence is intended to reflect the character\'s ability to learn.&nbsp; Tested with 4xD16; useful values are 4 (moron) to 65 (genius).&nbsp; Modifiers can cause numbers outside this range to become useful (see TestRoll).</div></div>",107:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer attribute for RPG style dice tests.&nbsp; Charisma is intended to reflect the character\'s ability to win contracts or favrouable deals.&nbsp; Tested with 4xD16; useful values are 4 (always hated) to 65 (always liked).&nbsp; Modifiers can cause numbers outside this range to become useful (see TestRoll).</div></div>",108:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer attribute for RPG style dice tests.&nbsp; Notoriety is intended to reflect how well the character\'s reputation (good or bad) is known.&nbsp; Tested against 4xD16; useful values are 4 (complete nobody) to 65 (celebrity).&nbsp; Modifiers can cause numbers outside this range to become useful (see TestRoll).</div></div>",109:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer attribute for RPG style dice tests.&nbsp; Lawfulness is intended to reflect the character\'s willingness to break the law.&nbsp; Tested with 4xD16; useful values are 4 (going straight) to 65 (criminal).&nbsp; Modifiers can cause numbers outside this range to become useful (see TestRoll).</div></div>",110:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">(Crew skill)</div></div>",111:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">(Crew skill)</div></div>",112:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">(Crew skill)</div></div>",113:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">(Crew skill)</div></div>",114:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer value; number of objects destroyed by this character. Automatically incremented in the case of the player by one of the stock scripts.</div></div>",115:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer value; number of objects damaged by this character which were subsequently destroyed by something else. Automatically incremented in the case of the player by one of the stock scripts.</div></div>",116:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Integer value; reflects the reputation amassed through taking missions.&nbsp; It should be reduced for failed missions, and increased for successful missions.</div></div>",118:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype118\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">New = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">template,</td></tr><tr><td class=\"PName first last\">rand</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns a new character sheet, inheriting from Character, based on an optional template.</div></div>",119:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype119\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Clone = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clones a character sheet.</div></div>",120:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype120\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">DiceRoll = <span class=\"SHKeyword\">function</span> ()</div></div><div class=\"TTSummary\">Returns the results of a simulated 4xD16 roll.&nbsp; Results are random, but distributed in a bell curve about the value 34.&nbsp; The minimum result is 4, and the maximum result is 64.</div></div>",121:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype121\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">RollNew = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">crew</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Uses DiceRoll to initialise the following attributes to random values:- luck, charisma, notoriety, lawfulness.</div></div>",122:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype122\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">TestRoll = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">attribute,</td></tr><tr><td class=\"PName first last\">modifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Uses DiceRoll to generate a random number, which it compares with the provided attribute.&nbsp; If the generated number is less than the sum of the attribute and the provided modifier, it returns true.&nbsp; If it is greater, or the attribute does not exist, it returns false.</div></div>",123:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype123\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">SafeRoll = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">attribute,</td></tr><tr><td class=\"PName first last\">modifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Uses DiceRoll to generate a random number, which it compares with the provided attribute.&nbsp; If the generated number is less than the sum of the attribute and the provided modifier, it returns true.&nbsp; If it is greater, or the attribute does not exist, it returns false.</div></div>",124:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype124\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Save = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If the character is not already in the table of persistent characters, inserts the character into that table.&nbsp; Also set available to true, and update the timestamp and location members.</div></div>",125:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype125\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">Find = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">filter</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns an iterator across all persistent characters who match the specified filter.</div></div>",126:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype126\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">FindAvailable = <span class=\"SHKeyword\">function</span> ()</div></div><div class=\"TTSummary\">Returns an iterator across all persistent characters where available is true and dead is false</div></div>",127:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype127\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">CheckOut = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">&quot;Checks out&quot; a persistent character, flagging it for exclusive use.&nbsp; Sets available to false, meaning that FindAvailable() will not return this character.</div></div>",128:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype128\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">UnSave = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes a character from the persistent characters table</div></div>",129:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype129\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">GetCombatRating = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns a translatable string giving the character\'s combat rating</div></div>",130:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype130\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">IsCombatRated = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self,</td></tr><tr><td class=\"PName first last\">rating</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Tests whether a character has reached a specific combat rating</div></div>",131:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype131\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">GetReputationRating = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">self</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns a translatable string giving the character\'s reputation rating</div></div>"});
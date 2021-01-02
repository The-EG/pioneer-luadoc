﻿NDSummary.OnToolTipsLoaded("File3:FlightLog.lua",{92:"<div class=\"NDToolTip TClass LLua\"><div class=\"TTSummary\">A flight log, containing the last systems and stations visited by the player. Can be used by scripts to find out where the player has been recently.</div></div>",94:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype94\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">GetSystemPaths = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">maximum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns an iterator returning a SystemPath object for each system visited by the player, backwards in turn, starting with the most recent. If count is specified, returns no more than that many systems.</div></div>",95:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype95\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">UpdateSystemEntry = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">index,</td></tr><tr><td class=\"PName first last\">entry</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Update the free text field in system log.</div></div>",96:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype96\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">GetStationPaths = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">maximum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns an iterator returning a SystemPath object for each station visited by the player, backwards in turn, starting with the most recent. If count is specified, returns no more than that many stations.</div></div>",97:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype97\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">UpdateStationEntry = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">index,</td></tr><tr><td class=\"PName first last\">entry</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Update the free text field in station log.</div></div>",98:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype98\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">GetPreviousSystemPath = <span class=\"SHKeyword\">function</span> ()</div></div><div class=\"TTSummary\">Returns a SystemPath object that points to the star system where the player was before jumping to this one. If none is on record (such as before any hyperjumps have been made) it returns nil.</div></div>",99:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype99\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">GetPreviousStationPath = <span class=\"SHKeyword\">function</span> ()</div></div><div class=\"TTSummary\">Returns a SystemPath object that points to the starport most recently visited. If the player is currently docked, then the starport prior to the present one (which might be the same one, if the player launches and lands in the same port). If none is on record (such as before the player has ever launched) it returns nil.</div></div>",100:"<div class=\"NDToolTip TFunction LLua\"><div class=\"TTSummary\">Returns an iterator returning custom entries for each system the player has created a custom log entry for, backwards in turn, starting with the most recent. If count is specified, returns no more than that many entries.</div></div>",101:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype101\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">UpdateCustomEntry = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">index,</td></tr><tr><td class=\"PName first last\">entry</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Update the free text field with new entry. Allows the player to change the original text entry.</div></div>",102:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype102\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DeleteCustomEntry = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Remove an entry.</div></div>",103:"<div class=\"NDToolTip TFunction LLua\"><div id=\"NDPrototype103\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">MakeCustomEntry = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a custom entry. A set of information is automatically compiled, in a header.</div></div>",105:"<div class=\"NDToolTip TAttribute LLua\"><div class=\"TTSummary\">Marks version of flight log, can be used for non-breaking backwards compatibility, if new features are added to FlightLog</div></div>"});
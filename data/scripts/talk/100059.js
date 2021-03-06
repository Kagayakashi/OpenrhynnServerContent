var ScriptBridge = Java.type('com.steelteam.openrhynn.scripting.ScriptBridge');
var ChanceCalculator = Java.type('com.steelteam.openrhynn.utilits.ChanceCalculator');

var getExecutionTime = function() { return 15000; }

var onTalkRequest = function(world, mob) {
	var message = 'Nothing to say...';
	var chance = 20;
	var target = world.getEntity(mob.aiFollow);	
	
	if(target != null) {
		message = 'I kill you, ' + target.name + '!';
		chance = 60;
	} else {
		switch(ScriptBridge.sharedRandom.nextInt(2)) {
			case 0:
				message = 'our name is `Legion of undead`!';
				break;
			case 1:
				message = 'I will bring you in sacrifice!!';
				break;
		}
	}
	
	if(ChanceCalculator.calculate(chance))
		world.chat(mob.objectId, message);
	
}
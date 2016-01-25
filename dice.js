function getDice(table) {
	var possibleDiceCells = $(table).find('th:first-child');
	var diceText = undefined;
	possibleDiceCells.each(function () {
		var text = $(this).text().trim();
		if (/^d\d+$/.test(text)) {
			diceText = text;
			return false;
		}
	});
	
	if (diceText === undefined)
		return undefined;
	
	return parseInt(diceText.replace('d', ''));
}

function rollDice(maxValue) {
	return Math.floor(Math.random() * maxValue) + 1;
}

function rollTable(table) {
	var maxValue = getDice(table);
	var value = rollDice(maxValue);
	var output = '???';
	
	table.find('tr').each(function () {
		if ($(this).find('th').length > 0)
			return true;
		
		var numText = $(this).find('td').first().text().split('-');
		var min = parseInt(numText[0]);
		var max = numText.length > 1 ? parseInt(numText[1]) : min;
		if (min == 0) 
			min = maxValue;
		if (max == 0) 
			max = maxValue;
		
		if (value < min || value > max)
			return true;

		output = $(this).find('td').last().text();
		return false;
	});

	return output;
}

function rollLink(link) {
	var table = $(link).closest('table');
	alert(rollTable(table));
}

function setupDiceTables() {
	$('table').each(function () {
		// only dice tables should be modified
		if (getDice(this) === undefined)
			return true;
		
		var cell = $(this).find('tr').first().find('th').last();
		cell.css('position', 'relative');
		cell.append('<a href="#" onclick="rollLink(this); return false;" style="position:absolute; right:-32px">roll</a>');
	});
}
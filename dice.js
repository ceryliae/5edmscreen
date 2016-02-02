function getDice(table) {
	var diceCell = getDiceCell(table);
	if (diceCell === undefined)
		return undefined;
	
	var diceText = diceCell.text().trim();
	return parseInt(diceText.replace('d', ''));
}

function getDiceCell(table) {
	var possibleDiceCells = $(table).find('th:first-child');
	var cell = undefined;
	possibleDiceCells.each(function () {
		var text = $(this).text().trim();
		if (/^d\d+$/.test(text)) {
			cell = $(this);
			return false;
		}
	});
	return cell;
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

		output = $(this).find('td').last().text().trim();
		return false;
	});

	return value + ':  ' + output;
}

function rollLink(link) {
	var table = $(link).closest('table');
	alert(rollTable(table));
}

function setupDiceTables() {
	$('table').each(function () {
		// only dice tables should be modified
		var diceCell = getDiceCell(this);
		if (diceCell === undefined)
			return true;
		
		var diceText = diceCell.text().trim();
		diceCell.html('<a href="#" onclick="rollLink(this); return false;">' + diceText + '</a>');
	});
}

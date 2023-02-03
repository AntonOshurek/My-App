export const replaceNonEnglish = (str: string): string => {
	const latinLettersMap : { [key: string]: string } = {
		// Russian
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
		'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
		'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
		'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
		'я': 'ya',
		// Polish
		'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z',
		'ż': 'z',
		// Ukrainian
		'ґ': 'g', 'є': 'ye', 'і': 'i', 'ї': 'yi',
		// German
		'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss',
		// French
		'à': 'a', 'â': 'a', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'î': 'i', 'ï': 'i',
		'ô': 'o', 'œ': 'oe',
		// Spanish
		'ñ': 'n',
		// Portuguese
		'ã': 'a', 'õ': 'o',
		// Italian
			'ì': 'i', 'ò': 'o', 'ù': 'u',
		//  'à': 'a', 'è': 'e', 'é': 'e', //duplicate error here :(
	};
	let result = '';
	for (let i = 0; i < str.length; i++) {
		const char = str[i].toLowerCase();
		result += latinLettersMap[char] || char;
	}
	return result;
};

String.prototype.largestPalindrome = function(){
	var words = this.toString().split(' '),
		isPalindrome = function( word ){
			var breakPoint = Math.floor( word.length / 2 ),
				strSize = word.length - 1;
			for( var i = 0; i < breakPoint; i++ ){
				if( word[i] !== word[strSize-i] ){
					return false;
				}
			}
			return true;
		},
		largestWordCount = 0,
		largestWord = "";

	for( word in words ){
		if( words[word].length > largestWordCount && isPalindrome( words[word] ) ){
			largestWord = words[word];
			largestWordCount = words[word].length;
		}
	}

	return largestWord;
};

String.prototype.betterLargestPalindrome = function(){
	var words = this.toString().split(' '),
		isPalindrome = function( word ){
			return word === word.split('').reverse().join('');
		},
		largestWordCount = 0,
		largestWord = "";

	for( word in words ){
		if( words[word].length > largestWordCount && isPalindrome( words[word] ) ){
			largestWord = words[word];
			largestWordCount = words[word].length;
		}
	}

	return largestWord;
};
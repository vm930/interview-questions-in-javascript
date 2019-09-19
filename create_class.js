/*
1) Design a class to store new stories, containing author, history, title, content.
2) Write a method to sort the stories on the basis of history, i.e. latest news.
3) Improve time complexity
4) Fetch top 100 stories.
*/
/*
stories.sort(function(a,b)=>b-a)
*/

stories = [];

class Story {
	constructor(newStory, author, history, title, content) {
		this.newStory = newStory;
		this.author = author;
		this.history = history;
		this.title = title;
		this.content = content;
		stories.push(this);
		// this.constructor.all.push(this);
	}

	static latestNews() {
		// console.log(this.constructor.all);
		return stories.sort((a, b) => b.history - a.history);
		// console.log(stories);
	}
}

dragonkillseveryone = new Story(
	'dragonkills',
	'jonsnow',
	9,
	'dragon is running the world',
	'dragon is coming sooooooon'
);

foloridaMan = new Story(
	'foloridaman puts an apple in the microwave',
	'foxnews',
	3,
	'foloridaman puts an apple in the microwave',
	'foloridaman puts an apple in the microwave and he died after it blow up'
);

flatironschool = new Story(
	'flatironschool expand to china',
	'nytimes',
	11,
	'flatironschool expand to china',
	'flatironschool expand to china, and the rest of asia'
);

// Story.all = [];
console.log(Story.latestNews());

// console.log(dragonkillseveryone);
// console.log(foloridaMan);
// console.log(flatironschool);

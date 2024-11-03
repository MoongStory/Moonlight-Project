const quotes = [
	{
		quote: "00 quote",
		author: "00 author",
	},
	{
		quote: "01 quote",
		author: "01 author",
	},
	{
		quote: "02 quote",
		author: "02 author",
	},
	{
		quote: "03 quote",
		author: "03 author",
	},
	{
		quote: "04 quote",
		author: "04 author",
	},
	{
		quote: "05 quote",
		author: "05 author",
	},
	{
		quote: "06 quote",
		author: "06 author",
	},
	{
		quote: "07 quote",
		author: "07 author",
	},
	{
		quote: "08 quote",
		author: "08 author",
	},
	{
		quote: "09 quote",
		author: "09 author",
	}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const random_number = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random_number].quote;
author.innerText = quotes[random_number].author;
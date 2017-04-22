// Homework topics: Route Params, Query Params
// req.params.id | req.query

const express = require('express');

const app = express();

const books = [
	{
	 index: '1',
	 author: 'Harkness',
	 title: 'A Discovery Of Witches'
	},
	{
	 index: '2',
	 author: 'Tolkien',
	 title: 'The Hobbit'
	},
	{
	 index: '3',
	 author: 'Thomas',
	 title: 'Delicious'
	},
	{
	 index: '4',
	 author: 'Andrews',
	 title: 'On the Edge'
	}
];

app.get('/',(req, res)=>{
	res.send('Hello Express');
});

app.get('/books',(req, res)=>{
	res.send(books);
});

app.get('/books/:id', (req, res)=>{
	res.send(books[req.params.id]);
});

app.get('/readinglist',(req, res)=>{
	books.forEach(book => {
		if (book.index === req.query.index) res.send(book.title + ' by ' + book.author);
	});
});

app.get('/multiply/:x/:y', (req, res) => {
	let product = parseInt(req.params.x) * parseInt(req.params.y);
	res.send(product.toString());
});

app.listen(3000, ()=>{
	console.log('running on port 3000');
});
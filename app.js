/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

const pizza = require('./db/pizza.js')

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));



app.get("/pizza", (req, res) => {

	const pizzaString = JSON.stringify(pizza);

	res.render('index', {pizzaString});
})

app.get("/pizza/:id", (req, res) => {
	let id = req.params.id;
	
	const pizzaString = JSON.stringify(pizza);
	res.render('index', {pizzaString});
})





/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});
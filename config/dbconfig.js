var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/expressdb');

mongoose.connect('mongodb+srv://adminexpress:iqEoUKnsVQveCweL@express.sorv0ab.mongodb.net/myblogdata?retryWrites=true&w=majority');

var mongoosedb = module.exports = mongoose;


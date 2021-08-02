const mongoose = require('mongoose');
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect("mongodb://127.0.0.1:27017/MEU_PRIMEIRO_BD", config);
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true })
.then(() => console.log('Successfully connected to the database'))
.catch(error => console.log('Could not connect to the database'))
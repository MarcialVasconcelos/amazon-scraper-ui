const mongoose = require('mongoose')

const MongoDb = require('../mongodb')
const ResultSchema = require('../schemas/ResultSchema')

const connection = MongoDb.getOrCreateConnection()

const Results = connection.model('result', ResultSchema, 'results')

module.exports = Results
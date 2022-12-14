const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const User = require('./User')
const Project = require("./Project")

// from the proposed parameters, not included are:
// Color label (generate based on due date)
// Project Id (should be autogenerated in db)
const JournalSchema = new mongoose.Schema({
  distraction: {
    type: String,
    required: true,
  },
  timeDistracted: {
    type: Number,
    required: true
  },
  preventativeIdeas: {
    type: String,
    required: true,
  }
  
})

module.exports = mongoose.model('Journal', JournalSchema)
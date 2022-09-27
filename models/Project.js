const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const User = require('./User')

// from the proposed parameters, not included are:
// Color label (generate based on due date)
// Project Id (should be autogenerated in db)
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  startDate: {
    type: Date,
    required: false // changing to false for now as we don't have a field in addProject and aren't leveraging it
  },
  dueDate: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  teamMembers: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Project', ProjectSchema)
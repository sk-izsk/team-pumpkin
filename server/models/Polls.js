const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'users',
  },
  url1: {
    type: String,
    require: true,
    unique: true,
  },
  url2: {
    type: String,
    require: true,
    unique: true,
  },
  friend: {
    type: String,
    require: true,
  },
  question: {
    type: String,
    require: true,
  },
  votesForUrl1: [String],
  votesForUrl2: [String],
});

module.exports = Polls = mongoose.model('polls', PollSchema);
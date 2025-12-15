const Feedback = require("../models/Feedback");

exports.addFeedback = async (req, res) => {
  const feedback = await Feedback.create(req.body);
  res.json(feedback);
};

exports.getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
};

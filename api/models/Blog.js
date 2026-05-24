const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true, default: 'Advocate Meet Shah' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);

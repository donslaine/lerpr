const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sandboxSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Sandbox', sandboxSchema)

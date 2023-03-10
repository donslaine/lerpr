const mongoose = require('mongoose')
const curveSchema = require('./curve')
const Schema = mongoose.Schema

const sandboxSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    curves: [
      curveSchema
    ],
    colorStart: {
      type: Schema.Types.Mixed,
      required: false
    },
    colorEnd: {
      type: Schema.Types.Mixed,
      required: false
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Sandbox', sandboxSchema)
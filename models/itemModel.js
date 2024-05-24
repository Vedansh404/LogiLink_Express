const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: { type: String, require },
    rate: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const itemModel = mongoose.model("services", itemSchema);

module.exports = itemModel;

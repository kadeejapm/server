import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name"],
    },
    price: {
        type: Number,
        required: [true, "Please add the price"],
    },
    details: {
        type: String,
        required: [true, "Please add the details"],
    },

},
    {
        timestamps: true,
    }
);

export const Product = mongoose.model("Product", productSchema);

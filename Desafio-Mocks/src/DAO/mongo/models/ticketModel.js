import mongoose from "mongoose";

const ticketCollection = "Tickets";

const ticketSchema = new mongoose.Schema({
    code: {type: String, unique: true},
    purchase_datetime: {type: String},
    amount: {type: Number},
    purchaser: {type: String}
});

const ticketModel = mongoose.model(ticketCollection, ticketSchema);

export default ticketModel;
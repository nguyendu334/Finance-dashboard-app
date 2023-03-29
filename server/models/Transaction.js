import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
    {
        buyer: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => (v / 100).toFixed(2),
        },
        amount: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => (v / 100).toFixed(2),
        },
        productIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { getters: true },
    },
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;

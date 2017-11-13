import mongoose from 'mongoose';

import { EXCEPTION } from '../constants';
import { ExceptionFactory } from '../util';

const Types = mongoose.Schema.Types;


let pollSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true   
    },
    description: {
        type: String,
        require: true   
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
    },
    result: {
        type: Types.ObjectId,
        ref: 'Option'
    }
});

let Poll = mongoose.model('Poll', pollSchema);

export { Poll };
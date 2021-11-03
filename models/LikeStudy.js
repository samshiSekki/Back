const mongoose = require('mongoose');
const { Schema } = mongoose;

const LikeSchema = new Schema({
    study: {
        type: Schema.Types.ObjectId,
        ref: 'StudyList',
    }
});

module.exports = mongoose.model('LikeStudy', LikeSchema);
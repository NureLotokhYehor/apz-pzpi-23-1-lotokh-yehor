const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  species: {
    type: String,
    required: true,
    trim: true
  },
  breed: {
    type: String,
    trim: true
  },
  age: Number,
  weight: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  vitals: {
    heartRate: { type: Number, default: 0 },
    temperature: { type: Number, default: 0 },
    status: { 
      type: String, 
      enum: ['Healthy', 'Warning', 'Critical'], 
      default: 'Healthy' 
    }
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Patient', patientSchema);

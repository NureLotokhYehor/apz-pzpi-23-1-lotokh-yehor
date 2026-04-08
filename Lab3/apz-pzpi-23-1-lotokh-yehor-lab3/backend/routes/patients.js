const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Patient = require('../models/Patient');

// @route   GET api/patients
// @desc    Get all patients
router.get('/', auth, async (req, res) => {
  try {
    const patients = await Patient.find().sort({ lastUpdate: -1 });
    res.json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/patients
// @desc    Create a patient
router.post('/', auth, async (req, res) => {
  const { name, species, breed, age, weight } = req.body;

  try {
    const newPatient = new Patient({
      name,
      species,
      breed,
      age,
      weight,
      owner: req.user.id
    });

    const patient = await newPatient.save();
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/patients/:id
// @desc    Update a patient
router.put('/:id', auth, async (req, res) => {
  const { name, species, breed, age, weight, vitals } = req.body;

  try {
    let patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    // Build update object
    const updateFields = {};
    if (name) updateFields.name = name;
    if (species) updateFields.species = species;
    if (breed) updateFields.breed = breed;
    if (age) updateFields.age = age;
    if (weight) updateFields.weight = weight;
    if (vitals) updateFields.vitals = vitals;
    updateFields.lastUpdate = Date.now();

    patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/patients/:id
// @desc    Delete a patient
router.delete('/:id', auth, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    await Patient.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Patient removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

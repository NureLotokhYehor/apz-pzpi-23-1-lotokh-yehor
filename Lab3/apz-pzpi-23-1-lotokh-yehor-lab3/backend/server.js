require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/vetmonitor')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/patients', require('./routes/patients'));

app.get('/', (req, res) => {
  res.json({ message: 'VetMonitor API is running with full features' });
});

// Real-time Vitals Simulation
let simulationInterval;
const startSimulation = () => {
  if (simulationInterval) clearInterval(simulationInterval);
  
  simulationInterval = setInterval(() => {
    // Generate dummy vitals
    const vitalsUpdate = {
      heartRate: Math.floor(60 + Math.random() * 40),
      temperature: (37.5 + Math.random() * 2).toFixed(1),
      timestamp: new Date()
    };
    
    // Broadcast to all connected clients
    io.emit('vitalsUpdate', vitalsUpdate);
  }, 3000); // Every 3 seconds
};

// Socket.io Connection
io.on('connection', (socket) => {
  console.log('A user connected via WebSocket', socket.id);
  
  // Start simulation if not already running when someone connects
  startSimulation();

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
    if (io.engine.clientsCount === 0) {
      clearInterval(simulationInterval);
      simulationInterval = null;
    }
  });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

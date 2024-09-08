import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, FormControl, InputLabel, Select, MenuItem 
} from '@mui/core';
import { updateImpedimentStatus } from '../services/api';

function UpdateStatusModal({ open, onClose, impedimentId, currentStatus, onStatusUpdate }) {
  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await updateImpedimentStatus(impedimentId, status);
      onStatusUpdate(status);
      onClose();
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Actualizar Estado del Impedimento</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel>Estado</InputLabel>
          <Select value={status} onChange={handleStatusChange}>
            <MenuItem value="pendiente">Pendiente</MenuItem>
            <MenuItem value="en_progreso">En Progreso</MenuItem>
            <MenuItem value="resuelto">Resuelto</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateStatusModal;

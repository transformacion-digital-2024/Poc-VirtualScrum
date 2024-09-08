import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/core';

function ImpedimentFilter({ filters, setFilters }) {
  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Proyecto</InputLabel>
          <Select
            name="project"
            value={filters.project}
            onChange={handleFilterChange}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="proyecto1">Proyecto 1</MenuItem>
            <MenuItem value="proyecto2">Proyecto 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Estado</InputLabel>
          <Select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="pendiente">Pendiente</MenuItem>
            <MenuItem value="en_progreso">En Progreso</MenuItem>
            <MenuItem value="resuelto">Resuelto</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default ImpedimentFilter;

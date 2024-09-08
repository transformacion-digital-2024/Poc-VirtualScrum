import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  Typography, Button 
} from '@mui/core';
import ImpedimentFilter from './ImpedimentFilter';
import useImpediments from '../hooks/useImpediments';

function ImpedimentList() {
  const [filters, setFilters] = useState({ project: '', status: '' });
  const { impediments, loading, error } = useImpediments(filters);

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>Lista de Impedimentos</Typography>
      <ImpedimentFilter filters={filters} setFilters={setFilters} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Proyecto</TableCell>
              <TableCell>Gerente de Proyecto</TableCell>
              <TableCell>Reportado por</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {impediments.map((impediment) => (
              <TableRow key={impediment.id}>
                <TableCell>{impediment.project}</TableCell>
                <TableCell>{impediment.projectManager}</TableCell>
                <TableCell>{impediment.reportedBy}</TableCell>
                <TableCell>{impediment.description}</TableCell>
                <TableCell>{impediment.status}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/impediment/${impediment.id}`}>
                    Ver detalles
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ImpedimentList;

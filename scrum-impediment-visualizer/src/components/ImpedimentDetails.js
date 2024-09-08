import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { 
  Typography, Paper, Grid, Button, Chip 
} from '@mui/core';
import { getImpedimentDetails } from '../services/api';
import UpdateStatusModal from './UpdateStatusModal';

function ImpedimentDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [impediment, setImpediment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchImpedimentDetails() {
      try {
        setLoading(true);
        const data = await getImpedimentDetails(id);
        setImpediment(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchImpedimentDetails();
  }, [id]);

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;
  if (!impediment) return <Typography>No se encontró el impedimento</Typography>;

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Detalles del Impedimento</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography><strong>Proyecto:</strong> {impediment.project}</Typography>
          <Typography><strong>Gerente de Proyecto:</strong> {impediment.projectManager}</Typography>
          <Typography><strong>Reportado por:</strong> {impediment.reportedBy}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography><strong>Fecha de reporte:</strong> {new Date(impediment.reportDate).toLocaleDateString()}</Typography>
          <Typography><strong>Estado:</strong> <Chip label={impediment.status} color="primary" /></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography><strong>Descripción:</strong></Typography>
          <Typography paragraph>{impediment.description}</Typography>
        </Grid>
        {impediment.suggestedSolution && (
          <Grid item xs={12}>
            <Typography><strong>Solución sugerida:</strong></Typography>
            <Typography paragraph>{impediment.suggestedSolution}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
            Actualizar Estado
          </Button>
          <Button variant="outlined" style={{ marginLeft: '10px' }} onClick={() => history.goBack()}>
            Volver
          </Button>
        </Grid>
      </Grid>
      <UpdateStatusModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        impedimentId={impediment.id}
        currentStatus={impediment.status}
        onStatusUpdate={(newStatus) => setImpediment({...impediment, status: newStatus})}
      />
    </Paper>
  );
}

export default ImpedimentDetails;

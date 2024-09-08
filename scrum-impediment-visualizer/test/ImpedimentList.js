import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImpedimentList from '../ImpedimentList';
import * as api from '../../services/api';

jest.mock('../src/services/api');

const mockImpediments = [
  {
    id: 1,
    project: 'Proyecto A',
    projectManager: 'Juan Pérez',
    reportedBy: 'Ana García',
    description: 'Problema con el servidor',
    status: 'pendiente',
  },
  // Agrega más impedimentos de prueba aquí
];

describe('ImpedimentList', () => {
  beforeEach(() => {
    api.getImpediments.mockResolvedValue(mockImpediments);
  });

  it('renders the impediment list correctly', async () => {
    render(
      <Router>
        <ImpedimentList />
      </Router>
    );

    expect(screen.getByText('Cargando...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Lista de Impedimentos')).toBeInTheDocument();
      expect(screen.getByText('Proyecto A')).toBeInTheDocument();
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
      expect(screen.getByText('Ana García')).toBeInTheDocument();
      expect(screen.getByText('Problema con el servidor')).toBeInTheDocument();
      expect(screen.getByText('pendiente')).toBeInTheDocument();
    });
  });

  it('displays an error message when API call fails', async () => {
    api.getImpediments.mockRejectedValue(new Error('API Error'));

    render(
      <Router>
        <ImpedimentList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Error: API Error')).toBeInTheDocument();
    });
  });
});

// src/pages/DieteticsPage.jsx
import React from 'react'
import { Container, Typography, Divider } from '@mui/material'

export default function DieteticsPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        🥗 Dietetics
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        gutterBottom
      >
        Get personalized meal plans and nutrition advice.
      </Typography>
      <Divider sx={{ my: 3 }} />

      {/* Removed AiAssistant and DieteticsChat components */}
    </Container>
  )
}

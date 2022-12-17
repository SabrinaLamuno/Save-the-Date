import * as React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { Box, CardMedia, createTheme, ThemeProvider } from '@mui/material';


interface Props {
  header: string;
  message: string;
  ps?: string;
  onClickNext?: any;
  onClickPrev?: any;
  isRsvp?: boolean;
  image: string;
  linkDePago?: string;
}

const theme = createTheme({
  typography: {
    fontFamily: [
      'Bodoni Moda',
      'serif',
    ].join(','),
  },
});

export default function BasicCard(props: Props) {
  const { header, message, ps, onClickNext, onClickPrev, image, linkDePago } = props
  return (
    <ThemeProvider theme={theme}>
    <StyledContainer sx={{ backgroundImage: `url(${image})` }}>
      <StyledCard sx={{ minWidth: 500, maxWidth: 500 }} elevation={24}>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={message}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {header}
          </Typography>
          <Typography variant="h5" component="div">
            {message}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {ps} {linkDePago && <StyledLink href={linkDePago} target="_blank" rel="noreferrer">link</StyledLink>}
          </Typography>
        </CardContent>
        <ButtonContainer>
          <StyledButton sx={{ display: onClickPrev ? 'block' : 'none' }} size="small" onClick={onClickPrev}>Regresar</StyledButton>
          <StyledButton sx={{ display: onClickNext ? 'block' : 'none' }} size="small" onClick={onClickNext}>Siguiente</StyledButton>
        </ButtonContainer>
      </StyledCard>
    </StyledContainer>
    </ThemeProvider>
  );
}

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: '#282c34',
  '&:hover': {
    backgroundColor: 'rgba(40, 44, 52, 0.15)',
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  animation: `${keyframes({
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  })} 2.5s ease-in-out`,
}));

const ButtonContainer = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  fontFamily: 'Corinthia, serif',
}));

const StyledLink = styled('a')(({ theme }) => ({
  backgroundColor: 'white',
  color: '#282c34',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(40, 44, 52, 0.15)',
  }
}));

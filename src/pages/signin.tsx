import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Metaware
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState("");
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  React.useEffect(() => {
    setResult("")
  }, []);

  const handleSubmit = () => {
    setResult(String(a + b));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => { setA(parseInt(e.target.value)) }} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => { setB(parseInt(e.target.value)) }} />
        <Typography>result:{result}</Typography>
        <Button type="button" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
          Result
        </Button>
        <Link href={`/?result=${result}`} >
          home
        </Link>
      </Container>
    </ThemeProvider>
  );
}
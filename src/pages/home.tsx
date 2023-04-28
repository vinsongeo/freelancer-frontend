import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { connect } from 'react-redux';
import { AnyARecord } from 'dns';
import { useNavigate } from 'react-router-dom';



const theme = createTheme();

function Home(props: any) {
    const navigate = useNavigate();
    React.useEffect(() => {

    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Typography>Home</Typography>
                <Typography>result:{props.state.user.result}</Typography>
                <Link onClick={() => { navigate("/signin") }} >
                    signin
                </Link>
            </Container>
        </ThemeProvider>
    );
}
export default connect((s: any) => ({ state: { user: s.user } }), (d: any) => ({ dispatch: { user: d.user } }))(Home);
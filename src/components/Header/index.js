import { Grid } from "@mui/material";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import "./styles.scss";

export default function Header(){
    return (
        <div className="header">
            <Grid container>
                <Grid item xs={3}>
                    Logo da Digital
                </Grid>

                <Grid item xs={5}>
                    Campo de busca
                </Grid>

                <Grid item xs={4}>
                    Botões

                    <Link href="#">Link</Link>
                        <Link href="#" color="inherit">
                            {'color="inherit"'}
                        </Link>
                         
                </Grid>
            </Grid>
        </div>
    );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function UserPage({client}) {
  
    return <>
        <Card sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, textAlign: 'right' }} color="text.secondary" gutterBottom>
                    {client.client_id}
                </Typography>
                <br/><br/><br/>
                
                <Typography variant="h5" component="div">
                    {client.first_name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1.5 }}>
                    {client.job}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                    {client.job_descriptor}
                </Typography>
               
            </CardContent>
        </Card>
    </>
}

export default UserPage;
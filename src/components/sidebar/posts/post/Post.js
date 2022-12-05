import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

type Props = {
    post: {
        userId: number,
        title: string,
        body: string
    }
}
export default function Post(props: Props) {
    return (
        <Box sx={ { minWidth: 275 } }>
            <Card variant='outlined'>{
                <React.Fragment>
                    <CardContent>
                        <Typography sx={ { fontSize: 14 } }
                                    color='text.secondary'
                                    gutterBottom>
                            { props.post.title }
                        </Typography>
                        <Typography variant='body2'>
                            { props.post.body }
                        </Typography>
                    </CardContent>
                </React.Fragment>
            }</Card>
        </Box>
    );
}
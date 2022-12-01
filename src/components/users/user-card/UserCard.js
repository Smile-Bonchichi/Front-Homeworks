import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
    user: {
        name: string,
        email: string,
        phone: string,
        website: string,
        address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: number,
                lng: number
            }
        },
        company: {
            name: string,
            catchPhrase: string,
            bs: string
        }
    }
}
export default function UserCard(props: Props) {
    return (
        <Card sx={ { minWidth: 275 } }>
            <CardContent>
                <Typography sx={ { fontSize: 15 } } color='text.primary'
                            gutterBottom>
                    { props.user.name }
                </Typography>
                <Typography sx={ { fontSize: 12 } } color='text.primary'
                            gutterBottom>
                    { props.user.email }
                </Typography>
                <Typography sx={ { fontSize: 12 } } color='text.primary'
                            gutterBottom>
                    { props.user.phone }
                </Typography>
                <Typography sx={ { fontSize: 12 } } color='text.primary'
                            gutterBottom>
                    { props.user.website }
                </Typography>
                <Typography sx={ { fontSize: 12 } } color='text.primary'
                            gutterBottom>
                    { `
                    ${ props.user.address.city },
                    ${ props.user.address.street },
                    ${ props.user.address.suite },
                    ${ props.user.address.zipcode },
                    ${ props.user.address.geo.lat }-${ props.user.address.geo.lng }
                    ` }
                </Typography>
                <Typography sx={ { fontSize: 12 } } color='text.primary'
                            gutterBottom>
                    { `
                    ${ props.user.company.name },
                    ${ props.user.company.catchPhrase },
                    ${ props.user.company.bs }
                    ` }
                </Typography>
            </CardContent>
        </Card>
    );
}
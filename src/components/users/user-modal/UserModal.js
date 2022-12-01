import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UserCard from '../user-card/UserCard.js';

type Props = {
    user: {
        username: string,
    },
    open: boolean,
    setOpen: Function,
};
export default function UserModal(props: Props) {
    
    const handleClose = () => {
        props.setOpen(false);
    };
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3
    };
    
    return (
        <Modal
            open={ props.open }
            onClose={ handleClose }
            aria-labelledby='parent-modal-title'
            aria-describedby='parent-modal-description'
        >
            <Box sx={ { ...style, width: 400 } }>
                <h2 id='parent-modal-title'>{ props.user.username }</h2>
                <p id='parent-modal-description'>
                    <UserCard user={ props.user }/>
                </p>
            </Box>
        </Modal>
    );
}

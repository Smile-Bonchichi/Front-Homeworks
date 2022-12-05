import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar.js';
import {
    AppBar, Box, CssBaseline, IconButton, styled, Toolbar, Typography
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { DrawerHeader } from '../../components/UI/DrawerHeader/DrawerHeader.js';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes/index.js';

export default function MainPage() {
    const [open, setOpen] = React.useState(false);
    const sidebarName = routes;
    const [title, setTitle] = React.useState(sidebarName[0].text);
    
    const AppBarUI = styled(AppBar, {
        shouldForwardProp: (prop) => prop !== 'open'
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            marginLeft: 240,
            width: `calc(100% - 240px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        })
    }));
    
    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    
    return (
        <Box sx={ { display: 'flex' } }>
            <CssBaseline/>
            <AppBarUI position='fixed' open={ open }>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={ handleDrawerOpen }
                        edge='start'
                        sx={ {
                            marginRight: 5,
                            ...(open && { display: 'none' })
                        } }
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6' noWrap component='div'>
                        { title }
                    </Typography>
                </Toolbar>
            </AppBarUI>
            <Sidebar
                sidebarName={ sidebarName }
                open={ open }
                setOpen={ setOpen }
                setTitle={ setTitle }
            />
            <Box component='main' sx={ { flexGrow: 1, p: 3 } }>
                <DrawerHeader/>
                <Routes>
                    {
                        routes.map((route) => {
                            return <Route key={ route.text }
                                          path={ route.url }
                                          element={ route.element }/>;
                        })
                    }
                </Routes>
            </Box>
        </Box>
    );
}


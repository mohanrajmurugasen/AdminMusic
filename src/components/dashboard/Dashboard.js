import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
// import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { useNavigate } from 'react-router';
import Logo from '../../assets/img/01.png'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OneRelease from '../pages/oneRelease';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CampaignIcon from '@mui/icons-material/Campaign';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import authAxios from '../../interceptors/authAxios';
import { CTooltip } from '@coreui/react';
import MusicList from '../pages/MusicList';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [oneRel, setoneRel] = React.useState(false);
  const [multiRel, setmultiRel] = React.useState(false);
  const [over, setover] = React.useState(true);
  const [cat, setcat] = React.useState(false);
  const [analy, setanaly] = React.useState(false);
  const [promo, setpromo] = React.useState(false);
  const [finance, setfinance] = React.useState(false);
  const [neigh, setneigh] = React.useState(false);
  const [leg, setleg] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const oneRelease = () => {
    setoneRel(true);setmultiRel(false);setover(false);setcat(false);setanaly(false);setpromo(false);setfinance(false);setneigh(false);setleg(false);
  }
  const overview = () => {
    setoneRel(false);setmultiRel(false);setover(true);setcat(false);setanaly(false);setpromo(false);setfinance(false);setneigh(false);setleg(false);
  }
  const musicList = () => {
    setoneRel(false);setmultiRel(false);setover(false);setcat(true);setanaly(false);setpromo(false);setfinance(false);setneigh(false);setleg(false);
  }
  const analytic = () => {
    setoneRel(false);setmultiRel(false);setover(false);setcat(false);setanaly(true);setpromo(false);setfinance(false);setneigh(false);setleg(false);
  }
  const promotion = () => {
    setoneRel(false);setmultiRel(false);setover(false);setcat(false);setanaly(false);setpromo(true);setfinance(false);setneigh(false);setleg(false);
  }
  const financial = () => {
    setoneRel(false);setmultiRel(false);setover(false);setcat(false);setanaly(false);setpromo(false);setfinance(true);setneigh(false);setleg(false);
  }
  const neighbour = () => {
    setoneRel(false);setmultiRel(false);setover(false);setcat(false);setanaly(false);setpromo(false);setfinance(false);setneigh(true);setleg(false);
  }
  const legal = () => {
    setoneRel(false);setmultiRel(false);setover(false);setcat(false);setanaly(false);setpromo(false);setfinance(false);setneigh(false);setleg(true);
  }

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  }

  React.useEffect(() => {
    authAxios.post('getall').then(res => {
      console.log(res.data);
    }).catch(err => {
      console.error(err.message);
    })
  },[])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex',position: "fixed",width: "100%",height: "100%" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{backgroundColor:"whitesmoke"}}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#383a50"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Overview
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{color:'#383a50'}} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" style={{marginLeft:"10px"}} onClick={logout}>
              <LogoutIcon style={{color:'#383a50'}} />
              <div style={{fontSize: "16px",paddingLeft: "3px",color:'#383a50'}}>Logout</div>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
              <img alt='mn' src={Logo} style={{maxWidth:"93px",margin: "auto"}} />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <div>
              <CTooltip
                content="Dashboard"
                placement="right"
              >
                <ListItem button style={{backgroundColor:over ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={overview}>
                <ListItemIcon>
                    <DashboardIcon style={{color: "#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
              </CTooltip>
              <CTooltip
                content="Music Upload"
                placement="right"
              >
                <ListItem button style={{backgroundColor:oneRel ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={oneRelease}>
                <ListItemIcon>
                    <MusicNoteIcon style={{color: "#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Music Upload" />
                </ListItem>
              </CTooltip>
              <CTooltip
                content="MusicList"
                placement="right"
              >
                <ListItem button style={{backgroundColor:cat ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={musicList}>
                <ListItemIcon>
                    <LibraryMusicIcon style={{color:"#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="MusicList" />
                </ListItem>
              </CTooltip>
              <CTooltip
                content="Analytics"
                placement="right"
              >
                <ListItem button style={{backgroundColor:analy ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={analytic}>
                <ListItemIcon>
                    <AnalyticsIcon style={{color:"#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
                </ListItem>
              </CTooltip>
              <CTooltip
                content="Promotion"
                placement="right"
              >
                <ListItem button style={{backgroundColor:promo ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={promotion}>
                <ListItemIcon>
                    <CampaignIcon style={{color: "#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Promotion" />
                </ListItem>
              </CTooltip>
              <CTooltip
                content="Financial"
                placement="right"
              >
                <ListItem button style={{backgroundColor:finance ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={financial}>
                <ListItemIcon>
                    <MonetizationOnIcon style={{color:"#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Financial" />
                </ListItem>
              </CTooltip>
              <CTooltip
                content="Send Notification"
                placement="right"
              >
                <ListItem button style={{backgroundColor:neigh ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={neighbour}>
                <ListItemIcon>
                    <NotificationsActiveIcon style={{color: "#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Send Notification" />
                </ListItem>
              </CTooltip>
                <CTooltip
                content="Legal"
                placement="right"
              >
                <ListItem button style={{backgroundColor:leg ? "rgba(0, 0, 0, 0.04)" : null,color:"#383a50"}} onClick={legal}>
                <ListItemIcon>
                    <VpnLockIcon style={{color:"#383a50"}} />
                </ListItemIcon>
                <ListItemText primary="Legal" />
                </ListItem>
              </CTooltip>
            </div>
          </List>
        </Drawer>
        { over ? 
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',

          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box> : oneRel ? <OneRelease/> : multiRel ? null : cat ? <MusicList/> : analy ? null : promo ? null : finance ? null : neigh ? null : leg ? null : null }
      </Box> 
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

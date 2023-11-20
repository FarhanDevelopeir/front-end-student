import React, { useState } from 'react'
// import { TocRounded } from '@material-ui/icons';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DashboardRounded } from '@material-ui/icons';
import { ColorLensRounded } from '@material-ui/icons';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion'
import { UseContextdata } from '../Context/Contaxtapi';
import BarChartIcon from '@mui/icons-material/BarChart';



const UserSidebar = () => {
    const [open, setOpen] = useState(true)
    const { handleSidebarItemClick } = UseContextdata();
    const [theme, setTheme] = useState('default');

    const handleThemeChange = () => {
        // Toggle the theme between 'default' and 'dark' on each click
        setTheme(theme === 'default' ? 'dark' : 'default');
    };

    const sidebarStyle = {
        default: {
             background: `linear-gradient(170deg,#176eb5,#d545d7)`
            // Other default theme styles
        },
        dark: {
            backgroundColor: '#333',
            // Other dark theme styles
        },
    };

    const handleitems = (itemName) => {
        handleSidebarItemClick(itemName);
    };
   

    const handleToggle = () => {
        setOpen(!open)
    }
    const sideContainerVariants = {
        true: {
            width: '100%'
        },
        false: {
            width: '80px',
            transition: {
                delay: 0.1,
                duration: 0.4

            }
        }
    }

    return (
        <motion.div
           
            data-open={open}
            variants={sideContainerVariants}
            animate={{ flex: open ? 3 : 1 }}
            // animate={open}
            className='adminsidebar'>
            <motion.div
                data-open={open}
                variants={sideContainerVariants}
                initial={`${open}`}
                animate={`${open}`}
                style={sidebarStyle[theme]}
                className='sidebar'>
                <motion.div
                    animate={{ alignSelf: open ? 'flex-end' : 'center', flexDirection: 'column', padding: '3px' }}
                    onClick={handleToggle}
                    whileHover={{
                        cursor: "pointer",
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        backgroundFilter: 'blur(3.5px)',
                        WebkitBackdropFilter: 'blur(3.5px)',
                    }}
                    className='menu_icon'>
                    {open === true ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
                </motion.div>
                <div className='groups' _>
                    <div className='group' _>
                        <motion.h4
                        _
                            animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0, display: open ? '' : 'none' }}
                        >Content</motion.h4>
                        <motion.div
                            animate={{ marginTop: open ? '' : '30px' }}
                            className='items'
                            onClick={()=>handleitems('dashboard')}
                            >
                            <motion.div
                            _
                                className='dash_icon'>
                                <DashboardRounded _/>
                            </motion.div>
                            <motion.span
                            _
                                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
                            >Dashboard</motion.span>
                        </motion.div>
                        <div className='items' 
                        onClick={()=>handleitems('Attendance Record')}
                        >
                            <div
                            _
                            className='dash_icon'>
                                <BarChartIcon _/>
                            </div>
                            <motion.span
                            _
                                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
                            >Attendance Record</motion.span>
                        </div>
                        
                    </div>
                    <div className='group' _>
                        <motion.h4
                        _
                            animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0, display: open ? '' : 'none' }}
                        >Customize</motion.h4>
                        <div className='items' 
                        onClick={handleThemeChange}
                        >
                            <div className='dash_icon'
                            _
                            >
                                <ColorLensRounded _/>
                            </div>
                            <motion.span
                            _
                                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
                            >Theme</motion.span>
                        </div>

                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default UserSidebar





import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './Invoice.css';
import invoiceImage from '../Images/invoiceImage.png';

function Invoice({ date }) {
    console.log(date, "ggggg")
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}>
                {date}
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus>
                <div className="popover" style={{ display: "grid", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>Invoice:</div>
                        <img src={invoiceImage} alt="Invoice" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography>Seal 1:</Typography>
                        <img src={invoiceImage} alt="Seal 1" />
                        <Typography>Seal 3:</Typography>
                        <img src={invoiceImage} alt="Seal 3" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography>Seal 2:</Typography>
                        <img src={invoiceImage} alt="Seal 2" />
                        <Typography>Seal 4:</Typography>
                        <img src={invoiceImage} alt="Seal 4" />
                    </div>
                </div>
            </Popover>
        </div>
    );
}
export default Invoice;

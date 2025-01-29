import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Header from '../../components/Header';

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Stack direction={'column'} gap={2}>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={[
            expanded
              ? {
                  [`& .${accordionClasses.region}`]: {
                    height: 'auto',
                  },
                  [`& .${accordionDetailsClasses.root}`]: {
                    display: 'block',
                  },
                }
              : {
                  [`& .${accordionClasses.region}`]: {
                    height: 0,
                  },
                  [`& .${accordionDetailsClasses.root}`]: {
                    display: 'none',
                  },
                },
          ]}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">General settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>I am an accordion</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>You are currently not an owner</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Advanced settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Filtering has been entirely disabied for whole web server
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>You are currently not an owner</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Advanced settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Filtering has been entirely disabied for whole web server
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
}

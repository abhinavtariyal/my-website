import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


function createData(name, title, history) {
  return {
    name,
    title,
    history,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset"} }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className="font-semibold">
          {row.name}
        </TableCell>
        <TableCell align="center" className="font-semibold">{row.title} </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="pb-0 pt-0 bg-slate-800 m-0" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography gutterBottom component="div" className="text-white">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="text-white">Date</TableCell>
                    <TableCell className="text-white" align="center">Key Responsibilties</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date} >
                      <TableCell component="th" scope="row" className="text-white">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>
                        {historyRow.responsibilties.map(
                          (responsibility, index) => (
                            <li className="text-white" key={index}>{responsibility}</li>
                          )
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    history: PropTypes.arrayOf(
      PropTypes.shape({
        responsibilties: PropTypes.arrayOf(PropTypes.string).isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("Fiverr", "Freelancer", [
    {
      date: "May 2023 - Present",
      responsibilties: [
        "Optimize application performance and scalability through code refactoring and database optimization. ",
        "Integrate third-party APIs and services to enhance application functionality. ",
        "Optimize the website's design and functionality to improve the conversion rate. ",
        " Accomplished a 10% increase in the conversion rate for the website. ",
        "Implement measures to decrease the bounce rate, which is the percentage of visitors who leave the website after viewing only one page.",
        "Reduced the bounce rate by 15% of the website. ",
        "Conduct thorough testing and debugging of applications to ensure high-quality deliverables ",
        "Develop and maintain web applications using front-end and back-end technologies like Next.js, React. ",
        "Continuously improve skills and knowledge through professional development opportunities ",
        "Stay up-to-date with industry trends and best practices ",
        "Communicate effectively with clients to understand their needs and expectations ",
      ],
    },
  ]),
  createData("DXC Technology", "Software Engineer", [
    {
      date: "April 2022 - May 2023",
      responsibilties: [
        "Continuously improve software development processes and practices Assist in the deployment and maintenance of software applications. ",
        "Participate in software development life cycle activities such as requirement analysis, design, and implementation. ",
        "Stay updated with the latest industry trends and technologies. ",
        "Conduct code reviews and provide constructive feedback to team members.",
         "Successfully reduced the response time of the application to be loaded by 30% and improved overall performance and interactivity of the application. ",
        "Ensure that the website is fully responsive and works well on different mobile devices. ",
        "Achieved a score of 90+ on Google's Mobile-Friendly Test .",
        "Improve search engine ranking: Implement SEO strategies to enhance the website's visibility in search engine results. ", 
        "Achieved a 20% increase in organic search traffic .",
        "Implement measures to minimize website downtime and ensure maximum uptime.", 
        "Achieved 99.9% uptime of the website for a year .",
        "Collaborate with cross-functional teams to gather and analyze user requirements. ", 
        "Participate in software development life cycle activities such as requirement analysis, design, and implementation. ",
        "Develop and maintain software applications using various programming languages and technologies like Node.js, React.js, Java and React Native. ",
        "Conduct testing and debugging of software applications to ensure functionality and identify any defects or issues with JEST and Jasmine. ",
      ],
    },
  ]),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className="font-bold">Company Name</TableCell>
            <TableCell className="font-bold" align="center">Job Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

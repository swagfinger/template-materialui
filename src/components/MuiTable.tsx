import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Donni",
    last_name: "Chadwen",
    email: "dchadwen0@bbb.org",
    gender: "Female",
    ip_address: "174.207.213.213",
  },
  {
    id: 2,
    first_name: "Stephenie",
    last_name: "Oury",
    email: "soury1@cbslocal.com",
    gender: "Female",
    ip_address: "149.80.31.12",
  },
  {
    id: 3,
    first_name: "Marlyn",
    last_name: "Oleksinski",
    email: "moleksinski2@ftc.gov",
    gender: "Female",
    ip_address: "83.55.0.74",
  },
  {
    id: 4,
    first_name: "Estrella",
    last_name: "Dytham",
    email: "edytham3@prlog.org",
    gender: "Female",
    ip_address: "113.51.56.87",
  },
  {
    id: 5,
    first_name: "Irv",
    last_name: "Frediani",
    email: "ifrediani4@skyrock.com",
    gender: "Male",
    ip_address: "134.92.115.108",
  },
  {
    id: 6,
    first_name: "Gayel",
    last_name: "Kaley",
    email: "gkaley5@psu.edu",
    gender: "Female",
    ip_address: "150.248.126.130",
  },
  {
    id: 7,
    first_name: "Anallese",
    last_name: "Bissill",
    email: "abissill6@pen.io",
    gender: "Female",
    ip_address: "128.22.36.23",
  },
  {
    id: 8,
    first_name: "Binny",
    last_name: "Streight",
    email: "bstreight7@miibeian.gov.cn",
    gender: "Female",
    ip_address: "195.91.93.218",
  },
  {
    id: 9,
    first_name: "Flss",
    last_name: "Feldheim",
    email: "ffeldheim8@fotki.com",
    gender: "Female",
    ip_address: "130.218.225.100",
  },
  {
    id: 10,
    first_name: "Rad",
    last_name: "Prosh",
    email: "rprosh9@freewebs.com",
    gender: "Male",
    ip_address: "61.20.115.208",
  },
];

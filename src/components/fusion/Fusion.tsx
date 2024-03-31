import "../fusion/fusion.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { recoArtists, recoTracks } from "../../data";

const columns: readonly Column[] = [
  { id: "id", label: "#", minWidth: 10 },
  { id: "image", label: "", minWidth: 20 },
  {
    id: "artist",
    label: "artist",
    minWidth: 50,
    align: "center",
  },
];
interface Column {
  id: "id" | "image" | "artist";
  label: string;
  minWidth?: number;
  align?: "center";
}
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Fusion = () => {
  return (
    <div className="fusion">
      <div className="user-card">
        <img src="/noavatar.png" alt="" />
        <span>User 1</span>

        <button className="button-33">Invite</button>
      </div>
      <div className="invitee-card">
        <img src="/noavatar.png" alt="" />
        <span>Friend</span>
        <button className="button-34">FUSE</button>
      </div>

      <Paper sx={{ width: "50%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      maxHeight: 20,
                      fontFamily: "Montserrat",
                      color: "white",
                      background: "rgb(25, 20, 20)",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {recoArtists.map((artist) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={artist.id}>
                    <TableCell>{artist.id}</TableCell>
                    <TableCell>
                      <img
                        src={artist.image}
                        style={{ height: 30, width: 30 }}
                      />
                    </TableCell>
                    <TableCell>{artist.artist}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Fusion;

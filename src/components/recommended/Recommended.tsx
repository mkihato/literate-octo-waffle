import "../recommended/recommended.scss";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { recoArtists } from "../../data";

interface Column {
  id: "id" | "image" | "artist";
  label: string;
  minWidth?: number;
  align?: "center";
}

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

const Recommended = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="recommended">
      <h2>Recommended Artists</h2>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, maxHeight: 20 }}
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
      <div className="recommendedTracks">
        <h2>Recommended Tracks</h2>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
      </div>
    </div>
  );
};

export default Recommended;

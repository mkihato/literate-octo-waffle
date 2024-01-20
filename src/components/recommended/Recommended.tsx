import "../recommended/recommended.scss";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { recoArtists, recoTracks } from "../../data";

interface Column {
  id: "id" | "image" | "artist";
  label: string;
  minWidth?: number;
  align?: "center";
}
interface Column2 {
  id: "title" | "image" | "tracks";
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
const columns2: readonly Column2[] = [
  { id: "image", label: "", minWidth: 20 },
  {
    id: "title",
    label: "title",
    minWidth: 50,
    align: "center",
  },
  {
    id: "tracks",
    label: "tracks",
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
      <h2>Recommended Tracks</h2>
      {/* <div className="recommendedTracks">
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
      </div> */}

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns2.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      maxHeight: 10,
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
              {recoTracks.map((tracks) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={tracks.id}>
                    <TableCell>
                      <img
                        src={tracks.image}
                        style={{ height: 30, width: 30 }}
                      />
                    </TableCell>
                    <TableCell>{tracks.title}</TableCell>
                    <TableCell>{tracks.artist}</TableCell>
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

export default Recommended;

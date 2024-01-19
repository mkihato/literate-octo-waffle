import "../content/content.scss";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { tracks } from "../../data";
// import { tracks } from "../../data";
// type props = {
//   id: number;
//   image: string;
//   title: string;
//   artist: string;
//   album: string;
//   duration: string;
interface Column {
  id: "id" | "image" | "title" | "artist" | "album" | "duration";
  label: string;
  minWidth?: number;
  align?: "center";
}

const columns: readonly Column[] = [
  { id: "id", label: "id", minWidth: 10 },
  { id: "image", label: "", minWidth: 50 },
  { id: "title", label: "Title", minWidth: 110 },

  {
    id: "artist",
    label: "artist",
    minWidth: 140,
    align: "center",
  },
  {
    id: "album",
    label: "Album",
    minWidth: 170,
    align: "center",
  },
  {
    id: "duration",
    label: "Duration",
    minWidth: 100,
    align: "center",
  },
];

interface Data {
  id: number;
  image: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
}

export default function StickyHeadTable() {
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
    <Paper sx={{ width: "90%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tracks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((track) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={track.id}>
                    <TableCell>{track.id}</TableCell>
                    <TableCell>
                      <img
                        src={track.image}
                        style={{ height: 40, width: 40 }}
                      />
                    </TableCell>
                    <TableCell>{track.title}</TableCell>
                    <TableCell>{track.artist}</TableCell>
                    <TableCell align="center">{track.album}</TableCell>
                    <TableCell align="center">{track.duration}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 49]}
        component="div"
        count={tracks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

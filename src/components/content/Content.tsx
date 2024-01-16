import "../content/content.scss";
import React, { useState } from "react";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { tracks } from "../../data";

// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

type props = {
  id: number;
  image: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
};
const Content = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  return (
    <PrimeReactProvider>
      <div className="content">
        <h1>Your Tracks</h1>
        <div className="card">
          <DataTable
            value={tracks}
            stripedRows
            tableStyle={{ minWidth: "30rem" }}
          >
            <Column field="id" header="#"></Column>
            <Column field="image" header=""></Column>
            <Column field="title" header="Title"></Column>
            <Column field="artist" header="Artsit"></Column>
            <Column field="album" header="Album"></Column>
            <Column field="duration" header="Duration"></Column>
          </DataTable>
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default Content;

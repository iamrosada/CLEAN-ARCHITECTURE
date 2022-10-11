import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Person } from "@/model";
import { Checkbox } from "@mui/material";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = React.useState<Person[]>([]);

  const pageSize = 5;

  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);

  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    setSelectedPeople(
      findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
    );
  };
  const columns = [
    {
      field: "actions",
      headerName: " ",
      types: "actions",
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      disableColumnFilter
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      columns={columns}
      rows={People}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;

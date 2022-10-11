import React from "react";
import { People } from "@/data";
import { PeopleTable } from "@/pages";
import { addPeople } from "@/redux/states";
import { useDispatch } from "react-redux";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;

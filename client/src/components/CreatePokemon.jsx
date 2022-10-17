import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemons, getTypes, saveNewPokemon } from "../actions";

import { GET_POKEMON } from "../../actions";

function CreatePokemon() {

const [dataForm, setDataForm] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    urlImg: "",
  });

const [error, setError] = useState({});
 const [disabled, setDisabled] = useState(true); 



}
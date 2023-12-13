import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
  usernam: '',
  password: ''
};

const AuthProvider = ({childen}) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('user'));

  const [form, setForm] = useState(initialState);

  const [user, setUser] = useState(isAuth ?  localStorage.getItem('user') : '');


  const navigate = useNavigate();

  const handelChange = e => {
    setForm({
        ...form,
        [e.target.name] : e.target.value,
    });
  }

};

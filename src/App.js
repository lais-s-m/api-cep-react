import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';

import CepContainer from './components/CepContainer';
import AddressContainer from './components/AddressContainer';
import UserDateContainer from './components/UserDateContainer';

import { Container } from './GlobalStyles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [ userData, setUserData ] = useState({});

  const [ cep, setCep ] = useState('');

  const [ rua, setRua ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ complemento, setComplemento ] = useState('');
  const [ bairro, setBairro ] = useState('');
  const [ cidade, setCidade ] = useState('');
  const [ estado, setEstado ] = useState('');

  const [ address, setAddress ] = useState({});

  const [ show, setShow ] = useState(false);

  const getAddress = () => {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res)=> {
        setRua(res.data.logradouro);
        setNumero(res.data.complemento);
        setBairro(res.data.bairro);
        setCidade(res.data.localidade);
        setEstado(res.data.uf);
        setShow(true);
      })
      .catch((err)=> console.log(err));
  }

  useEffect(()=> {
    if (rua && numero && bairro && cidade && estado){
      setAddress({
        cep: cep,
        logradouro: rua,
        bairro: bairro,
        localidade: cidade,
        uf: estado
      })
      setUserData({...userData, address:{...address}})
    }
  }, [rua, numero, bairro, cidade, estado])

  const sendData = () => {
    if (rua && numero && bairro && cidade && estado){  
      axios.post('https://m2-api-post.herokuapp.com/api/user', JSON.stringify(userData))
          .then((res)=> {
            console.log(res)
            toast.success('Endereço enviado com sucesso')
          })
    } else {
        toast.error('Por favor, preencha todos os campos para que seu endereço seja enviado')
    }
  }

  const sendUserDate = (data) => {
    delete data.confirmEmail;
    delete data.confirmPassword;
    setUserData(data);
  }

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório').trim()
    .matches(/^[aA-zZ\s]+$/, "Permitido apenas letras")
    .min(3, 'Mínimo 3 letras'),
    email: yup.string().email('Email inválido').required('Email obrigatório').trim(),
    confirmEmail: yup.string().oneOf([yup.ref('email')], 'Email não confere')
    .required('Obrigatório digitar email novamente'),
    phone: yup.string().required('Telefone obrigatório'),
    password: yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'A senha precisa conter 8 caracteres. Dentre eles, deve conter no mínimo uma letra maiúscula, uma minúscula, um número e um caractere especial.').required('Senha obrigatória'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Senha não confere')
    .required('Obrigatório digitar senha novamente')
  })

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver (formSchema)});

  return (
    <>
      <UserDateContainer
          register={register}
          errors={errors}
          handleSubmit={handleSubmit} sendUserDate={sendUserDate}
      />
      <Container>
        <CepContainer
          handleSubmit={handleSubmit}
          getAddress={getAddress}
          cep={cep}
          setCep={setCep}
        />
        { show === true && (
            <AddressContainer
              handleSubmit={handleSubmit}
              sendData={sendData}
              rua={rua}
              setRua={setRua}
              numero={numero}
              setNumero={setNumero}
              complemento={complemento}
              setComplemento={setComplemento}
              bairro={bairro}
              setBairro={setBairro}
              cidade={cidade}
              setCidade={setCidade}
              estado={estado}
              setEstado={setEstado}
            />
              )
        }
      </Container>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </>
  );
}

export default App;

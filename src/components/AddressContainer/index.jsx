import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddressContainer ({ handleSubmit, sendData, rua, setRua, numero, setNumero, complemento, setComplemento, bairro, setBairro, cidade, setCidade, estado, setEstado}) {
    return (
        <form onSubmit={handleSubmit(sendData)}>
              <TextField 
                id="outlined-basic"
                label="rua"
                variant="outlined"
                value={rua}
                onChange={(event)=> setRua(event.target.value) }
              />
              <span>{rua === '' && 'Rua obrigatória'}</span>
              <TextField 
                id="outlined-basic"
                label="número"
                variant="outlined"
                value={numero}
                onChange={(event)=> setNumero(event.target.value) }
              />
              <span>{numero === '' && 'Número obrigatório'}</span>
              <TextField 
                id="outlined-basic"
                label="complemento"
                variant="outlined"
                value={complemento}
                onChange={(event)=> setComplemento(event.target.value) }
              />
              <TextField 
                id="outlined-basic"
                label="bairro"
                variant="outlined"
                value={bairro}
                onChange={(event)=> setBairro(event.target.value) }
              />
              <span>{bairro === '' && 'Bairro obrigatório'}</span>
              <TextField 
                id="outlined-basic"
                label="cidade"
                variant="outlined"
                value={cidade}
                onChange={(event)=> setCidade(event.target.value) }
              />
              <span>{cidade === '' && 'Cidade obrigatória'}</span>
              <TextField 
                id="outlined-basic"
                label="estado"
                variant="outlined"
                value={estado}
                onChange={(event)=> setEstado(event.target.value) }
              />
              <span>{estado === '' && 'Estado obrigatório'}</span>
              <Button 
                variant="contained"
                type='submit'
              >Confirmar</Button>
        </form>
    )
}

export default AddressContainer;
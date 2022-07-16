import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CepContainer ({ handleSubmit, getAddress, cep, setCep }) {
    return (
        <form onSubmit={handleSubmit(getAddress)}>
            <section>
            <TextField 
                id="outlined-basic"
                label="digite aqui seu CEP"
                variant="outlined"
                value={cep}
                onChange={(event)=> setCep(event.target.value) }
            />
            <Button 
                variant="outlined"
                type='submit'
            >Buscar CEP</Button>
            </section>
      </form>
    )
}

export default CepContainer;
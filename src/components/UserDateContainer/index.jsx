import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Container } from '../../GlobalStyles';

function UserDateContainer ({ register, errors, handleSubmit, sendUserDate }) {
    return (
        <Container>
            <form onSubmit={handleSubmit(sendUserDate)}>
                <TextField 
                    id="outlined-basic"
                    label="nome"
                    variant="outlined"
                    {...register('name')}
                />
                <span>{errors.name?.message}</span>
                <TextField 
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    {...register('email')}
                />
                <span>{errors.email?.message}</span>
                <TextField 
                    id="outlined-basic"
                    label="confirmar email"
                    variant="outlined"
                    {...register('confirmEmail')}
                />
                <span>{errors.confirmEmail?.message}</span>
                <TextField 
                    id="outlined-basic"
                    label="phone"
                    variant="outlined"
                    {...register('phone')}
                />
                <span>{errors.phone?.message}</span>
                <TextField 
                    id="outlined-basic"
                    label="senha"
                    variant="outlined"
                    {...register('password')}
                />
                <span>{errors.password?.message}</span>
                <TextField 
                    id="outlined-basic"
                    label="confirmar senha"
                    variant="outlined"
                    {...register('confirmPassword')}
                />
                <span>{errors.confirmPassword?.message}</span>
                <Button 
                    variant="contained"
                    type='submit'
                >Enviar</Button>
            </form>
        </Container>
    )
}

export default UserDateContainer;
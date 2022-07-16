import styled from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    
    width: 100vw;

    form {
        display: inline-flex;
        flex-direction: column;
        
        padding: 10px;

        width: 30vw;

        section {
            display: inline-flex;
            flex-direction: row;

            justify-content: center;
            align-items: center;

            button {
            }
        }

        div {
            margin: 5px;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            color: red;

            margin-left: 18px;
        }
    }
`
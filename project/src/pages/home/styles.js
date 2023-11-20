import styled from 'styled-components';

export const General = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
background-color: #4c16c9;
width: 100%;
height: 56px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 15px;

p {
    color: #ffffff;
}
`

export const Container = styled.div`
    width: 1008px;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    border-bottom: solid 2px #D8E1EB;
    padding-bottom: 82px;
`

export const Box1 = styled.div`
    h1 {
        font-weight: 600;
    }
`

export const Box2 = styled.div`
    display: flex;
    gap: 10px;

    input {
        width: 200px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #C5D2E0;
        padding: 11px 11px;
    }

    select {
        width: 198px;
        height: 38px;
        padding: 11px 7px;
    }

    .ContainerItems{
        display: grid;
        grid-template-columns: 240px 240px 240px 240px;
        gap: 16px;
    }
`

export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 255px);
    gap: 20px;
    margin-top: 40px;
`

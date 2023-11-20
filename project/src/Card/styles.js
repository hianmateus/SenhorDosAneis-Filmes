import styled from 'styled-components';

export const Container = styled.div`
    width: 255px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
.Boximg {
    background-color: #ABBBCC;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.Boxdesc {
    display: flex;
    flex-direction: column;
    padding: 16px;

    h3 {
        font-weight: 600;
    }

    .Award {
        margin-top: 16px;
        margin-bottom: 16px;
       display: flex;
       flex-direction: row;
    }

    img {
        height: 20px
    }

    .Boxval {
        display: flex;
        flex-direction: row;

        
    }

    .val1 {
        width: 88px;

        h4 {
            font-weight: 600;
        }
    }
    .val2 {
        width: 88px;
        
        h4 {
            font-weight: 600;
        }
    }
}
`


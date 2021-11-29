import styled from "styled-components";

export const SearchContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    min-height: 12px;
    flex: 1;
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    padding: 30px;
    & input {
        flex: 1;
        border: none;
        appearance: none;
        font-size: 1.2rem;
        outline: none;
        heiht: 60px;
        line-height: 5px;
        border: 1px solid #333;
        border-radius: 5px;
        padding: 12px 18px;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        width: 100%;
    }
`
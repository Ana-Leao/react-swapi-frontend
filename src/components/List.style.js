import styled from "styled-components";

export const Items = styled.ul`
    list-style: none;
    & li {
        font-size: 1.2rem;
        color: #333;
        font-weight: 500;
        flex-direction: row;
        height: 3.125rem;
        line-height: 5px;
        border: 1px solid #ffc107;
        border-radius: 5px;
        padding: 1rem 1.2rem;
        justify-content: space-between;
        aling-items: center;
        background: #fff;
        cursor: pointer;
        &:hover {
            background: #f6f6f6;
        }
        & button {
            font-size: 0.9rem;
            color: #ffc107;
            line-height: 5px;
            text-decoration: none;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
        }

    } 
`;


import styled from "styled-components";


export const DisplayGallery = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const DisplayIMG = styled.img`
  max-width: 75%;
`;

export const DisplayForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 2px;
`;

export const FormLabel = styled.label`
  width: 52%;
  display: flex;
  align-self: center;
  margin: 0;

`;

export const FormInput = styled.input`
  width: 50%;
  height: 20%;
  margin: .5em 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  align-self: center; 
`;

export const SubmitButton = styled.button`
  background: linear-gradient(45deg, #6E1D87, #521565, #370E44);
  color: white;
  padding: 10px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  width: 50%;
`;
import styled from "styled-components";



export const IndivGalleryStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: scale-down;
  width: 50%;
  height: 100%;
  border-radius: 5px;
  background: #3f2346;
  box-shadow: 
    inset -1px 1px 20px 8px #000000, 
    -8px -8px 12px 0 #380F43;
`;

export const FormLabel = styled.label`
  width: 75%;
  display: flex;
  margin: 0;
`;

export const FormInput = styled.input`
  width: 75%;
  height: 20%;
  margin: .5em 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const CheckboxParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5px 0;
  justify-content: inherit;
`;

export const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  justify-content: space-between;
`;

export const CheckboxInput = styled.input`
  margin: 0;
  padding: 0;
  border: none;
  align-self: flex-start;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  text-align: left;
`;

export const DisplayRecords = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DisplayOptions = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitDiv = styled.div`
  height: 50%; 
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
  float: right;
  width: 50%;
`;

export const ImageSizing = styled.img`
  max-width: 350px;
`;


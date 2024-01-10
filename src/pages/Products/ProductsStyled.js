import styled from "styled-components";

export const ContainerCollection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
`;

export const ContainerCollectionPrimary = styled(ContainerCollection)`
  clear: both;
  font-size: 0.875em;
  text-align: center;
  border: 2px solid transparent;

  margin-left: 0;
  position: relative;
  list-style: none;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.25s ease 0s;

  @media (min-width: 768px) {
    flex: 0 0 78.3333333333%;
    max-width: 78.3333333333%;
    order: 2;
    padding: 15px 13px;
    align-content: start;
    
  }
`;

export const ContainerCollectionNav = styled.nav`
  height: auto;
  padding: 10px 0;
  margin-bottom: 30px;
  background: orange;
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    flex-grow: 1;
    flex-basis: 0;
    padding: 4px 0 16px 0;
  }

  form:last-child {
    display: inline-block;
    max-width: 100%;
    font-size: 16px;
    padding: 6px 36px 6px 20px;
    select {
      background: transparent;
      padding: 5px;
    }

    select option {
      background: #000;
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    height: 100px;
    h1 {
      margin: 0;
      padding: 0;
    }
  }

  @media (min-width: 768px) {
    background: transparent;
    h1 {
      text-align: start;
      margin-left: 20px;
    }
  }
`;

export const ContainerCollectionBtn = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  background: transparent;
  color: white;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  @media(min-width:768px){
    display: none;
  }
`;




export const Sidebar = styled.div`
  background-color: #2b2b2b;
  position: fixed;
  top: 0;
 
  box-shadow: 0 0 17px -1px rgba(0, 0, 0, 0.66); /* solo activo*/
  width: 288px;
  height: 100%;
  transition: left 0.2s;
  overflow-y: scroll;
  transition: left 0.2s;
  z-index: 100000000;
  display: block !important;
  padding: 20px 15px;
  border: 1px  solid #444;
  border-radius: 4px;

  & > :first-child{
    border: 2px solid #ececec;
    border-radius: 6px;
    color: white;

  }

 
  @media (min-width: 768px) {
    z-index: 10;
    order: 1;
    position: relative;
    left: 0 !important;
    width: 100%;
    min-height: 1px;
    flex: 0 0 21.6666666667%;
    max-width: 21.6666666667%;
    order: 1;
  }
`;

export const FilterCategory = styled.ul`
  span {
    display: flex;
    font-size: 1.2em;
    font-weight: 600;
    padding: 1.067em 0 1.067em 1em;
    border-bottom: 1px solid #ececec;
    cursor: pointer;
  }

  .categ{
   font-size: 1.1rem;
   display: block;
   margin-bottom: 10px;
  }

  li > :last-child {
    margin:0;
    padding: 0.357em 0.29em 0.643em;
    
    

    &:a {
      color: #2b2b2b;
    }

    .children a{
      border-bottom: 1px solid #ececec;
      width: 100%;
      display: inline-block;
      margin-bottom: 10px;
      cursor: pointer;

      &:hover{
        color: orange;
        transition: all .3s
      }      
    }
  }

 
`;

export const ViewMore = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  button {
    padding: 13px 22px !important;
    margin-bottom: 20px;
    margin-top: 20px;
    background: transparent;
    border: 1px solid #ff8203;
    width: 40%;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background: #ff8203;
      transition: all .5s;
    }
  }
`;
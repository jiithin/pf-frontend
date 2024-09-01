import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: secondary;
  padding-bottom: 6rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 992px) {
      padding-bottom: 5rem;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

//for smartphones only
export const HomeFirst = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
    flex: 1;
    justify-content: center;
    display: flex;
    margin-right: 5rem;
    margin-bottom: 5rem;
}

`;

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 80px;
    color: #495057;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: #778A93;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #495057;
    opacity: 0.85;
  }



    h5 {
      min-height: 5rem;
  }

    @media screen and (max-width: 992px) {
    text-align: left;
    align-items: left;

`;

//for big screens 
export const HomeRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
    @media screen and (max-width: 992px)  {
    display: none
  }
`;

export const Image = styled.img`
margin-top: 10px;
margin-left: 4rem;
  height: 400px;
  width: 500px;
@media screen and (max-width: 992px)  {
    max-width: 200px;
    max-height: 200px;
  }
`;




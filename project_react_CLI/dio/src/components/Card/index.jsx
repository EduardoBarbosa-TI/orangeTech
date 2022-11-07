import React from 'react'
import { FiThumbsUp } from "react-icons/fi";
import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    UserInfo,
    PostInfo,
    UserPicture
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.digitalinnovation.one/articles/cover/6c06ec3b-c164-4433-8b7e-25a2980cf1ce.png'/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4" />
                <div>
                    <h4>Eduardo Barbosa Bernardes</h4>
                    <p>Há 8 minutos </p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp dio Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp/> 16
                </p>
            </HasInfo>
        </Content>  
    </CardContainer>
  )
}

export { Card }

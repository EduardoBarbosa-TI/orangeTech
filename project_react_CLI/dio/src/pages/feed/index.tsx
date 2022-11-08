import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header"

import {Container, Column, Title, TitleHightLight} from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHightLight># RANKING 5 TOP DA SEMANA</TitleHightLight>
                    <UserInfo percentual={80} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                    <UserInfo percentual={30} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                    <UserInfo percentual={50} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                    <UserInfo percentual={56} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                    <UserInfo percentual={39} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                    <UserInfo percentual={99} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                    <UserInfo percentual={49} nome="Eduardo Barbosa Bernardes" image="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4"/>
                </Column>
            </Container >  
        </>
    )
}

export { Feed } 
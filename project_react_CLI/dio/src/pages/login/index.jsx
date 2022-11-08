import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from  "../../services/api";
import {Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./styles";

const schema = yup.object({
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minímo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const { control, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const navigate = useNavigate();

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválido.');
            }
        }catch{
            alert('Houve um erro, tente novamente.');
        }
    };
    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title> 
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.  
                    </Title> 
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            
                                <Button title="Entrar" variant="secondary" type="submit"></Button>
                        
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha</ForgotText>
                            <CreateText>Criar Conta</CreateText>

                            
                        </Row>

                        
                    </Wrapper>
                </Column>
            </Container>
            
        </>
    )
}
export { Login } 
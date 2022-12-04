import { MdEmail, MdLock,MdOutlinePersonOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from  "../../services/api";
import {Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./styles";
import { IFormData } from "./types";

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minímo 3 caracteres').required('Campo obrigatório'),
}).required();

const Registration = () => {

    const { control, handleSubmit, formState: { errors} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const navigate = useNavigate();

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.post(`users?email=${formData.email}&senha=${formData.password}`);
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message}  control={control} placeholder="Nome completo" leftIcon={<MdOutlinePersonOutline/>}/>
                            <Input name="email" errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Criar minha conta" variant="secondary" type="submit"></Button> 
                        </form>
                        <Row>
                            <ForgotText>
                                Ao clicar em "criar minha conta grátis", declaro que aceito asd Políticas de Privacidade e os Termos de Uso da DIO.
                            </ForgotText>

                             
                            <CreateText>
                                Já tenho conta.<Link to="/login">Fazer login</Link> 
                            </CreateText>     
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
            
        </>
    )
}
export { Registration } 
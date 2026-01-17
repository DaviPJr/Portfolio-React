import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mkoooyrz";

const Main = styled.main`
  min-height: calc(100vh - 160px - 100px); 
  display: flex;
  align-items: center;
  justify-content: center;

  /* Melhor no mobile: evita bug do 100vh no navegador */
  @media (max-width: 600px) {
    min-height: auto;
    align-items: flex-start;
    justify-content: center;
    padding: 32px 32px;
  }
`;

const Card = styled(motion.section)`
  width: 72%;               
  max-width: 820px;         
  background: rgba(209, 213, 219, 0.12);
   min-width: 0;
  border-radius: 12px;
  padding: 24px;            
  display: grid;
  grid-template-columns: 1.1fr 0.9fr; 
  gap: 20px;                
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 560px;
  }

  @media (max-width: 600px) {
    padding: 18px;      
    gap: 16px;
    align-items: center;
    justify-items: center;
  }
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #d1d5db;
  margin-bottom: 18px;

   @media (max-width: 600px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 26ch; 
    line-height: 1.4;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const Field = styled.input`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(209, 213, 219, 0.25);
  background: rgba(0, 0, 0, 0.25);
  color: #fff;

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(209, 213, 219, 0.25);
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  min-height: 140px;
  resize: vertical;

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;


const Button = styled.button`
  background: #3b82f6;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  width: fit-content;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
  }

   @media (max-width: 600px) {
    align-self: center;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #d1d5db;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(209, 213, 219, 0.08);
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: rgba(209, 213, 219, 0.16);
    transform: translateX(2px);
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;


const StatusMsg = styled.p`
  color: ${(p) => (p.success ? "#4ade80" : "#f87171")};
  margin-top: 8px;
`;


const Contato = () => {

const [status, setStatus] = useState("idle"); 

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Erro ao enviar");
        setStatus("sent");
        e.target.reset();
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

  return (
    <Main>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FormWrapper>
          <Title>Vamos conversar</Title>
          <Subtitle>Envie uma mensagem e retornarei em breve.</Subtitle>
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="Seu nome" required />
            <Field name="email" type="email" placeholder="Seu email" required />
            <Field name="subject" placeholder="Assunto" />
            <TextArea name="message" placeholder="Sua mensagem" required />
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </Button>
            {status === "sent" && (
              <StatusMsg success>Mensagem enviada com sucesso!</StatusMsg>
            )}
            {status === "error" && (
              <StatusMsg>Ops, tente novamente mais tarde.</StatusMsg>
            )}
          </Form>
        </FormWrapper>

        <Side>
          <Subtitle>Ou fale direto por aqui:</Subtitle>
          <ContactItem href="mailto:david.p.junior@hotmail.com">
            <FiMail size={20} /> david.p.junior@hotmail.com
          </ContactItem>
          <ContactItem
            href="https://www.linkedin.com/in/davi-pereira-913034277/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={20} /> LinkedIn
          </ContactItem>
          <ContactItem
            href="https://github.com/DaviPJr"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={20} /> GitHub
          </ContactItem>
          <ContactItem
            href="https://www.instagram.com/_daveds?igsh=MWh2ZWc3d3Uxa2k4dQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram size={20} /> Instagram
          </ContactItem>
        </Side>
      </Card>
    </Main>
  );
};

export default Contato;

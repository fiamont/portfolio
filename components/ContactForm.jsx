import React, { useState } from "react";
import style from "../styles/ContactForm.module.css";
import {
  FormControl,
  Input,
  FormLabel,
  Textarea,
  FormErrorMessage,
  Container,
  Button,
} from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", message: "" };

const initState = { values: initValues };

function ContactForm() {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    await sendContactForm(values);
  };

  //TODO - error-färger funkar inte (border och felmeddelande), disabled-knappen funkar inte heller

  return (
    <div className={style.contact}>
      <h2 className={style.rubrik}>
        Vill du komma i kontakt med mig? Kontakta mig på{" "}
        <a
          className={style.Link}
          onClick={handleURL(
            "https://www.linkedin.com/in/sofia-montgomery-3175a821a"
          )}
        >
          LinkedIn
        </a>{" "}
        eller via kontaktformuläret nedan:
      </h2>

      <Container className={style.form}>
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <FormLabel className={style.label}>Namn</FormLabel>
          <Input
            className={style.input}
            type="text"
            name="name"
            errorBorderColor="red.300"
            placeholder="Namn Namnsson"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage className={style.error}>
            Du måste fylla i det här fältet
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !values.email}>
          <FormLabel className={style.label}>Email</FormLabel>
          <Input
            className={style.input}
            type="text"
            placeholder="mail@hej.se"
            name="email"
            value={values.email}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage className={style.error}>
            Du måste fylla i det här fältet
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !values.message}>
          <FormLabel className={style.label} htmlFor="Meddelande">
            Meddelande
          </FormLabel>
          <Textarea
            className={style.textarea}
            name="message"
            rows={8}
            placeholder="Skriv ditt meddelande här..."
            value={values.message}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage className={style.error}>
            Du måste fylla i det här fältet
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel className={style.checkboxText}>
            <Input className={style.checkbox} type="checkbox" name="checkbox" />
            Jag är ingen robot
          </FormLabel>
        </FormControl>

        <FormControl>
          <Button
            className={style.button}
            disabled={!values.name || !values.email || !values.message}
            isLoading={isLoading}
            onClick={onSubmit}
          >
            Skicka
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default ContactForm;

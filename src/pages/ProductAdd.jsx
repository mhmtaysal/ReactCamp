
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";


export default function ProductAdd() {

    const initialValues = { companyName: "", email: "example@gmail.com" };
    const schema = Yup.object({

        companyName: Yup.string().required("Ürün adı zorunlur"),
        email: Yup.string().required("email zorunludur"),
    });

    return (

        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}>
            <Form className="ui form">
<KodlamaIoTextInput name="companyName" placeholder="Şirket adı" />
<KodlamaIoTextInput name="email" placeholder="email adresi" />
                {/* <FormField>
                    <Field name="companyName" placeholder="Şirket adı"></Field>
                    <ErrorMessage name="companyName" render = {error =>
                        <Label pointing basic color="red" content={error}>

                        </Label>
                    }></ErrorMessage>
                </FormField> */}
                {/* <FormField>
                    <Field name="email" placeholder="email adı"></Field>
                    <ErrorMessage name="email" render = {error =>
                        <Label pointing basic color="red" content={error}>

                        </Label>
                    }></ErrorMessage>

                </FormField> */}

                <Button color="green" type="submit"> Ekle


                </Button>
            </Form>
        </Formik>

    );
}

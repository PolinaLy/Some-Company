import { useForm, FormProvider } from "react-hook-form";
import { ContactForm } from "./ContactForm";
import { defaultValues, Schema, schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function ContactFormProvider() {
    const methods = useForm<Schema>({
        mode: "all",
        resolver: zodResolver(schema),
        defaultValues,
    });

    return (
        <FormProvider {...methods}>  
            <ContactForm />
        </FormProvider>
    )
}
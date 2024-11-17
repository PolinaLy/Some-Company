import { Container, Stack } from "@mui/material";
import { RHFTextField } from './RHFTextField';
import ButtonUi from "../../../shared/ui/Button/Button";
import { Schema } from "../types/schema";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { usePostExampleRequestMutation } from "../../../features/form/api";
import Title from "../../../shared/ui/Title/Title";

export function ContactForm() {
    const { handleSubmit, reset } = useFormContext<Schema>();
    const [sendRequest, { data, isSuccess }] = usePostExampleRequestMutation();

    const onSubmit: SubmitHandler<Schema> = (data) => {
        console.log("Form submitted with data:", data);
        reset();
        sendRequest(data)
    };
    
    return (
        <>
            {isSuccess && data.name ? ( 
                <Title size="bigh1" style={{textAlign: 'center'}}>Thank you for your interest, {data.name}!</Title>
            ) : (
            <>
                <Title size="bigh1" style={{textAlign: 'center', marginBottom: '40px'}}>Only CTA on the page</Title>
                <Container component="form" onSubmit={handleSubmit(onSubmit)} className="form contact-form">
                    <Stack sx={{gap: 4}}>
                        <RHFTextField name="name" label="Name" placeholder='Value'/>
                        <RHFTextField name="email" label="Email" placeholder='Value'/>
                        <RHFTextField name="message" label="Message" multiline rows={2} placeholder='Value'/>
                        {/* <ButtonUi type="submit" disabled={disabledBtn}> {disabledBtn ? "Sending..." : "Submit"}</ButtonUi> */}
                        <ButtonUi type="submit" style={{width: '100%', paddingTop: '8px', paddingBottom: '8px'}}>Submit</ButtonUi>
                    </Stack> 
                </Container>
            </>
            )}
        </> 
    )
}
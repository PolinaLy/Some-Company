import { ContactFormProvider } from "../entities/form/components/ContactFormProvider";
import Section from "../shared/ui/Section/Section";

export default function ContactFormPage() {
    return (
        <Section className="border-bottom" bgColor="#F5F5F5" style={{paddingTop: '80px', paddingBottom: '80px', flex: 1}}>
            <ContactFormProvider />
        </Section>
    )
}
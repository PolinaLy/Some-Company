import { SectionContainer } from "./style";
import { SectionProps } from "./types";

export default function Section({children, bgColor, className, style}: SectionProps) {
    return (
        <SectionContainer style={Object.assign({backgroundColor: bgColor}, style)} className={className}>{children}</SectionContainer>
    )
}
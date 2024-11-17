import { ButtonContainer, SpanContainer } from "./style"
import { IButtonProps } from "./types"

export default function ButtonUi({children, type, style, disabled}: IButtonProps) {
   if (type) {
        console.log(type)
        return (
            <ButtonContainer style={style} type={type} disabled={disabled}>
                {children}
            </ButtonContainer>
        )
   } else {
        return (
            <SpanContainer style={style}>
                {children}
            </SpanContainer>
        )
   }    
}


import { TitleH1, TitleH1Big, TitleH2, TitleH3, TitleH4 } from "./style";
import { TitleProps } from "./types";

export default function Title({children, size, style, className}:TitleProps) {
    switch (size) {
        case "bigh1": 
            return <TitleH1Big style={style} className={className}>{children}</TitleH1Big>;
        case "h1": 
            return <TitleH1 style={style} className={className}>{children}</TitleH1>;
        case "h2": 
            return <TitleH2 style={style} className={className}>{children}</TitleH2>;
        case "h3":
            return <TitleH3 style={style} className={className}>{children}</TitleH3>;
        case "h4":
             return <TitleH4 style={style} className={className}>{children}</TitleH4>;
        default: return ;
    }
}
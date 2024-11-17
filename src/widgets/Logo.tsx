import { Link } from "react-router-dom";
import { ERoutesNames } from "../shared/utils/routes-name";

interface LogoProps {
    children ?: React.ReactNode;
}

export default function Logo({children}: LogoProps) {
    return (
        <Link to={ERoutesNames.MAIN}>
            <span style={{    
                display: 'block',
                fontSize: '24px',
                fontFamily: "Inter"
                }}>
                {children}
            </span>
        </Link>
    )
}
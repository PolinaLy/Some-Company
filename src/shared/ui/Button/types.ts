export interface IButtonProps {
    children : React.ReactNode,
    type ?: 'button' | 'submit' | 'reset',
    style ?: object,
    disabled ?: boolean,
}
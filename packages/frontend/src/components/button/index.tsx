import * as S from './style';

export interface ButtonProps extends S.StyledButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    handleClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <S.Button {...props}>
            {props.children}
        </S.Button>
    )
}
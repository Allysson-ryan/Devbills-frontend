import { styled } from 'styled-components';
import { theme } from '../../style/theme';

type CardProps = {
  $variant: 'balance' | 'incomes' | 'expenses';
};

const variantColorMap = {
  balance: theme.colors.info,
  incomes: theme.colors.success,
  expenses: theme.colors.error,
};

export const CardStyles = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
  width: 100%;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${(props) => variantColorMap[props.$variant]};
  }

  span {
    font-size: 1rem;
    font-size: 300;
    color: ${theme.colors.neutral};
  }

  strong {
    font-size: 1.5rem;
    font-size: 300;
    color: ${(props) => variantColorMap[props.$variant]};
  }
`;

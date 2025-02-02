import { formatCurrency } from '../../Utils/format-currency';
import { Content, Info, TransactionStyles } from './style';

export type TransactionProps = {
  id: number;
  title: string;
  date: string;
  amount: number;
  category: {
    title: string;
    color: string;
  };
  variant?: 'income' | 'expense';
};
export function Transaction({
  id,
  title,
  date,
  amount,
  category,
  variant = 'income',
}: TransactionProps) {
  return (
    <TransactionStyles>
      <Info>
        <span>{id.toString().padStart(4, '0')}</span>
        <div>
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
      </Info>
      <Content $variant={variant} $tagColor={category.color}>
        <strong>{formatCurrency(amount)}</strong>
        <span>{category.title.toLocaleUpperCase()}</span>
      </Content>
    </TransactionStyles>
  );
}

import {
  Aside,
  Balance,
  CartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
  TransactionGroup,
} from './style';
import { Logo } from './../../components/logo/index';
import { Button } from '../../components/button';
import { Title } from '../../components/title';
import { Input } from '../../components/input';
import { InputMask } from '@react-input/mask';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { Transaction } from '../../components/transaction';
import { CreateCategoryDialog } from '../../components/create-category-dialog';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button>Nova Transação</Button>
          <CreateCategoryDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Início"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Receitas" amount={1000000} variant="incomes" />
            <Card title="Gastos" amount={1000000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no período"
              />
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />

              <CartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </CartAction>
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title title="Transações" subtitle="Receitas e Gastos no período" />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar transação..." />
              <ButtonIcon />
            </SearchTransaction>
          </header>
          <TransactionGroup>
            <Transaction
              id={1}
              amount={20000}
              date="09/10/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={20000}
              date="09/10/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={20000}
              date="09/10/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  );
}

import { CounterPresenter } from "./Presenter";
import { useCounter } from "./hooks";

type Props = {
  initialCount: number;
};

export const CounterContainer: React.FC<Props> = ({ initialCount }) => {
  const { count, incrementByOne, decrementByOne } = useCounter(initialCount);

  return (
    <CounterPresenter
      count={count}
      incrementByOne={incrementByOne}
      decrementByOne={decrementByOne}
    />
  );
};

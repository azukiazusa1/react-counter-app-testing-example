type Props = {
  count: number;
  incrementByOne: () => void;
  decrementByOne: () => void;
};

export const CounterPresenter: React.FC<Props> = ({
  count,
  incrementByOne,
  decrementByOne,
}) => (
  <div>
    <h1>Counter</h1>
    <p>{count}</p>
    <button onClick={incrementByOne}>+</button>
    <button onClick={decrementByOne}>-</button>
  </div>
);

import { count } from 'console';
import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  const maxCount = initialValues?.maxCount;

  const increaseBy = (value: number) => {

    let newValue = Math.max(counter + value, 0);

    // if(initialValues?.maxCount){
    //   newValue = Math.min(newValue, initialValues.maxCount)
    // }

    if(initialValues?.maxCount && newValue > initialValues?.maxCount) return; // Si existe el maxCount, hacer la evaluacion
    
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    isMounted.current = true;
  },[])

  useEffect(() => {
    if(!isMounted.current) return

    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount,
    reset
  };
};

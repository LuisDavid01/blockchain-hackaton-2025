import { useCallback } from "react";
import { parseEther } from "viem";
import { CommonInputProps, InputBase, IntegerVariant, isValidInteger } from "~~/components/scaffold-eth";

type IntegerInputProps = CommonInputProps<string> & {
  variant?: IntegerVariant;
  disableMultiplyBy1e18?: boolean;
};

export const IntegerInput = ({
  value,
  onChange,
  name,
  placeholder,
  disabled,
  variant = IntegerVariant.UINT256,
  disableMultiplyBy1e18 = false,
}: IntegerInputProps) => {
  // Calcular el error directamente en el render - NO usar useEffect
  const inputError = !isValidInteger(variant, value);

  const multiplyBy1e18 = useCallback(() => {
    if (!value || inputError) {
      return;
    }
    try {
      return onChange(parseEther(value as `${number}`).toString());
    } catch (error) {
      console.error("Error parsing ether:", error);
    }
  }, [onChange, value, inputError]);

  return (
    <InputBase
      name={name}
      value={value}
      placeholder={placeholder}
      error={inputError}
      onChange={onChange}
      disabled={disabled}
      suffix={
        !inputError &&
        !disableMultiplyBy1e18 && (
          <div
            className="space-x-4 flex tooltip tooltip-top tooltip-secondary before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
            data-tip="Multiply by 1e18 (wei)"
          >
            <button
              className={`${disabled ? "cursor-not-allowed" : "cursor-pointer"} font-semibold px-4 text-accent`}
              onClick={multiplyBy1e18}
              disabled={disabled || inputError}
              type="button"
            >
              ∗
            </button>
          </div>
        )
      }
    />
  );
};

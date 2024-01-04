import { forwardRef, useEffect, useState } from "react"
import { motion } from 'framer-motion';
import { Input, InputProps } from ".."
import { cn } from "@/utils"
import { Flex } from "../..";

interface PasswordInputProps extends InputProps {
  passwordInput: string;
  setPasswordInput: (password: string) => void;
  withStrengthCheck?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({
    className,
    setPasswordInput,
    passwordInput,
    withStrengthCheck = false,
    ...props
  }, ref) => {
    const [strength, setStrength] = useState<"low" | "medium" | "high">("low");

    // calculating the password strength with every password input change
    useEffect(() => {
      const hasText = /[a-zA-Z]/.test(passwordInput);
      const hasNumber = /\d/.test(passwordInput);
      const hasSymbol = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/\\-]/.test(passwordInput);

      if (hasSymbol) {
        setStrength("high");
      } else if (hasNumber) {
        setStrength("medium");
      } else if (hasText) {
        setStrength("low");
      } else {
        setStrength("low"); // Default to low if no criteria met
      }
    }, [passwordInput]);

    if (!withStrengthCheck) {
      return (
        <Input
          ref={ref}
          type="password"
          className={cn("", className)}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value as string)}
          {...props}
        />
      )
    } else {
      return (
        <Flex direction="column" alignItems="start" gap={6}>
          <Input
            ref={ref}
            type="password"
            className={cn("", className)}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value as string)}
            {...props}
          />
          {passwordInput.length ? <span
            className={cn("password-strength-text-wrapper transition-all text-xs",
              strength === "low" && "text-red-400",
              strength === "medium" && "text-yellow-600",
              strength === "high" && "text-green-600"
            )}
          >
            <motion.span
              key={"low"}
              initial={{
                opacity: 0,
                top: 6
              }}
              animate={{
                opacity: 1,
                top: 0
              }}
              exit={{
                opacity: 0,
                top: 6
              }}
              transition={{
                type: "spring"
              }}
            >
              {strength === "low" && "Low Password Strength"}
              {strength === "medium" && "Average Password Strength"}
              {strength === "high" && "High Password Strength! Good Job"}
            </motion.span>
          </span> : <></>}
        </Flex>
      )
    }
  }
)

export {
  PasswordInput
}

export type {
  PasswordInputProps
}
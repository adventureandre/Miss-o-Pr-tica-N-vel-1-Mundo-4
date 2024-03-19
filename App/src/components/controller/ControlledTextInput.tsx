import { Input, InputProps } from "@components/Input";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

export function ControlledTextInput<FormType extends FieldValues>({ 
    control, 
    name,
     rules, 
     ...textInputProps 
    }:UseControllerProps<FormType> & InputProps) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <Input
                    {...textInputProps}
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                errorMessage={fieldState.error?.message}
                />
            )}
        />
    );
}
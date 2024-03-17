import { FieldErrorsImpl, UseFormRegisterReturn, ValidationRule } from "react-hook-form";

type formInfo = {
  input: boolean;
  type: string;
  placeholder?: string;
  label: string;  
  required: boolean;
  errors: Partial<FieldErrorsImpl<{
    [x: string]: string;
  }>>
  register: (name: string, options: Partial<{
    required: ValidationRule<boolean>;
    // pattern?: ValidationRule<boolean>;
  }>) => UseFormRegisterReturn
}

function InputField({input, label, type, required, placeholder, errors, register}: formInfo){
  const firstLetterUpper = label.charAt(0).toLocaleUpperCase() + label.slice(1);
  const noWhiteSpace = label.replace(' ', ''); 
  return(
    <div className="form-control">
      <label>{firstLetterUpper}</label>
      {input ? 
      (<input
        // name={label}
        className="post-job-data-input"
        placeholder={placeholder}
        type={type}
        {...register(noWhiteSpace, {
          required: required,        
        })}
      />) : 

      (<textarea 
      // required 
      wrap="soft" 
      rows={30} 
      cols={10}
      {...register(noWhiteSpace, {
        required: required,        
      })}>

      </textarea>)} 
      {errors[noWhiteSpace] && errors[noWhiteSpace]!.type === "required" && (<p className="errorMsg">{firstLetterUpper} is required.</p>)}
  </div>
  )
}

export default InputField; 
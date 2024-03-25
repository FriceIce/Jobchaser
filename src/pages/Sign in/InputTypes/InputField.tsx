import { FieldErrorsImpl, UseFormRegisterReturn, ValidationRule } from "react-hook-form";

type formInfo = {
  input: boolean;
  type: string;
  placeholder?: string;
  label: string;  
  required: boolean;
  property: string;
  errors: Partial<FieldErrorsImpl<{
    [x: string]: string;
  }>>
  register: (name: string, options: Partial<{
    required: ValidationRule<boolean>;
    pattern: RegExp | false;
  }>) => UseFormRegisterReturn
}

function InputField({input, label, property, type, required, placeholder, errors, register}: formInfo){
  const firstLetterUpper = label.charAt(0).toLocaleUpperCase() + label.slice(1);

  const differentPatterns = (property: string) => {
    let pattern;
    let errorMessage;
    if(property === 'email'){
      pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
      errorMessage = 'Ogiltig e-postadress. Vänligen ange en giltig e-postadress.' 
    } 

    if(property === 'password'){
      pattern = /^(?=.*[A-Z])(?=.*\d)(?!.*<[^>]+>).*$/;
      errorMessage = 'Vänligen ange ett lösenord med minst en stor bokstav och en siffra.'; 
    } 

    if(property === 'userName'){
      pattern = /^[a-zA-ZåäöÅÄÖ\s]{2,}$/;
      errorMessage = 'Vänligen ange en giltig sträng med minst två bokstäver.' 
    } 

    return {pattern, errorMessage};
  }

  const {pattern, errorMessage} = differentPatterns(property); 

  return(
    <div className="form-control">
      <label>{firstLetterUpper}</label>
      {input ? 
      (<input
        // name={label}
        className="post-job-data-input"
        placeholder={placeholder}
        type={type}
        {...register(property, {
          required: required,
          pattern: pattern
        })}
      />) : 

      (<textarea 
      // required 
      wrap="soft" 
      rows={30} 
      cols={10}
      {...register(property, {
        required: required,    
        pattern: !input && /^[A-Za-z0-9.,\s]+$/
      })}>

      </textarea>)} 
      {errors[property] && errors[property]!.type === "required" && 
      (<p className="errorMsg">{firstLetterUpper} är obligatoriskt.</p>)}

      {errors[property] && errors[property]!.type === 'pattern' && 
      (<p className="errorMsg">{errorMessage}</p>)}
  </div>
  )
}

export default InputField; 
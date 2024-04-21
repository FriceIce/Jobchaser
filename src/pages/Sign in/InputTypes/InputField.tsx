import { FieldErrorsImpl, useFormContext} from "react-hook-form";
// import { CreateUser } from "../../../features/user/userSlice";

type formInfo = {
  type: string;
  placeholder?: string;
  label: string;  
  required: boolean;
  property: 'email' | 'password' | 'userName';
  errors: Partial<FieldErrorsImpl<{
    [x: string]: string;
  }>> 
}

function InputField({label, property, type, required, placeholder, errors}: formInfo){
  const { register } = useFormContext();
  const firstLetterUpper = label.charAt(0).toLocaleUpperCase() + label.slice(1);

  const differentPatterns = (property: string) => {
    let pattern;
    let errorMessage;
    if(property === 'email'){
      pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
      errorMessage = 'Ogiltig e-postadress. Vänligen ange en giltig e-postadress.' 
    } 

    if(property === 'password'){
      pattern = /^(?=.*[A-Z])(?=.*\d)(?!.*<.*>).*.{6,}$/;
      errorMessage = 'Vänligen ange en sträng som innehåller minst en stor bokstav, en siffra och är minst 6 tecken lång.'; 
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
      <label style={{whiteSpace: 'nowrap'}}>{firstLetterUpper}</label>
    
      <input
        className="post-job-data-input"
        placeholder={placeholder}
        type={type}
        {...register(property, {
          required: required,
          pattern: pattern
        })}
      />

      {errors[property] && errors[property]!.type === "required" && 
      (<p className="errorMsg">{firstLetterUpper} är obligatoriskt.</p>)}

      {errors[property] && errors[property]!.type === 'pattern' && 
      (<p className="errorMsg">{errorMessage}</p>)}
  </div>
  )
}

export default InputField; 

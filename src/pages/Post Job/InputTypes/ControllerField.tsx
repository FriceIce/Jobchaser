//@ts-check
import { Control, Controller, FieldErrorsImpl, FieldValues} from "react-hook-form"
import Select from "react-select";
import useFetch from "../../../hook/useFetch";

type info = {
  label: string;
  required: boolean;
  errors?: Partial<FieldErrorsImpl<{
    [x: string]: string;
  }>>;
  control: Control<FieldValues, any>; 
  prop: string; 
}

function ControllerField({label, required, control, prop}: info){
  const firstLetterUpper = label.charAt(0).toLocaleUpperCase() + label.slice(1)
  const noWhiteSpace = label.replace(' ', '');
  const {data} = useFetch('http://localhost:8000/' + prop); // Starta Servern via terminalen: json-server --watch public/data/programming-languages.json --port 8000 

  return (
    <div className="form-control">
      <label>{firstLetterUpper}</label>
      <Controller 
        name={noWhiteSpace}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <Select 
            closeMenuOnSelect={false}
            className="post-job-data-controller-input"
            {...field}
            isMulti 
            options={ data && data}
          />
        )}
      />
    </div>
  )
}

export default ControllerField; 
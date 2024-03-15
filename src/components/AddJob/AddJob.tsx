import { FieldErrorsImpl, useForm } from 'react-hook-form'; 
import "./AddJob.css";
import { ReactNode, useState } from 'react';

function AddJob(){
  const [submit, setSubmit] = useState('Next')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data: any) => {
    reset();
    console.log(data);
  };

  type formInfo = {
    type: string;
    label: string;  
    required: boolean;
    errors: Partial<FieldErrorsImpl<{
      [x: string]: string;
    }>>
  }

  const inputField = ({label, type, required, errors}: formInfo): ReactNode  => {
    const title = label.charAt(0).toLocaleUpperCase() + label.slice(1).toLocaleLowerCase(); 
    const text = label.toLowerCase(); 
    return(
      <div className="form-control">
      <label>{title}</label>
      <input 
        className='data-input'
        type={type}
        {...register(text, {
          required: required
        })}
      />
      {errors[text] && errors[text]!.type === "required" && (
        <p className="errorMsg">{title} is required.</p>
      )}
    </div>
    )
  }

  const toogleBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    return (target.innerText === 'Next') ? setSubmit('Post') : setSubmit('Next'); 
  }

  console.log(errors)

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault(); 
        if(submit === 'Post') {
          handleSubmit(onSubmit)}
          reset()
          return 
        }
      }>
        {inputField({label: 'company', type: 'text', required: true, errors})}
        {inputField({label: 'logo-url', type: 'url', required: true, errors})}
        {inputField({label: 'position', type: 'text', required: true, errors})}
        {inputField({label: 'Role', type: 'text', required: true, errors})}
        {inputField({label: 'Level (Exemple: Junior)', type: 'text', required: true, errors})}
        {inputField({label: 'contract', type: 'text', required: true, errors})}
        {inputField({label: 'framework/library', type: 'text', required: false, errors})}
        {inputField({label: 'languages', type: 'text', required: false, errors})}
        {inputField({label: 'Location', type: 'text', required: true, errors})}
        <div className="form-control">
          <label></label>
          <button type="submit" onClick={toogleBtn}>{submit}</button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
{/* {submit === 'Next' ? 
  [inputField({label: 'company', type: 'text', required: true, errors}), 
  inputField({label: 'logo-url', type: 'url', required: true, errors}), 
  inputField({label: 'position', type: 'text', required: true, errors}), 
  inputField({label: 'Role', type: 'text', required: true, errors})] :
  [inputField({label: 'Level (Exemple: Junior)', type: 'text', required: true, errors}), 
  inputField({label: 'contract', type: 'text', required: true, errors}), 
  inputField({label: 'framework/library', type: 'text', required: false, errors}), 
  inputField({label: 'languages', type: 'text', required: false, errors}), 
  inputField({label: 'Location', type: 'text', required: true, errors})]} */}
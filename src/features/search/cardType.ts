export type Card = {
  id: string; 
  headline: string;
  duration: {label: string | null};
  employer: {name: string} 
  working_hours_type: {label: string| null};
  employment_type: {label: string | null};
  occupation: {label: string};
  workplace_address: {municipality: string};
  last_publication_date: string;
  webpage_url: string;
  logo_url: string;
};
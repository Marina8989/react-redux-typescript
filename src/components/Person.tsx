import React, {FC, ChangeEvent, useState} from 'react'

interface Props {
  name: string;
  age: number;
  email: string;
//   getName: (name: string) => string;
}

export const Person:FC<Props> = ({name, age, email}) => {
   const [country, setCountry] = useState<string | null >("")

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       setCountry(e.target.value)
   }
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input onChange={handleChange} placeholder="Write down your country..." />

            {country}
        </div>
    )
}
 
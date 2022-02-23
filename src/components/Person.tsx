import React, {FC, ChangeEvent, useState} from 'react'

export enum HairColor {
    Blonde = "Your Hair is Blonde",
    Brown = "Cool Hair Color",
    Pink = "Wow, That is so cool"
}
interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor
//   getName: (name: string) => string;
}

export const Person:FC<Props> = ({name, age, email, hairColor}) => {
   const [country, setCountry] = useState<string | null >("")
   type NameType = 'Jack' | 'Pedro'
   const nameForType:NameType = 'Pedro';

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
            {hairColor}
        </div>
    )
}
 
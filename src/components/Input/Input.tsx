import React, { ChangeEvent } from "react"
import { StyledSearch } from "./styles"

interface SearchProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export const Input = ({value, onChange, type}: SearchProps) => {
  return (
    <div>
        <StyledSearch value={value} onChange={onChange} placeholder="search ..." type={type}/>
    </div>
  )
}

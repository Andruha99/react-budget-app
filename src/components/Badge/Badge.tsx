import React from "react"
import { useExpensesContext } from "../../context/ExensesContext/ExpensesContext"

interface BadgeProps {
    cost: string;
}

export const Badge = ({cost}: BadgeProps) => {
    return (
        <div>{cost}</div>
    )
}

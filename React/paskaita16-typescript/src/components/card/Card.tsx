import { ReactNode } from "react";

type Owner = { // isskaidytas owner
    name: string;
    age: number;  
}
type Equipment = { // isskaidytas owner
    heating: boolean;
    cooling: boolean;  
    fogLights: boolean;
}

type Car = {
    brand: string; 
    model: string;
    accidents?: string[]; // array apra6ymas
    owners: Owner[]; // isskaido owner 
    equipment: Equipment[];
}

type CardProps = {
    title?: string; //? ar tai ka=kas ar undifiend
    description: string;
    children: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
   
    if (title) {
        title.charAt(0) // patikrina ar sttringas reiksme ar ne
     // title?.charAt(0)  //kitas tikrinimo  budas
    }

    function doStuff(name: string, age?: number) {
        return 5;
    }
const doStuffResult = doStuff();

function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.target);
    
}

   return ( 
   <div>
        <h3>{title}</h3>
        <div>description</div>
        <div>Footer</div>
        <button onClick={onClickHandler}>Click me</button>
    </div>
    )
}
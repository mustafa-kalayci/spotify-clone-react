import { Icon } from "../../Icons"
export default function NavSearch () {
    return(
        <div className="mr-auto ml-4 relative">
            <label className="absolute text-black p-2">
                <Icon size={18} name="search"/>  
                </label>
             <input className="h-10 pl-10 bg-white rounded-3xl placeholder-black/50 text-sm w-[22.75rem] "  placeholder="Sanatçılar, şarkılar veya podcast'ler"type="text"></input>
        </div>
    )
}
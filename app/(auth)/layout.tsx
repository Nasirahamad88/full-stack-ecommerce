export default function Authlayout (
    {
        children
    }:{
        children: React.ReactNode
    }
){
    return(
        <div className="flex items-conter justify-center h-full">
            {children}
        </div>
    )
}